import React from 'react'
import goBackBtn from '../assets/create-account-1-signup-x.svg'
import CreateAccountStep1 from '../components/CreateAccount/CreateAccountStep1'
import CreateAccountStep2 from '../components/CreateAccount/CreateAccountStep2'
import CreateAccountStep3 from '../components/CreateAccount/CreateAccountStep3'
import CreateAccountStep4 from '../components/CreateAccount/CreateAccountStep4'

const CreateAccount = () => {
    return (
        <div className="flex flex-col gap-3 items-start shrink-0 px-[15px] pb-5 h-screen font-px-regular bg-black">
            {/* Navigation bar */}
            <div className="flex py-3 items-center gap-5 self-stretch text-neutral-50">
                <a href="./index.html">
                    <img src={goBackBtn} alt="go-back-btn" />
                </a>
                <span className="text-[15px] font-bold">Step 1 of 4</span>
            </div>
            {/* <CreateAccountStep1 /> */}
            <CreateAccountStep2 />
            {/* <CreateAccountStep3 /> */}
            {/* <CreateAccountStep4 /> */}

        </div>

    )
}

export default CreateAccount
