import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <div tabIndex={1} className="relative outline-none rounded-md shadow-md shadow-primary/40 hover:shadow-primary/60 dark:shadow-white/50 hover:dark:shadow-white/60 p-4 md:p-6">
            <div className="z-20 relative">
                {children}
            </div>
            <div className="z-10 absolute top-0 left-0 w-full h-full bg-light dark:bg-dark bg-opacity-90"></div>
        </div>
    );
}