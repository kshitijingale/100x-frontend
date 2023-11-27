import React from 'react'
import dropDownBtn from '../../assets/create-account-1-signup-chevron-down.svg'
import Button from '../Button'
import Input from '../Input'

const CreateAccountStep1 = () => {
    return (
        <div className="flex flex-col items-start gap-5 self-stretch text-neutral-50">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <form className="flex flex-col items-start gap-8 self-stretch text-neutral-50">
                <Input label='Name' type='text' placeholder='Name' />
                <Input label='Email' type='email' placeholder='Email' />
                <div className="flex flex-col self-stretch gap-2 items-start">
                    <h3 className="teßxt-[15px] font-bold leading-normal">Date of birth</h3>
                    <p className="text-sm font-normal text-secondary leading-normal">
                        This will not be shown publicly. Confirm your own age, even if
                        this account is for a business, a pet, or something else.
                    </p>
                </div>
                <div className="grid grid-cols-4 self-stretch gap-3">
                    <div className="relative flex flex-col self-stretch col-span-2">
                        <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50" type="email" />
                        <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">Month</label>
                        <img className="w-6 h-6 absolute right-3 bottom-4" src={dropDownBtn} alt="dropdown-icon" />
                    </div>
                    <div className="relative flex flex-col self-stretch">
                        <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50" type="email" />
                        <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">Day</label>
                        <img className="w-6 h-6 absolute right-3 bottom-4" src={dropDownBtn} alt="dropdown-icon" />
                    </div>
                    <div className="relative flex flex-col self-stretch">
                        <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50" type="email" />
                        <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">Year</label>
                        <img className="w-6 h-6 absolute right-3 bottom-4" src={dropDownBtn} alt="dropdown-icon" />
                    </div>
                </div>
            </form>
            <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                <Button >
                    Create account
                </Button>
            </div>
        </div>
    )
}

export default CreateAccountStep1
