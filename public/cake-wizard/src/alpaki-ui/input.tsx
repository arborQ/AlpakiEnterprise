export interface InputProps {
    value: string;
    label: string;
}

export function Input({ value, label, type = "text", ...otherProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="col-span-6 sm:col-span-3 pb-4">
            <label className="block text-md font-medium text-gray-700">
                {label}
                <input
                    type={type}
                    value={value}
                    className="mt-1 py-3 px-4 outline-none block w-full shadow-sm dark:bg-black shadow-primary/40 hover:shadow-primary/60 dark:shadow-white/50 hover:dark:shadow-white/60 sm:text-md border-gray-300 rounded-md border"
                    {...otherProps}
                />
            </label>
        </div>
    );
}