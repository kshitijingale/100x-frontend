import React from 'react'

const Input = ({ label = 'Label', placeholder = 'Placeholder', type = 'text' }) => {
    return (
        <div className="relative flex flex-col self-stretch">
            <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50" placeholder={placeholder} type={type} />
            <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black w-[51.018px] text-center">{label}</label>
        </div>
    )
}

export default Input
