import React from 'react'

const RightSection = ({
  imageURL,
  title,
  description,
  learnMore,
  learnMoreLink
}) => {
  return (
    <div className='container mt-lg-5 mt-3'>
      <div className='row shadow border rounded-4 p-lg-5 p-3'>
      <div className='col-lg-6 col-12'>
         <h3 className='mt-sm-2 text-muted fw-bold'>{title}</h3>
         <p className='mt-4 responsive-mode-text text-secondary'> {description}</p>
         <div className='mt-4 d-flex gap-5 text-center'>
          <a href={learnMoreLink}
             style={{textDecoration:"none"}}
          >{learnMore}<i class="fa-solid fa-arrow-right-long"></i></a>
         </div>
      </div>  
      <div className='col-lg-6 col-12'>
           <img src={imageURL} alt='right-section'
           style={{width:"50%"}}
           />
      </div>
     </div> 
    </div>
  )
}

export default RightSection
