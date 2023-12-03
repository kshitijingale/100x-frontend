import React from 'react'
import Button from '../Button'
import { useSignupContext } from '../../context/SignupContext'
import Input from '../Input'


const CreateAccountStep4 = () => {
    const { nextStep, formData, updateFormData } = useSignupContext()
    const { password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    }

    const handleSubmit = () => {
        // check for minimum 8 character length
        if (password.length < 8) {
            alert('Password should be at least 8 characters long')
            return

        }
        if (password === '') {
            alert('Please enter the password')
            return
        }
        console.log(formData);
    }

    return (
        <div className="flex flex-col items-start gap-10 self-stretch text-neutral-50">
            <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="text-2xl font-bold">You’ll need a password</h2>
                <p className="text-sm text-neutral-500 font-normal leading-normal">
                    Make sure it’s 8 characters or more
                </p>
            </div>
            <form className="flex flex-col items-start gap-3 self-stretch text-neutral-50">
                <Input name='password' label='Password' type='password' placeholder='Password' value={password} onChange={(e) => handleChange(e)} />
            </form>
            <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                <Button onClick={handleSubmit}>
                    Next
                </Button>
            </div>
        </div>

    )
}

export default CreateAccountStep4
