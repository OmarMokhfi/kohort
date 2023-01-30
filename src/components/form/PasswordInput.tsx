import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  name: string;
  right?: React.ReactNode;
}

export default function PasswordInput({
  value = "",
  onChange,
  placeholder = "",
  name = "",
  right,
}: InputProps) {
  return (
    <div className="w-full">
      <input
        placeholder={placeholder}
        type="password"
        className="w-full px-6 py-3 border-2 border-black rounded focus:outline-0 focus:border-gray-500"
        value={value}
        onChange={onChange}
        name={name}
      />
      {right && <div className="flex justify-end mt-2">{right}</div>}
    </div>
  );
}
