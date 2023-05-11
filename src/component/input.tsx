const Input = (props: any) => {
    const { id, placeholder = '', label = '', type = 'text', ...rest } = props;
    return (
        <div
            className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`}
        >
            <label
                htmlFor={id}
                className={`text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5`}
            >
                {label}
            </label>
            <input
                type={type}
                className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md`}
                id={id}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
};

export default Input;