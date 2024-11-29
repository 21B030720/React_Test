import React from 'react';

interface InputWithTitleProps {
  title: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithTitle: React.FC<InputWithTitleProps> = ({ title, placeholder = '', value, onChange }) => {
  return (
    <div className="w-full mx-auto">
      {/* Title above the input, using Tailwind classes */}
      <div className="text-left mb-2 text-[#5F6B88] text-[14px] font-medium leading-[15.4px] font-sf-pro-display">
        {title}
      </div>

      {/* Input field with Tailwind classes */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full  px-4 py-3 bg-[#F0F3FA] rounded-lg text-[14px] font-medium text-[#AFB7CA] placeholder:text-[#AFB7CA] placeholder:text-[15px] placeholder:font-normal placeholder:leading-[19.5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputWithTitle;
