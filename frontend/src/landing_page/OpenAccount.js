import React from 'react'
import './home/home.css'
const OpenAccount = () => {
  return (
    <div className='container text-center mt-5 border rounded-2 p-lg-5 p-3 shadow'>
      <h1 className=' text-muted fw-bold'>Open a Finexa account</h1>
      <p className='text-secondary responsive-text'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <button 
      className=' mt-5   custom-btn text-center'
      >
        Sign up for free
      </button>
    </div>
  )
}

export default OpenAccount
