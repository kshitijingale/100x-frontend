import React, { useState } from 'react'
import goBackBtn from '../assets/create-account-1-signup-x.svg'
import Input from '../components/Input'
import Button from '../components/Button'

const SignIn = () => {
    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!isValidPassword(password)) {
            alert('Please enter a valid password. It should be at least 8 characters long.');
            return;
        }
        console.log(userData);
        // If validation passes, you can perform further actions, like submitting the form to a server.
        alert('Form submitted successfully!');

    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return password.length >= 8;
    };

    return (
        <div className="flex flex-col gap-3 items-start shrink-0 px-[15px] pb-5 h-screen font-px-regular bg-black">
            {/* Navigation bar */}
            <div className="flex py-3 items-center gap-5 self-stretch text-neutral-50">
                <button >
                    <img src={goBackBtn} alt="go-back-btn" />
                </button>
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch text-neutral-50">
                <h2 className="text-2xl font-bold">Sign in to 100x</h2>
                <form className="flex flex-col items-start gap-8 self-stretch text-neutral-50" onSubmit={handleSubmit}>
                    <Input name='email' label='Email' type='email' placeholder='Email' value={email} onChange={handleChange} />
                    <Input name='password' label='Password' type='password' placeholder='Password' value={password} onChange={handleChange} />
                    <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                        <Button varient='solid' type="submit" >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
