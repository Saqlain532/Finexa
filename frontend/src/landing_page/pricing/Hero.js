import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-5 border shadow p-lg-5 p-3 rounded-4'>
       <h3 className='text-muted fw-semibold text-center'>Charges</h3>
       <p className='text-muted text-small text-center'>List of all charges and taxes</p>
       <div className='row text-center'>
        <div className='col-lg-4 col-12 text-center'>
             <img src="media/images/pricingEquity.svg"
              style={{width:"70%"}}
              />
             <h3 className='text-muted fs-4'>Free equity delivery</h3>
             <p className='text-muted p-2 text-small'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-lg-4 col-12 text-center'>
             <img src="media/images/intradayTrades.svg" 
             style={{width:"70%"}}
             />
             <h3 className='text-muted fs-4'>Intraday and F&O trades</h3>
             <p className='text-muted p-2 text-small'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-lg-4 col-12 text-center'>
             <img src="media/images/pricingMF.svg"
              style={{width:"70%"}}
              />
             <h4 className='text-muted fs-4 '>Free direct MF</h4>
             <p className='text-muted p-2 text-small '>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
       </div>
    </div>
  )
}

export default Hero
