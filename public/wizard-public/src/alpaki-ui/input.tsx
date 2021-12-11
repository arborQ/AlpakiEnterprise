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
                    className="mt-1 py-3 px-4 outline-none block w-full focus:shadow-lg shadow-md sm:text-md border-gray-300 rounded-md border"
                    {...otherProps}
                />
            </label>
        </div>
    );
}