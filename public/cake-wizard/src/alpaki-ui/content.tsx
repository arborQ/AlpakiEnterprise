import { PropsWithChildren } from "react";

export interface ContentContainerProps extends PropsWithChildren<any> {

}

export function ContentContainer({ children }: ContentContainerProps) {
    return (
        <div className="flex place-content-center">
            <div className="w-11/12 sm:w-10/12 md:w-8/12">
                {children}
            </div>
        </div>
    );
}