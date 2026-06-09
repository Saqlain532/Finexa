import React from 'react'

const Universe = () => {
  return (
    <div className='container mt-lg-5 mt-3 shadow border rounded-5 p-lg-5 p-3'>
      <p className='text-muted  responsive-mode-text text-center py-2'>Want to know more about our technology stack? Check out the Finex.tech blog.</p>
      <div className='border-bottom m-2'></div>
      <div className='text-center mb-5'>
           <h3 className='text-muted fw-bold py-2 '>The Finexa Universe</h3>
           <p className='text-muted  text-small'> Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className='row d-flex '>
       <div className='col-lg-4 col-6 text-center'>
         <a href="#/"
            style={{textDecoration:"none"}}
         >
          <img src="media/images/finexafund.png" alt='finexfund'
            style={{width:"50%"}}
          />
          <p className='text-muted text-center py-3 lh-sm'
             style={{fontSize:"13px"}}
          >Our asset management venture<br/>that is creating simple and transparent index<br/>funds to help you save for your goals.</p>
         </a>
        </div>
      <div className='col-lg-4 col-6 text-center'>
         <a href="#/"
            style={{textDecoration:"none"}}
         >
          <img src="media/images/sensibullLogo.svg"
            style={{width:"50%"}} alt='sensibull-svg'
          />
          <p className='text-muted text-center py-3 lh-sm'
             style={{fontSize:"13px"}}
          >Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
         </a>
        </div>
        <div className='col-lg-4 col-6 text-center'>
         <a href="#/"
            style={{textDecoration:"none"}}
         >
          <img src="media/images/tijori.svg"
            style={{width:"50%"}} alt='tijori svg'
          />
          <p className='text-muted text-center py-3 lh-sm'
             style={{fontSize:"13px"}}
          >Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
         </a>
        </div>
        
              
     </div>
     <div className='row d-flex mt-3 '>
       <div className='col-lg-4 col-6 text-center'>
         <a href="#/"
            style={{textDecoration:"none"}}
         >
          <img src="media/images/streakLogo.png"
            style={{width:"50%"}} alt='streakLogo'
          />
          <p className='text-muted text-center py-3 lh-sm'
             style={{fontSize:"13px"}}
          >Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
         </a>
        </div>
      <div className='col-lg-4 col-6 text-center'>
         <a href="#/"
            style={{textDecoration:"none"}} 
         >
          <img src="media/images/smallcaseLogo.png"
            style={{width:"50%"}} alt='samllcaseLogo'
          />
          <p className='text-muted text-center py-3 lh-sm'
             style={{fontSize:"13px"}}
          >Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
         </a>
        </div>
        <div className='col-lg-4 col-6 text-center'>
         <a href="#/"
            style={{textDecoration:"none"}}
         >
          <img src="media/images/dittoLogo.png"
            style={{width:"50%"}} alt='dittologo'
          />
          <p className='text-muted text-center py-3 lh-sm'
             style={{fontSize:"13px"}}
          >Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
         </a>
        </div>
        
              
     </div> 
    </div>
  )
}

export default Universe
