import React from 'react'
import TickCircle from '../assets/create-account-2-signup-mdi-tick-circle.svg'

const SelectedInput = ({ label = 'Label', placeholder = 'Placeholder', type = 'text', value = '' }) => {
    return (
        <div className="relative flex flex-col self-stretch">
            <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent  border rounded py-4 px-3 outline-none border-twitter-blue text-neutral-50" placeholder={placeholder} type={type} readOnly value={value} />
            <label className="text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black  text-center">{label}</label>
            <img src={TickCircle} alt="tick-circle-icon" className="h-6 w-6 absolute right-3 bottom-4" />
        </div>
    )
}

export default SelectedInput
