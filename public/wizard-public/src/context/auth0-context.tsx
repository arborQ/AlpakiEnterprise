import { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export interface UserContext {
    userId?: string;
    userName?: string;
    picture?: string;
    tryLogging(): Promise<boolean>;
    tryLogOut(): Promise<void>;
}

const userContext = createContext<UserContext>({
    tryLogging: () => Promise.resolve(false),
    tryLogOut: () => Promise.resolve()
});

export const Provider = userContext.Provider;
export const Consumer = userContext.Consumer;

export function useUserContext() {
    const context = useContext(userContext);

    return context;
}

export function UserAuth0ContextProvider({ children }: PropsWithChildren<{}>) {
    const { loginWithPopup, isAuthenticated, isLoading, user: authUser, getIdTokenClaims, logout } = useAuth0();

    if (isLoading) {
        return null;
    }

    return (
        <Provider value={{
            ...(isAuthenticated ? { userId: authUser?.sub, userName: authUser?.nickname, picture: authUser?.picture } : {  }),
            tryLogOut: async () => {
                if (isAuthenticated) {
                    logout({ localOnly: true });
                }
            },
            tryLogging: async () => {
                try {
                    await loginWithPopup({});
                    return Promise.resolve(true);
                } catch {
                    return Promise.resolve(false);
                }
            }
        }}>
            {children}
        </Provider>
    );
}
