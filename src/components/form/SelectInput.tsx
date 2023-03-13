import React, { useEffect } from "react";
import { HiSelector } from "react-icons/hi";

interface InputProps {
  value: string;
  data?: Array<any>;
  onChange: (value: string) => void;
  placeholder: string;
  searchable?: boolean;
  label?: string;
  required?: boolean;
  topChild?: React.ReactNode;
  NoItemsPlaceholder?: React.ReactNode;
}

export default function SelectInput({
  value = "",
  data = [],
  onChange,
  placeholder = "",
  searchable = true,
  label,
  required,
  topChild,
  NoItemsPlaceholder,
}: InputProps) {
  const [show, setShow] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState<Array<any>>([]);

  const selectElement = (val: any) => {
    onChange(val.value ?? val);
    setShow(false);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const search = (e: any) => {
    let text = e.target.value;
    if (text.length > 0) {
      setFilteredData(
        data.filter((item) =>
          item.label
            ? item.label.toLowerCase().includes(text.toLowerCase())
            : item.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else setFilteredData(data);
  };

  return (
    <div>
      {label && (
        <div className="mb-1 ml-1 font-bold">
          <label>
            {label} {required && <span className="text-red-400">*</span>}
          </label>
        </div>
      )}
      <div className="border-2 border-black rounded relative">
        <div>
          {searchable && show ? (
            <input
              placeholder="Type to search..."
              type="text"
              className="w-full px-6 py-3 rounded border-0 focus:ring-0 focus:border-transparent"
              onChange={search}
              autoFocus
              onBlur={() => setShow(false)}
            />
          ) : (
            <button
              type="button"
              className="inline-flex w-full justify-between items-center gap-x-2 rounded bg-white px-6 py-3"
              id="menu-button"
              onClick={() => setShow(!show)}
            >
              {value.length > 0 ? (
                <span>
                  {filteredData[0]?.value
                    ? filteredData.filter((item) => item.value == value)[0]
                        .label
                    : filteredData.filter((item) => item == value)[0]}
                </span>
              ) : (
                <span className="text-gray-400">{placeholder}</span>
              )}
              <HiSelector size={20} />
            </button>
          )}
        </div>
        <div
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded overflow-hidden bg-white border-2 border-gray-400 focus:outline-none"
          style={{ visibility: show ? "visible" : "hidden" }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="space-y-1 max-h-[184px] overflow-y-auto" role="none">
            {topChild}
            {filteredData.map((item, index) => (
              <button
                type="button"
                className="text-black text-left block w-full px-6 py-3 text-sm hover:bg-slate-200"
                role="menuitem"
                key={index}
                id={`menu-item-${index}`}
                onClick={() => selectElement(item)}
              >
                {item.label ?? item}
              </button>
            ))}
            {filteredData.length == 0 && NoItemsPlaceholder}
          </div>
        </div>
      </div>
    </div>
  );
}
