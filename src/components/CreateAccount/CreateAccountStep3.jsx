import React from 'react'
import Button from '../Button'

const CreateAccountStep3 = () => {
    return (
        <div className="flex flex-col items-start gap-10 self-stretch text-neutral-50">
            <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="text-2xl font-bold">We sent you a code</h2>
                <p className="text-sm text-neutral-500 font-normal leading-normal">
                    Enter it below to verify test@email.com
                </p>
            </div>
            <form className="flex flex-col items-start gap-3 self-stretch text-neutral-50">
                <div className="relative flex flex-col self-stretch">
                    <input className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent placeholder:text-neutral-500 border border-neutral-500 rounded py-4 px-3 outline-none focus:border-twitter-blue text-neutral-50" placeholder="Verification code" type="text" />
                    <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">Verification Code</label>
                </div>
                <div className="flex flex-col self-stretch items-end">
                    <span className="text-sm font-normal leading-normal text-twitter-blue">Didn’t receive a code?</span>
                </div>
            </form>
            <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                <Button >
                    Next
                </Button>
            </div>
        </div>

    )
}

export default CreateAccountStep3
