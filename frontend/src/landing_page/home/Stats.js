import React from 'react'

const Stats = () => {
  return (
    <div className='container p-5 d-felx shadow border rounded'>
      <div className='row ' style={{marginTop:"5rem"}}>
        <div className=' col-12 col-lg-6 p-3 mb-5 '>
            <img src='/media/images/ecosystem.png' alt='ecosystem image' style={{maxWidth:"90%"}} className='mt-2 img-fluid'/>
             <div className='mt-2 d-flex justify-content-center  align-items-center gap-3'>
                <a href='#'
                style={{textDecoration:"none"}}
               
                > Explore our products&nbsp;
                  <i class="fa-solid fa-arrow-right-long"></i>
                 </a>
                  <a href='#'
                  style={{textDecoration:"none"}}
                  > Try Kite demo&nbsp;
                  <i class="fa-solid fa-arrow-right-long"></i>
                 </a>
              </div>
        </div>
        <div className='col-lg-6 col-12 gap-2 '>
              <h2 className='mb-4 fw-bold text-muted'>
                Trust with confidence
              </h2>
              <div>
                <h4 className='fw-semibold text-muted '>Customer-first always</h4>
                <p className='mb-2  mt-2 fs-6 text-secondary lh-lg responsive-text' >
                  That's why 1.6+ crore customers trust Finexa with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                </p>
              </div>
              <div>
              <h4 className='fw-semibold text-muted' >No spam or gimmicks</h4>
              <p className='mb-2  mt-2 fs-6 text-secondary lh-lg responsive-text' > 
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
              </p>
              </div> 
              <div>
               <h4  className='fw-semibold text-muted '>The Finexa universe</h4>
               <p className='mb-2  mt-2 fs-6 text-secondary lh-lg responsive-text'>
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
              </div>
              <div>
              <h4 className='fw-semibold text-muted'>Do better with money</h4>
              <p className='mb-2  mt-2 fs-6 text-secondary  lh-lg responsive-text'>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
              </p>  
              </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Stats
