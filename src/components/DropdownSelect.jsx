import React from 'react'
import dropDownBtn from '../assets/create-account-1-signup-chevron-down.svg'


const DropdownSelect = ({ name, label, start, end, value, handleChange, ...rest }) => {

  // Generate options for days and years
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="relative flex flex-col self-stretch">
      <select name={name} value={value} onChange={handleChange} className="flex items-center self-stretch gap-[10px] text-xl peer bg-transparent text-neutral-500 border rounded py-4 px-3 outline-none focus:border-twitter-blue focus:text-neutral-50 appearance-none" >
        <option value=''></option>
        {generateOptions(start, end)}
      </select>
      <label className="text-neutral-500 peer-focus:text-twitter-blue text-xs absolute top-[-7px] left-3 px-1 bg-black text-center">{label}</label>
      <img className="w-6 h-6 absolute right-3 bottom-4" src={dropDownBtn} alt="dropdown-icon" />
    </div>
  )
}

export default DropdownSelect
