import React from 'react'
import PasswordEye from '../assets/create-account-4-signup-eye.svg'

const Input = ({ label = 'Label', placeholder = 'Placeholder', type = 'text', ...rest }) => {
    return (
        <div className="relative flex flex-col self-stretch">
            <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50" placeholder={placeholder} type={type} {...rest} />
            <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">{label}</label>
            {
                type && (type === 'password') ? (
                    <>
                        <img src={PasswordEye} alt="tick-circle-icon" className="h-6 w-6 absolute right-3 bottom-4" />
                    </>
                ) : (<></>)
            }
        </div>
    )
}

export default Input
