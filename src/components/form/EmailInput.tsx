import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  name: string;
}

export default function EmailInput({
  value = "",
  onChange,
  placeholder = "",
  name = "",
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      type="email"
      className="w-full px-6 py-3 border-2 border-black rounded focus:outline-0 focus:border-gray-500"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
