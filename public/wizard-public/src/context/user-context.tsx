import { PropsWithChildren, useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface User {
    userId: string | null;
    userName: string | null;
    picture?: string | null;
}

export interface UserContext {
    userId: string | null;
    userName: string | null;
    setAuthorizeToken: (token: string) => void;
    tryLogging(): Promise<boolean>;
    tryLogOut(): Promise<void>;
}

const userContext = createContext<UserContext>({ 
    userId: null, 
    userName: null, 
    setAuthorizeToken: () => { }, 
    tryLogging: () => Promise.resolve(false),
    tryLogOut: () => Promise.resolve()
});

export const Provider = userContext.Provider;
export const Consumer = userContext.Consumer;

export function useUserContext() {
    const context = useContext(userContext);

    return context;
}

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
    const storageToken = localStorage.getItem(resolveStorageKey());
    const userData = resoleToken(storageToken);
    const [user, updateUser] = useState<User>(userData);
    const { loginWithPopup, isAuthenticated, isLoading, user: authUser, getIdTokenClaims, logout } = useAuth0();

    console.log({ authUser })
    useEffect(() => {
        getIdTokenClaims().then(token => {
            console.log({token});
        });
    }, [getIdTokenClaims]);
    if (isLoading) {
        return null;
    }

    return (
        <Provider value={{
            ...user,
            ...(isAuthenticated ? { userId: authUser?.sub, userName: authUser?.nickname, picture: authUser?.picture }: {}),
            tryLogOut: async () => {
                if (isAuthenticated) {
                    logout({ localOnly: true });
                }

                localStorage.setItem(resolveStorageKey(), '');
                updateUser(resoleToken(''));
            },
            tryLogging: async () => {
                await loginWithPopup({});
                return Promise.resolve(true);
            },
            setAuthorizeToken: token => {
                localStorage.setItem(resolveStorageKey(), token);
                const newUserData = resoleToken(token);
                updateUser(newUserData);
            }
        }}>
            {children}
        </Provider>
    );
}

function resolveStorageKey() {
    return 'AUTH_TOKEN';
}

function resoleToken(token: string | null): User {
    if (!token) {
        return { userId: null, userName: null };
    }
    return ({
        userId: '1',
        userName: 'test'
    })
}