import React from "react";

export interface InputProps {
  value: number | undefined;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  name: string;
  label?: string;
  required?: boolean;
}

export default function TimeInput({
  value,
  onChange,
  placeholder = "",
  name = "",
  label,
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
        type="time"
        className="w-full px-6 py-3 border-2 border-black rounded focus:ring-0 focus:border-gray-500"
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        required={!!required}
      />
    </div>
  );
}
