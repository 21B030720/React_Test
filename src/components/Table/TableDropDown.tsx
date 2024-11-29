import React, { useState, useEffect, useRef } from 'react';
import { Student } from '../../utils/studentsInterface';
import DropdownTrigger from './dropdown-trigger/DropdownTrigger';
import StatusInfo from './status-info/StatusInfo';
import ActionButton from './action-button/ActionButton';
import DropdownContent from './dropdown-content/DropdownContent';
import { Edit, Trash2 } from 'lucide-react';

interface TableDropdownProps {
  students: Student[];
  status: 'declined' | 'pending';
}

const TableDropdown: React.FC<TableDropdownProps> = ({ students, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const [status] = useState<'declined' | 'pending'>('declined'); // Example status

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full bg-[#F0F3FA] rounded-lg">
        {/* DropdownTrigger and StatusInfo are inline */}
        <div 
            className={`flex items-center w-full justify-between p-4 cursor-pointer bg-[#F0F3FA] rounded-t-lg ${!isOpen ? 'rounded-b-lg' : ''}`} 
            onClick={toggleDropdown}
        >
            <DropdownTrigger isOpen={isOpen} />
            <div className="flex-1 flex justify-center">
                <StatusInfo status={status} studentsCount={students.length} />
            </div>
            <div className="flex items-center space-x-4">
                <ActionButton
                onClick={handleButtonClick}
                label="Редактировать"
                icon={<Edit className="mr-2 text-custom-blue" />}
                buttonClass="mr-4 px-[16px] py-[8.5px] border-solid border-[1px] border-custom-blue rounded-md hover:bg-blue-100"
                textClass="text-custom-text"
                />
                <ActionButton
                onClick={handleButtonClick}
                label="Удалить"
                icon={<Trash2 className="mr-2 text-red-500" />}
                buttonClass="px-[16px] py-[8.5px] border-solid border-[1px] border-red-500 rounded-md hover:bg-red-100"
                textClass="text-red-500"
                />
            </div>
        </div>


        {/* Dropdown Content */}
        {isOpen && <DropdownContent students={students} />}
    </div>
  );
};

export default TableDropdown;
