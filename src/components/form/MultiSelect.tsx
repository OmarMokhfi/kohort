import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface InputProps {
  value: Array<string>;
  onChange: (val: Array<string>) => void;
  placeholder: string;
  name: string;
  label?: string;
  required?: boolean;
}

export default function MultiSelectInput({
  value = [],
  onChange,
  placeholder = "",
  name = "",
  label,
  required,
}: InputProps) {
  const [text, setText] = React.useState("");

  const onEnter = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (value.includes(text)) {
        alert("Duplicates are not allowed");
      } else {
        onChange([...value, text]);
        setText("");
      }
    }
  };

  const removeElement = (val: string) => {
    let temp = [...value];
    temp.splice(value.indexOf(val), 1);
    onChange(temp);
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
        value={text}
        onChange={(e) => setText(e.target.value)}
        name={name}
        onKeyDown={onEnter}
      />
      <div className="flex gap-3 mt-3 max-w-full flex-wrap">
        {value.map((item, index) => (
          <div
            key={index}
            className="relative group px-3 py-1 rounded-md bg-black text-white"
          >
            #{item}
            <button
              type="button"
              className="hidden group-hover:block absolute top-0 text-red-500 right-0 -translate-y-1/2 translate-x-1/2"
            >
              <AiFillCloseCircle
                size={20}
                onClick={() => removeElement(item)}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
