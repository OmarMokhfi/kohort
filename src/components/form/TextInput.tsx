interface InputProps {
  value: string;
  onChange: any;
  placeholder: string;
  name: string;
  label?: string;
  required?: boolean;
}

export default function TextInput({
  value = "",
  onChange,
  placeholder = "",
  name = "",
  label,
  required,
}: InputProps) {
  const onChangeEventProxy = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {label && (
        <div className="mb-1 ml-1 font-bold">
          <label htmlFor={name}>
            {label} {required && <span className="text-red-400">*</span>}
          </label>
        </div>
      )}
      <input
        placeholder={placeholder}
        type="text"
        className="w-full px-6 py-3 border-2 border-black rounded focus:ring-0 focus:border-gray-500"
        value={value}
        onChange={onChangeEventProxy}
        name={name}
        id={name}
        required={!!required}
      />
    </div>
  );
}
