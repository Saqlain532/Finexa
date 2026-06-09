import React from 'react'
import './dropdown.css'
const Hero = () => {
  return (
    <div className='container mt-5 shadow border rounded-4 p-lg-5 p-4 '
    style={{backgroundColor:"#f7f7f7"}}
    >
      <div className='d-flex justify-end align-items-center w-full '>
        <h3 className='text-muted fw-bold'>Support Portal</h3>
        <button 
          className='mt-5 custom-btn fs-5 text-center '
         >
        My tickets
      </button>
      </div>
      <div className='row position-relative mt-3'>
        <i
          className="fa-solid fa-magnifying-glass position-absolute"
          style={{
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "gray",
          }}
         ></i>
        <input placeholder= ' Eg: How do I open my account, How do i activate F&O..'  type='text'
               className='border rounded-2 p-2 text-muted form-control ps-5'
               style={{maxWidth:"50rem"}}
        />
      </div>
    </div>
  )
}

export default Hero
