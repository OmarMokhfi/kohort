import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  placeholder: string;
  name: string;
  children: React.ReactElement;
}

export default function InputWrapper({
  value = "",
  onChange,
  placeholder = "",
  name = "",
  children,
}: InputProps) {
  return React.Children.map(children, function (child: React.ReactElement) {
    return React.cloneElement(child, {
      parentValue: { value, onChange, placeholder, name },
    });
  });
}
