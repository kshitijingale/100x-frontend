import React from 'react'
import Button from "../components/Button.jsx"
import LandingHeader from '../components/LandingPage/LandingHeader'

const LandingPage = () => {
    return (
        <div id="container" className="grid h-screen bg-black font-px-regular">
            <LandingHeader />
            <div
                id="login-container"
                className="text-neutral-50 flex flex-col px-[28px] items-start gap-[40px] justify-self-center"
            >
                <div className="flex flex-col items-start gap-3 self-stretch">
                    <h1 className="text-[31px] font-extrabold leading-normal">
                        Happening now
                    </h1>
                    <h3 className="text-[16px] font-medium leading-normal">Join today.</h3>
                </div>
                <Button varient="default" >Create account</Button>
                <div className="flex justify-center items-center gap-[4px]">
                    <div id="left-line" className="bg-[#404040] w-[155.5px] h-[1px] max-[388px]:w-[135px] max-[350px]:w-[120px]" />
                    <span className="font-normal leading-normal text-center">or</span>
                    <div id="right-line" className="bg-[#404040] w-[155.5px] h-[1px] max-[388px]:w-[135px] max-[350px]:w-[120px]" />
                </div>

                <div className="flex flex-col items-start gap-[20px] self-stretch">
                    <p className="text-[15px] font-medium leading-normal ">
                        Already have an account?
                    </p>
                    <Button varient="outline">
                        Sign in
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default LandingPage
