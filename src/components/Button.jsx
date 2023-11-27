import React from 'react'

const Button = ({ varient = "default", isDisabled = false, children, size = "m" }) => {
    const base = "font-px-regular rounded-full font-bold text-center"

    const varients = {
        default: "bg-neutral-50 shadow-md text-black hover:bg-neutral-200",
        outline: " leading-normal border border-stroke",
        solid: "font-bold text-neutral-50 justify-center items-center inline-flex bg-twitter-blue hover:bg-twtr-blue-hover disabled:bg-twtr-blue-disabled",
        icon: "h-6 w-6"
    }



    const sizes = {
        solid: {
            s: "py-3 px-6",
            m: "py-[0.9375rem] px-[5.8125rem]",
            l: "p-5 self-stretch"
        },
        default: {
            s: "py-2 px-5",
            m: "px-6 py-2 self-stretch",
            l: "py-3 px-6 self-stretch"
        },
        outline: {
            s: "py-[0.375rem] px-4 text-neutral-50",
            m: "px-6 py-2 self-stretch text-twitter-blue",
            l: "py-3 px-6 self-stretch text-twitter-blue"
        },
        icon: {
            s: "",
            m: "",
            l: ""
        }

    }


    const classes = `${base} ${varients[varient]} ${sizes[varient][size]}`
    return (
        <button className={`${classes}`} disabled={isDisabled}>
            {children}
        </button>
    )
}

export default Button

