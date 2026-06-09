import React from 'react'

const LeftSection = ({
  imageURL,
  title,
  description,
  tryDemo,
  learnMore,
  playStore,
  appStore
}) => {
  return (
    <div className='container mt-lg-5 mt-3'>
      <div className='row shadow border rounded-4 p-lg-5 p-3'>
      <div className='col-lg-6 col-12'>
           <img src={imageURL}
           style={{width:"70%"}} alt='left-section-image'
           />
      </div>
      <div className='col-lg-6 col-12'>
         <h3 className='mt-sm-2 text-muted fw-bold'>{title}</h3>
         <p className='mt-4 responsive-mode-text text-secondary'> {description}</p>
         <div className='mt-4 d-flex gap-5 text-center'>
          <a href={tryDemo}
             style={{textDecoration:"none"}}
          >Try demo<i class="fa-solid fa-arrow-right-long"></i></a>
          <a href={learnMore}
             style={{textDecoration:"none"}}
          >Learn more<i class="fa-solid fa-arrow-right-long"></i></a>
         </div>
         <div className='mt-4 d-flex gap-3 text-center'>
          <a href={playStore}
          ><img src='media/images/googlePlayBadge.svg' alt='googleplay'/></a>
          <a href={appStore}
          ><img src='media/images/appstoreBadge.svg' alt='appstore'/></a>
         </div>
      </div>
     </div> 
    </div>
  )
}

export default LeftSection
