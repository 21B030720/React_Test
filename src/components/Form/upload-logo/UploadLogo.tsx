import React from 'react';

interface UploadLogoProps {
  onUpload: (file: File) => void; // Callback for when a file is selected
}

const UploadLogo: React.FC<UploadLogoProps> = ({ onUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[300px] mx-auto pt-[0px]">
      {/* Text above the button aligned to the left */}
      <div className="text-left mb-2 text-[#5F6B88] text-[14px] font-medium leading-[15.4px] font-sf-pro-display w-full">Логотип клуба</div>

      {/* Dashed Button */}
      <label htmlFor="upload-logo" className="w-full">
        <input
          type="file"
          id="upload-logo"
          accept=".jpg, .png, .svg"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex items-center justify-center w-[208px] h-[114px] border-2 border-dashed border-blue-500 text-blue-500 rounded-lg cursor-pointer hover:bg-blue-50">
          {/* Icon on the Left */}
          <img
            src="/icons/Frame (1).png"
            alt="Upload Icon"
            className="w-6 h-6 mr-2" /* Adjust spacing with `mr-2` */
          />
          {/* Text on the Right */}
          <span className="text-sm font-medium">Загрузить логотип</span>
        </div>
      </label>

      {/* Text below the button aligned to the left (with specific font properties) */}
      <div className="text-xs mt-[2px] text-left w-full font-sf-pro font-medium text-[12px] leading-[14.4px] text-custom-light-gray">
        JPG, PNG, SVG<br />
        Не более 600x600px, 5MB
      </div>
    </div>
  );
};

export default UploadLogo;
