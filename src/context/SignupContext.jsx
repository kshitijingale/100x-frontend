import React, { useState, createContext, useContext } from 'react'

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        password: ''
    })

    const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
    const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

    const updateFormData = (data) => setFormData((prevData) => ({ ...prevData, ...data }));

    return (
        <SignupContext.Provider value={{ currentStep, nextStep, prevStep, formData, updateFormData }}>
            {children}
        </SignupContext.Provider>
    )
}

export const useSignupContext = () => {
    const { currentStep } = useContext(SignupContext)
    return useContext(SignupContext);
};
