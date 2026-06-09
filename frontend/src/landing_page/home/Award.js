import React from 'react'

const Award = () => {
  return (
    <div className='container mt-5 mb-5 p-4 p-lg-5 d-flex border shadow rounded'>
      <div className='row align-items-center '>
        <div className='col-12 col-lg-6 text-center mb-4 mb-lg-0'>
          <img src='media/images/largestBroker.svg' alt='award image'
               className='img-fluid'
          />
        </div>
        <div className='col-12 col-lg-6'>
          <h1 className='fw-semibold text-muted'>Largest stock broker in India</h1>
          <p2 className="text-secondary">2+ million Finexa clients contibute to over 15% of all retail order volumes in India daily by trading and investing in : </p2>
          <div className='row'>
            <div className='col-12 col-md-6'>
               <ul className='fs-6 text-secondary mt-3 lh-lg'>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
               </ul>
            </div>
            <div className='col-12 col-md-6 '>
                <ul className='fs-6 text-secondary mt-3 lh-lg mb-5'>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and and Govt. Securities</li>
               </ul>
            </div>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Award
