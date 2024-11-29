import { useState, useMemo } from 'react';

export const useClubForm = () => {
  const [formValues, setFormValues] = useState({
    inputValue: '',
    checked: false,
    selectedOption: '',
    uploadLogo: null as File | null,
    text: '',
    category: '',
    isVisible: false,
  });

  const handleFormChange = (field: string, value: any) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGoBack = () => {
    console.log('Going back...');
  };

  const handleSubmit = () => {
    console.log('Form submitted with data:', formValues);
  };

  // Validation logic for enabling the button
  const isFormValid = useMemo(() => {
    return (
      formValues.inputValue.trim() !== '' &&
      formValues.selectedOption.trim() !== '' &&
      formValues.uploadLogo !== null &&
      formValues.text.trim() !== '' &&
      formValues.category.trim() !== ''
    );
  }, [formValues]);

  return {
    formValues,
    handleFormChange,
    handleGoBack,
    handleSubmit,
    isFormValid,
  };
};
