import React from 'react';

interface FormButtonProps {
  backgroundColor: string;
  textColor: string;
  icon: React.ReactNode;
  label: string;
  isDisabled?: boolean; // Optional prop for disabled state
  onClick: () => void; // Click handler for the button
}

const FormButton: React.FC<FormButtonProps> = ({
  backgroundColor,
  textColor,
  icon,
  label,
  isDisabled = false, // Default to false if not provided
  onClick,
}) => {
  return (
    <button
      type="submit" // Ensures the button works as a submit button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor, // Retain the same background color
        color: textColor, // Retain the same text color
        opacity: isDisabled ? 0.3 : 1, // Apply opacity when disabled
      }}
      className={`flex items-center justify-center rounded-[8px] py-[15px] px-[16px] text-[15px] font-semibold leading-[18px] text-left w-full ${
        isDisabled ? 'cursor-not-allowed' : ''
      }`}
      disabled={isDisabled} // Disables the button element when isDisabled is true
    >
      <span className="mr-2">
        {icon}
      </span>
      {label}
    </button>
  );
};

export default FormButton;
