import { X } from 'lucide-react';

interface StatusInfoProps {
  status: 'declined' | 'pending';
  studentsCount: number;
}

const StatusInfo: React.FC<StatusInfoProps> = ({ status, studentsCount }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flex items-center">
        {status === 'declined' ? (
          <>
            <X className="mr-2 text-red-500" />
            <span className="text-red-500 font-medium text-[15px]  lg:mr-[3rem]">Отклонено</span>
          </>
        ) : (
          <>
            <img src="/icons/hourglass.png" alt="Hourglass" className="mr-2 w-5 h-5" />
            <span className="text-gray-500 font-medium text-[15px]">На рассмотрении</span>
          </>
        )}
      </div>
      <span className="text-[15px] font-medium text-[#5F6B88] text-left">
        Выговоров в деле: <span className="text-black">{studentsCount}</span>
      </span>
    </div>
  );
};

export default StatusInfo;
