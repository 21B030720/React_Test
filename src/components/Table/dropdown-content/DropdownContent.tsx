import { Student } from "../../../utils/studentsInterface";
import React from 'react';
import { Eye, AlertTriangle } from 'lucide-react'; // Import AlertTriangle for the dangerous icon
import ActionButton from "../action-button/ActionButton";

interface DropdownContentProps {
  students: Student[];
}

const DropdownContent: React.FC<DropdownContentProps> = ({ students }) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle the button click here (e.g., edit or delete action)
  };

  return (
    <div className="absolute p-2 w-full bg-[#F0F3FA] border border-[#F0F3FA] rounded-b-lg">
      <div className="overflow-hidden rounded-lg">
        <table className="w-full table-auto bg-[#F0F3FA]">
          <thead>
            <tr className="bg-white">
              <th className="py-2 px-4 border-t-0 border-b border-[#F0F3FA] text-left font-sf-pro font-medium text-[14px]  text-[#5F6B88]">
                Тип выговора
              </th>
              <th className="py-2 px-4 border-t-0 border-b border-[#F0F3FA] text-left font-sf-pro font-medium text-[14px] text-[#5F6B88]">
                Студент
              </th>
              <th className="py-2 px-4 border-t-0 border-b border-[#F0F3FA] text-left font-sf-pro font-medium text-[14px]  text-[#5F6B88]">
                Дата создания
              </th>
              <th className="py-2 px-4 border-t-0 border-b border-[#F0F3FA] text-left font-sf-pro font-medium text-[14px]  text-[#5F6B88]">
                Статус
              </th>
              <th className="py-2 px-4 border-t-0 border-b border-[#F0F3FA]"></th> {/* Empty column for button */}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr className="bg-white" key={student.id}>
                <td className="py-2 px-4 border-b border-[#F0F3FA] text-left font-sf-pro font-medium text-[15px] leading-[19.5px]">
                  {student.type}
                </td>
                {/* Student */}
                <td className="py-2 px-4 border-b border-[#F0F3FA] text-left flex-1"> {/* Take the remaining space */}
                  <div className="flex items-center space-x-2">
                    <img 
                      src={student.avatar} 
                      alt={`${student.firstName} ${student.lastName}'s Avatar`} 
                      className="w-10 h-10 rounded-full" 
                    />
                    <span className="font-sf-pro font-medium text-[15px] leading-[19.5px] text-left">
                      {student.firstName} {student.lastName}
                    </span>
                  </div>
                </td>
                {/* Date */}
                <td className="py-2 px-4 border-b border-[#F0F3FA] text-[#5F6B88] font-medium text-[15px] text-left flex-1"> {/* Take the remaining space */}
                  {student.creationDate}
                </td>

                {/* Status */}
                <td className="py-2 px-4 border-b border-[#F0F3FA] text-left flex-1"> {/* Take the remaining space */}
                  {student.status === 'ACTIVE' ? (
                    <div className="flex items-center space-x-2 text-[#F58500]">
                      <AlertTriangle className="text-[#F58500]" />
                      <span className="text-[#F58500] font-medium text-[15px] leading-[19.5px] font-[SF Pro Display]">
                        Действует
                      </span>
                    </div>
                  ) : (
                    student.status
                  )}
                </td>
                {/* Button */}
                <td className="py-2 px-4 w-[140px] border-b border-[#F0F3FA] text-right w-auto"> {/* Set width for button */}
                  <div className="flex justify-end">
                    <ActionButton
                      onClick={handleButtonClick}
                      label="Подробнее"
                      icon={<Eye className="mr-2 text-custom-blue" />}
                      buttonClass="px-[16px] py-[8.5px] border-solid border-[1px] border-custom-blue rounded-md hover:bg-blue-100"
                      textClass="text-custom-text"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropdownContent;
