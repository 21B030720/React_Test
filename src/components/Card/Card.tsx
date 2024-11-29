import React from 'react';

interface CardProps {
  avatar: string; // URL to the avatar image
  title: string;  // Title (e.g., "Байрамов Б.О.")
  subtitle: string; // Subtitle (e.g., "08.07.2024 10:00-11:00")
}

const Card: React.FC<CardProps> = ({ avatar, title, subtitle }) => {
  return (
    <div className="w-[230px] h-[150px] bg-white shadow-lg rounded-xl p-4">
      {/* Top Text */}
      <div className="text-center text-sm font-semibold mb-4">
        Последний преподаватель
      </div>
      
      {/* Content Section (Avatar, Title + Subtitle) */}
      <div className="flex items-center">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full mr-4" // Avatar image with rounded corners
        />
        
        {/* Title and Subtitle in One Container, Left Aligned */}
        <div className="flex flex-col justify-start space-y-1 text-left">
          <span className="font-semibold text-sm">{title}</span>
          <span className="text-xs text-gray-600">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
