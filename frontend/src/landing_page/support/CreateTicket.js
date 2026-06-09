import React from 'react'
import { dropdownData } from './dropdowndata.js'
import Dropdown from './Dropdown.js'
import './dropdown.css'; 

const CreateTicket = () => {
  return (
    <div className='container border rounded-4 shadow p-lg-5 p-3 d-flex flex-column mt-5 gap-3'>
     {dropdownData.map((data, index)=>{
        return <Dropdown data={data} />
     })}
    </div>
  )
}

export default CreateTicket
