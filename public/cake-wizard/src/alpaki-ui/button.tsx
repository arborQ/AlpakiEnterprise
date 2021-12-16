import { useState, useCallback, PropsWithChildren } from "react";
import { Spinner } from './spinner';
import { classNames } from '../utils/classNames';

export interface ButtonProps {
    isProcessing?: boolean;
}

export function Button(props: PropsWithChildren<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    const { isProcessing: externalProcessing } = props;
    const [isProcessing, changeIsProcessing] = useState(false);
    const { onClick, disabled, children, ...otherProps } = props;

    const isDisabled = disabled || isProcessing || !!externalProcessing;

    var onClickCallback = useCallback(async (event: any) => {
        if (onClick) {
            changeIsProcessing(true);
            await Promise.resolve(onClick(event))
            changeIsProcessing(false);
        }
    }, [onClick]);

    const className = classNames('shadow-md hover:shadow-lg group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',{
        'opacity-50 cursor-not-allowed': isDisabled
    });

    return (
        <button
            className={className}
            onClick={onClickCallback}
            disabled={isDisabled}
            {...otherProps}>
            {
                (isProcessing || !!externalProcessing) && (
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <Spinner color={'primary'} size={6} />
                    </span>
                )
            }
            <span className="text-primary leading-8 text-lg">
                {children}
            </span>
        </button>
    );
}