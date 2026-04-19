import React, { createContext, useContext, useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  [key: string]: string;
}

interface FormContextType {
  formData: FormState;
  updateFormData: (newData: Partial<FormState>) => void;
  clearFormData: () => void;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const updateFormData = (newData: Partial<FormState>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const clearFormData = () => {
    setFormData(initialFormState);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormState must be used within a FormProvider");
  }
  return context;
};
