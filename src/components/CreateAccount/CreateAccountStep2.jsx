import React from 'react'
import Button from '../Button'
import SelectedInput from '../SelectedInput'
import { useSignupContext } from '../../context/SignupContext'


const CreateAccountStep2 = () => {
    const { nextStep, formData } = useSignupContext();
    const { name, email, dob } = formData;

    return (
        <div className="flex flex-col items-start gap-5 self-stretch text-neutral-50">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <form className="flex flex-col items-start gap-8 self-stretch text-neutral-50">
                <SelectedInput type='text' label='Name' value={name} />
                <SelectedInput type='email' label='Email' value={email} />
                <SelectedInput type='text' label='Date of birth' value={dob} />
            </form>
            <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                <Button onClick={nextStep} varient='solid' size='l'>
                    Sign up
                </Button>
            </div>
        </div>
    )
}

export default CreateAccountStep2
