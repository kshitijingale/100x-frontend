import React from 'react'
import PasswordEye from '../../assets/create-account-4-signup-eye.svg'
import Button from '../Button'

const CreateAccountStep4 = () => {
    return (
        <div className="flex flex-col items-start gap-10 self-stretch text-neutral-50">
            <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="text-2xl font-bold">You’ll need a password</h2>
                <p className="text-sm text-neutral-500 font-normal leading-normal">
                    Make sure it’s 8 characters or more
                </p>
            </div>
            <form className="flex flex-col items-start gap-3 self-stretch text-neutral-50">
                <div className="relative flex flex-col self-stretch">
                    <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent placeholder:text-neutral-500 border border-neutral-500 rounded py-4 px-3 outline-none focus:border-twitter-blue text-neutral-50" placeholder="Password" type="password" />
                    <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">Password</label>
                    <img className="w-6 h-6 absolute right-3 bottom-4" src={PasswordEye} alt="eye icon" />
                </div>
            </form>
            <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                <Button >
                    Next
                </Button>
            </div>
            {/* <a href="../home-feed/index.html" className="bg-neutral-500 flex justify-center py-2 px-6 rounded-full gap-[10px] self-stretch items-center shadow-md font-bold text-black hover:bg-neutral-200 disabled:bg-neutral-500 absolute bottom-5 right-5 left-5">
                Next
            </a> */}
        </div>

    )
}

export default CreateAccountStep4
