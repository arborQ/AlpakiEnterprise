import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <div tabIndex={1} className="relative outline-none rounded-xl shadow-xl focus:shadow-2xl focus-within:shadow-2xl p-4 md:p-6 border transition duration-150 ease-in-out">
            <div className="z-20 relative">
                {children}
            </div>
            <div className="z-10 absolute top-0 left-0 w-full h-full bg-light dark:bg-dark bg-opacity-90"></div>
        </div>
    );
}