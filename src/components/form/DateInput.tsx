import "@/styles/calendar.css";
import { useRef, useState } from "react";
import Calendar from "react-calendar";
import { CiCalendarDate } from "react-icons/ci";

interface InputProps {
  value: Date | null;
  onChange: (value: Date) => void;
  placeholder: string;
  name: string;
  label?: string;
  required?: boolean;
}

export default function DateInput({
  value,
  onChange,
  placeholder = "",
  name = "",
  label,
  required,
}: InputProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const toggleShow = () => {
    if (!show && ref.current) {
      ref.current.focus();
    }
    setShow(!show);
  };
  const changeDate = (val: any) => {
    onChange(val);
    setShow(false);
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
      <div className="relative border-2 border-black rounded pr-[50px]">
        <input
          placeholder={placeholder}
          ref={ref}
          type="text"
          className="w-full px-6 py-3 border-transparent rounded-l focus:outline-0 focus:border-transparent focus:ring-0"
          value={value?.toLocaleDateString()}
          name={name}
          autoComplete="off"
          onClick={toggleShow}
          required={!!required}
          onBlur={() => setTimeout(() => setShow(false), 100)}
        />
        <button
          type="button"
          className="absolute right-0 top-0 h-full w-[50px] flex justify-center items-center"
          onClick={toggleShow}
        >
          <CiCalendarDate size={24} />
        </button>
        {show && (
          <div className="py-2 rounded absolute right-0 top-full z-20">
            <Calendar onChange={changeDate} value={value} />
          </div>
        )}
      </div>
    </div>
  );
}
