import { ChevronDown } from 'lucide-react';

interface DropdownTriggerProps {
  isOpen: boolean;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ isOpen }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 cursor-pointer bg-[#F0F3FA] rounded-t-lg ${isOpen ? '' : 'rounded-b-lg'}`}
    >
      <div className="flex items-center">
        <button className={`mr-3 p-2 text-white rounded-md ${isOpen ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-[#AFB7CA]'} border-solid border-[1px]`}>
            <ChevronDown
                className={`transform transition-transform duration-200 ${isOpen ? 'text-white' : 'rotate-180 text-[#AFB7CA]'}`}
            />
        </button>



        <div className="flex flex-col text-left">
          <span className="font-medium text-[15px] leading-[19.5px] text-black">
            Дело №1. Распитие алкоголя в университете
          </span>
          <div className="font-medium text-[15px] leading-[19.5px] text-black">
            19.11.2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownTrigger;
