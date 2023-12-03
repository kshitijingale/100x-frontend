import React from 'react'
import goBackBtn from '../assets/create-account-1-signup-x.svg'
import CreateAccountStep1 from '../components/CreateAccount/CreateAccountStep1'
import CreateAccountStep2 from '../components/CreateAccount/CreateAccountStep2'
import CreateAccountStep3 from '../components/CreateAccount/CreateAccountStep3'
import CreateAccountStep4 from '../components/CreateAccount/CreateAccountStep4'
import { useSignupContext } from '../context/SignupContext'

const CreateAccount = () => {
    const { currentStep, prevStep } = useSignupContext();

    const renderStepComponent = () => {
        switch (currentStep) {
            case 0:
            // navigate to landing page
            case 1:
                return <CreateAccountStep1 />;
            case 2:
                return <CreateAccountStep2 />;
            case 3:
                return <CreateAccountStep3 />;
            case 4:
                return <CreateAccountStep4 />;
            case 5:
            // navigate to feeds
            default:
                return null;
        }
    }

    return (
        <div className="flex flex-col gap-3 items-start shrink-0 px-[15px] pb-5 h-screen font-px-regular bg-black">
            {/* Navigation bar */}
            <div className="flex py-3 items-center gap-5 self-stretch text-neutral-50">
                <button onClick={prevStep}>
                    <img src={goBackBtn} alt="go-back-btn" />
                </button>
                <span className="text-[15px] font-bold">Step {currentStep} of 4</span>
            </div>
            {renderStepComponent()}
        </div>


    )
}

export default CreateAccount
