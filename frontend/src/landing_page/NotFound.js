import React from 'react'
import { Link } from 'react-router-dom'
import './home/home.css'


const NotFound = () => {
  return (
    <div className='container text-center mt-5 border rounded-2 p-lg-5 p-3 shadow w-25'>
      <p className='text-secondary'> 404 page not found.</p>
      <button 
      className='px-4 mt-5 d-flex btn rounded-pill custom-btn fs-5 text-center'
      >
        <Link to='/'
         className='ftr-text '
         style={{color:"aliceblue"}}
        >Go to Home</Link> 
      </button>

    </div>
  )
}

export default NotFound
