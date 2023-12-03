import React, { useState } from 'react'
import dropDownBtn from '../../assets/create-account-1-signup-chevron-down.svg'
import Button from '../Button'
import Input from '../Input'
import { useSignupContext } from '../../context/SignupContext'
import DropdownSelect from '../DropdownSelect'

const CreateAccountStep1 = () => {
    const [dateOfBirth, setDateOfBirth] = useState({
        day: '',
        month: '',
        year: ''
    })
    const { day, month, year } = dateOfBirth;
    const { formData, nextStep, updateFormData } = useSignupContext();
    const { name, email } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    }

    // Function to generate options for months with text values
    const generateMonthOptions = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        return months.map((month) => (
            <option key={month} value={month}>
                {month}
            </option>
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty values
        if (!name || !email || !day || !month || !year) {
            alert('Please fill in all fields.');
            return;
        }

        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        if (!isValid) {
            alert('Please enter a valid email');
            return;
        }

        // update DOB in FormData
        updateFormData({ ['dob']: `${day} ${month} ${year}` })

        // If validation passes, proceed to the next step
        nextStep();
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setDateOfBirth({ ...dateOfBirth, [e.target.name]: value });
    };

    return (
        <div className="flex flex-col items-start gap-5 self-stretch text-neutral-50">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <form className="flex flex-col items-start gap-8 self-stretch text-neutral-50">
                <Input name='name' label='Name' type='text' placeholder='Name' value={name} onChange={(e) => handleChange(e)} />
                <Input name='email' label='Email' type='email' placeholder='Email' value={email} onChange={(e) => handleChange(e)} />
                <div className="flex flex-col self-stretch gap-2 items-start">
                    <h3 className="teßxt-[15px] font-bold leading-normal">Date of birth</h3>
                    <p className="text-sm font-normal text-secondary leading-normal">
                        This will not be shown publicly. Confirm your own age, even if
                        this account is for a business, a pet, or something else.
                    </p>
                </div>
                <div className="grid grid-cols-4 self-stretch gap-3">
                    <div className="relative flex flex-col self-stretch col-span-2">
                        <select name='month' value={month} onChange={handleSelectChange} className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50 appearance-none">
                            <option value=''></option>
                            {generateMonthOptions()}
                        </select>
                        <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">Month</label>
                        <img className="w-6 h-6 absolute right-3 bottom-4" src={dropDownBtn} alt="dropdown-icon" />
                    </div>
                    <DropdownSelect value={day} name='day' handleChange={handleSelectChange} label='Day' start={1} end={31} />
                    <DropdownSelect value={year} name='year' handleChange={handleSelectChange} label='Year' start={1903} end={new Date().getFullYear()} />
                </div>
                <div className='absolute bottom-5 right-5 left-5 flex flex-col self-stretch'>
                    <Button onClick={handleSubmit}>
                        Create account
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountStep1
