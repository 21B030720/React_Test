import React from 'react';

interface TextAreaInputProps {
  title: string;
  placeholder: string;
  value: string;
  maxLength: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ title, placeholder, value, maxLength, onChange }) => {
  return (
    <div className="flex flex-col w-full max-w-[596px]">
      {/* Title */}
      <label className="font-sf-pro-display text-[#5F6B88] text-[14px] font-medium leading-[15.4px] text-left mb-2">
        {title}
      </label>

      {/* Textarea */}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full h-[119px] bg-[#F0F3FA] text-[#000] text-sm font-normal placeholder-[#AFB7CA] leading-[19.5px] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      {/* Character Counter */}
      <div className="text-left text-[#AFB7CA] text-[12px] font-normal leading-[14.4px] mt-[2px]">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextAreaInput;
