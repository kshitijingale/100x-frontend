import React from 'react'
import loginLogo100 from "../../assets/login-100.svg"
import loginLogoX from "../../assets/login-group-27162.svg"

const LandingHeader = () => {
    return (
        <header className="flex justify-center py-3 px-4 items-center h-fit">
            <img
                className="w-[40.962px] h-[18.026px]"
                src={loginLogo100}
                alt="100"
            />
            <img
                className="w-[12.27px] h-[13.091px]"
                src={loginLogoX}
                alt="x"
            />
        </header>
    )
}

export default LandingHeader
