import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { useSignupContext } from '../../context/SignupContext'
import Input from '../Input'


const CreateAccountStep3 = () => {
    const [code, setCode] = useState('')
    const { nextStep, formData } = useSignupContext()
    const { email } = formData;

    const getOTP = async () => {
        try {
            const response = await fetch('https://email-verification-cba2.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: email
                }),
            })
            const data = await response.json();
            localStorage.setItem('otp', data.otp)
            // console.log(data);
        } catch (error) {
            // Handle errors during the fetch
            console.error('Fetch error:', error);
        }
    }

    const handleSubmit = () => {
        const isValidCode = code === localStorage.getItem('otp');
        // console.log(isValidCode);
        if (!isValidCode) {
            // The OTP is incorrect, display an alert
            alert('Incorrect OTP. Please try again.');
            return
        }
        nextStep();
    }

    const handleChange = (e) => {
        setCode(e.target.value)
    }

    useEffect(() => {
        getOTP()
    }, [])

    return (
        <div className="flex flex-col items-start gap-10 self-stretch text-neutral-50">
            <div className="flex flex-col items-start gap-2 self-stretch">
                <h2 className="text-2xl font-bold">We sent you a code</h2>
                <p className="text-sm text-neutral-500 font-normal leading-normal">
                    Enter it below to verify test@email.com
                </p>
            </div>
            <form className="flex flex-col items-start gap-3 self-stretch text-neutral-50">
                <Input name='otp' label='Verification Code' type='text' placeholder='Verification Code' value={code} onChange={(e) => handleChange(e)} />
                <div className="flex flex-col self-stretch items-end">
                    <span className="text-sm font-normal leading-normal text-twitter-blue">Didn’t receive a code?</span>
                </div>
            </form>
            <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                <Button onClick={handleSubmit}>
                    Next
                </Button>
            </div>
        </div>

    )
}

export default CreateAccountStep3
