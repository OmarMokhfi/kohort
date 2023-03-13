import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  name: string;
  label?: string;
  required?: boolean;
}

export default function EmailInput({
  value = "",
  onChange,
  placeholder = "",
  name = "",
  label = "",
  required,
}: InputProps) {
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
        type="email"
        className="w-full px-6 py-3 border-2 border-black rounded focus:outline-0 focus:border-gray-500"
        value={value}
        onChange={onChange}
        name={name}
        required={!!required}
      />
    </div>
  );
}
