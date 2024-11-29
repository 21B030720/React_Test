import React from 'react';

interface CheckmarkWithTextProps {
  text: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckmarkWithText: React.FC<CheckmarkWithTextProps> = ({ text, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Checkmark input */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-blue-500"
      />

      {/* Text next to the checkmark */}
      <span className="text-[#5F6B88] text-[14px] font-medium leading-[15.4px] font-sf-pro-display">
        {text}
      </span>
    </div>
  );
};

export default CheckmarkWithText;
