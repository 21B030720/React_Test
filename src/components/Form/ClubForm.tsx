import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import UploadLogo from './upload-logo/UploadLogo';
import InputWithTitle from './input-with-title/InputWithTitle';
import CheckmarkWithText from './checkmark-with-title/CheckMarkWithTitle';
import DropdownInput from './dropdown-input/DropdownInput';
import TextAreaInput from './textarea-input/TextAreaInput';
import ToggleSwitch from './toggle-switch/ToggleSwitch';
import FormButton from './form-button/FormButton';
import { useClubForm } from './hooks/useClubForm';

const ClubForm: React.FC = () => {
  const { formValues, handleFormChange, handleGoBack, handleSubmit, isFormValid } = useClubForm();

  const options = ['Admin 1', 'Admin 2', 'Admin 3'];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Создание клуба</h1>
      <div className="flex gap-6">
        <div className="w-1/3 flex flex-col justify-start items-center mr-6">
          <UploadLogo onUpload={(file) => handleFormChange('uploadLogo', file)} />
        </div>
        <div className="w-2/3 flex flex-col gap-6">
          <InputWithTitle
            title="Название клуба"
            placeholder="Введите название клуба"
            value={formValues.inputValue}
            onChange={(e) => handleFormChange('inputValue', e.target.value)}
          />
          <CheckmarkWithText
            text="Главный клуб"
            checked={formValues.checked}
            onChange={() => handleFormChange('checked', !formValues.checked)}
          />
          <DropdownInput
            title="Администратор клуба"
            options={options}
            placeholder="Выберите главного администратора"
            value={formValues.selectedOption}
            onChange={(e) => handleFormChange('selectedOption', e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mt-6">
        <TextAreaInput
          title="Краткое описание"
          placeholder="Текст описания"
          value={formValues.text}
          maxLength={300}
          onChange={(e) => handleFormChange('text', e.target.value)}
        />
      </div>
      <div className="flex gap-3 mt-6">
        <div className="w-1/2">
          <InputWithTitle
            title="Категория"
            value={formValues.category}
            onChange={(e) => handleFormChange('category', e.target.value)}
          />
        </div>
        <div className="w-1/2 flex items-center">
          <ToggleSwitch
            title="Видимость"
            onLabel="Видимый"
            offLabel="Заблокирован"
            value={formValues.isVisible}
            onChange={(newValue) => handleFormChange('isVisible', newValue)}
          />
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <FormButton
          backgroundColor="#5F6B88"
          textColor="white"
          icon={<ArrowLeft />}
          onClick={handleGoBack}
          label="Вернуться"
        />
        <FormButton
          backgroundColor="#3BBC30"
          textColor="white"
          icon={<Check />}
          onClick={handleSubmit}
          label="Создать клуб"
          isDisabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default ClubForm;
