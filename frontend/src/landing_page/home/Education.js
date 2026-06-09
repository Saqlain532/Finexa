import React from 'react'

const Education = () => {
  return (
    <div className='container p-lg-5 border rounded-2 p-4 shadow mt-5'
    
    >
      <div className='row '>
        <div className='col-lg-6 col-12'>
           <img src='media/images/education.svg' alt='education svg'
              style={{maxWidth:"70%"}}
            />
        </div>
        <div className='col-lg-6 col-12 mt-2'>
           <h2 className='mb-4 fw-bold text-muted'>Free and open market education</h2>
           <div className='mb-4'>
              <p className='mb-2  mt-2 fs-6 text-secondary lh-lg'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href='#'
                  style={{textDecoration:"none"}}
                  > Varsity&nbsp;
                  <i className="fa-solid fa-arrow-right-long"></i>
              </a>
           </div>
           <div  className='mb-4'>
              <p className='mb-2  mt-2 fs-6 text-secondary lh-lg'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href='#'
                style={{textDecoration:"none"}}
                > TradingQ&A&nbsp;
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
           </div>
           
        </div>
      </div>
      
    </div>
  )
}

export default Education
