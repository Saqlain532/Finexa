import React from 'react'

const Pricing = () => {
  return (
    <div className='container mt-5 p-4 p-lg-5 border rounded-2 shadow'>
      <div className='row  d-flex'>
        <div className='col-lg-4 col-12 '>
          <h2 className='text-muted fw-bold mb-4'>Unbeatable pricing</h2>
          <p className='text-secondary '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href='#'
              style={{textDecoration:"none"}}
              > Try Kite demo&nbsp;
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div className='col-lg-7 col-12'>
          <div className="row">
            <div className="col">
              <div className="d-flex align-items-end">
                <h1 className="price-number">₹0</h1>
                <p className="price-text">Free account<br />opening</p>
              </div>
            </div>

            <div className="col">
              <div className="d-flex align-items-end">
                <h1 className="price-number">₹0</h1>
                <p className="price-text">
                  Free equity delivery<br />
                  and direct mutual funds
                </p>
              </div>
            </div>

            <div className="col">
              <div className="d-flex align-items-end">
                <h1 className="price-number">₹20</h1>
                <p className="price-text">
                  Intraday and<br />
                  F&O
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Pricing
