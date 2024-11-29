import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons from react-icons

interface ToggleSwitchProps {
  value: boolean; // Current state of the toggle (on or off)
  title: string;
  onLabel: string; // Label for the 'on' state button
  offLabel: string; // Label for the 'off' state button
  onChange: (newValue: boolean) => void; // Function to handle the change of toggle state
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  value,
  onLabel,
  offLabel,
  onChange,
  title
}) => {
  // Handle the toggle change
  const handleToggle = () => {
    const newValue = !value; // Toggle the current value
    onChange(newValue); // Notify the parent component with the new value
  };

  return (
    <div className="flex flex-col w-full">
    {/* Title */}
    <label className="font-sf-pro-display text-[#5F6B88] text-[14px] font-medium leading-[15.4px] text-left mb-2">
      {title}
    </label>

    <div
      className="flex items-center w-full bg-[#F0F3FA] h-full rounded-[8px] cursor-pointer p-1"
      style={{ border: '1px solid #0068FF33' }}
      onClick={handleToggle}
    >

      {/* On Button */}
      <button
        className={`flex items-center rounded-[8px] justify-center w-full h-full text-sm font-medium mr-1  ${
          value ? 'bg-[#0068FF] text-white' : 'bg-[#F0F3FA] text-[#0068FF]'
        } py-2 px-[10px]`} // Rounded corners on all sides for the button
      >
        <span className={`mr-2 ${value ? 'text-white' : 'text-[#0068FF]'}`}>
          <FaEye /> {/* Eye icon for the 'on' state */}
        </span>
        {onLabel}
      </button>
      {/* Off Button */}
      <button
        className={`flex items-center justify-center rounded-[8px] w-full h-full text-sm font-medium ${
          !value ? 'bg-[#0068FF] text-white' : 'bg-[#F0F3FA] text-[#0068FF]'
        } py-2 px-[10px]`}
      >
        <span className={`mr-2 ${!value ? 'text-white' : 'text-[#0068FF]'}`}>
          <FaEyeSlash /> {/* Eye icon for the 'off' state */}
        </span>
        {offLabel}
      </button>
    </div>
    </div>
  );
};

export default ToggleSwitch;
