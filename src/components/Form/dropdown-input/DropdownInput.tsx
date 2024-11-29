import React from 'react';

interface DropdownInputProps {
  title: string;
  options: string[];
  placeholder: string;
  value: string; // Current selected value
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Handler for change
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  title,
  options,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full mx-auto">
      {/* Title aligned to the left */}
      <div className="text-[#5F6B88] text-[14px] font-medium leading-[15.4px] font-sf-pro-display mb-[8px] text-left">
        {title}
      </div>

      {/* Dropdown input */}
      <div className="relative">
        <select
          value={value} // Set the selected value from props
          onChange={onChange} // Update the value when the selection changes
          className="w-full bg-[#F0F3FA] text-[#AFB7CA] text-[15px] font-normal leading-[19.5px] font-sf-pro-text placeholder-[#AFB7CA] py-[21.5px] px-[16px] border-none rounded-md appearance-none"
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Arrow icon */}
        <div className="absolute right-[16px] top-[50%] transform -translate-y-[50%] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            className="text-[#AFB7CA]"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropdownInput;
