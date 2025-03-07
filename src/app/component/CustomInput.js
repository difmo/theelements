const CustomInput = ({
  style,
  placeholder,
  label,
  id,
  type,
  onChange,
  value,
  error,
}) => {
  return (
    <div className="relative mb-1">
      <label
        className="block mb-1 text-sm text-gray-800 transition-all duration-300 ease-in-out"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none border w-full py-2.5 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-1 focus:ring-primary-orange focus:border-primary-orange transition-all duration-300 ease-in-out rounded-md"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
      <p className="mt-1 text-xs italic text-red-500">{error}</p>
    </div>
  );
};

export default CustomInput;
