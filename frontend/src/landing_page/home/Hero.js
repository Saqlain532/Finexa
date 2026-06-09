import React from 'react'
import './home.css'
const Hero = () => {
  return (
    <div className='container p-3 p-md-5 border mt-3 rounded d-flex align-items-center shadow '
     style={{backgroundColor:"#f7f7f5"}}
    >
      <div className='row text-center mb-5'>
         <img src='media/images/homeHero.png' alt='Hero img'  className='mb-5 img-fluid'/>
      <div className=' border border-amber-50 bg-white  rounded-4 py-4 px-3 d-flex flex-column align-items-center' 
           
      >  
         <h1 className=' text-muted fw-bold '>Invest in everything</h1>
         <p className='text-secondary responsive-text '>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
         <button 
        className=' mt-5  custom-btn '
         >
          Sign up for free
          </button>
      </div>     
      </div>  
    </div>
  )
}

export default Hero
