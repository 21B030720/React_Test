
interface ActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  label: string;
  icon: React.ReactNode;
  buttonClass: string;
  textClass: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, icon, buttonClass, textClass }) => {
  return (
    <button className={`flex items-center ${buttonClass}`} onClick={onClick}>
      {icon}
      <span className={`${textClass} font-medium text-[15px] leading-[19.5px]`}>{label}</span>
    </button>
  );
};

export default ActionButton;
