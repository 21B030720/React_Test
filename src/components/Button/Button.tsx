import React from 'react';


interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[110px] h-[40px] flex items-center justify-center bg-black text-white py-2 px-4 rounded-[8px] hover:bg-gray-800"
    >
      {icon && (
        <img
          src={icon}
          alt="Icon"
          className="w-6 h-6 mr-2"
        />
      )}
      <span className=" text-[11px] font-semibold font-sf-pro-display leading-none">
        {text}
      </span>
    </button>
  );
};

export default Button;
