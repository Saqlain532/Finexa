import React, { useState } from 'react'
import {pricingData} from './pricingData.js'
import {additionalData} from './pricingData.js'
const Brokerage = () => { 
  const [activeTab, setActiveTab] = useState('Equity');
  const currentSegment = pricingData[activeTab];
  const [tab1, setTab1] = useState("AccountOpening");
  const seg =  additionalData[tab1]
  
  return (
    <>
    <div className='container border rounded-4 p-lg-5 p-3 shadow mt-5'>
     <div className="d-flex flex-wrap mb-3">
        {Object.keys(pricingData).map((tab) => {
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn m-2 px-4 py-2 fs-5 rounded-pill transition-all ${
                activeTab === tab
                  ? 'btn-secondary text-white shadow-sm'
                  : 'btn-outline-secondary border-0 text-dark bg-light'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>
     <hr className="text-muted my-4"/>
      <div className='table-responsive border rounded-3 shadow-sm'>
        <table className='table table-hover align-top mb-0'>
          
          
          <thead className='table-light border-bottom'>
            <tr>
              
              <th className='p-4 text-secondary font-semibold' style={{ width: '20%' }}>
                Charges / Segment
              </th>
              {currentSegment.headers.map((header, index) => {
                return (
                  <th key={index} className='p-4 text-dark font-semibold fw-normal'>
                    {header}
                  </th>
                )
              })}
            </tr>
          </thead>
          
          
          <tbody>
            {currentSegment.rows.map((row, rowIndex) => {
              return (
                <tr key={rowIndex} className="border-bottom">
                 
                  <td className='p-4 fw-medium text-dark text-opacity-75'>
                    {row.label}
                  </td>
                  
                 
                  {row.values.map((cellValue, cellIndex) => {
                    return (
                      <td 
                        key={cellIndex} 
                        className='p-4 text-muted small'
                        style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}
                      >
                        {cellValue}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>



      <div className="d-flex flex-wrap mb-3 mt-5">
        {Object.keys(additionalData).map((tab) => {
          return (
            <button
              key={tab}
              onClick={() => setTab1(tab)}
              className={`btn m-2 px-4 py-2 fs-5 rounded-pill transition-all ${
                tab1 === tab
                  ? 'btn-secondary text-white shadow-sm'
                  : 'btn-outline-secondary border-0 text-dark bg-light'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>
     <hr className="text-muted my-4"/>
      <div className='table-responsive border rounded-3 shadow-sm'>
        <table className='table table-hover align-top mb-0'>
          
          
          <thead className='table-light border-bottom'>
            <tr>
              
              <th className='p-4 text-secondary font-semibold' style={{ width: '20%' }}>
                Charges / Segment
              </th>
              {seg.headers.map((header, index) => {
                return (
                  <th key={index} className='p-4 text-dark font-semibold fw-normal'>
                    {header}
                  </th>
                )
              })}
            </tr>
          </thead>
          
          
          <tbody>
            {seg.rows.map((row, rowIndex) => {
              return (
                <tr key={rowIndex} className="border-bottom">
                 
                  <td className='p-4 fw-medium text-dark text-opacity-75'>
                    {row.label}
                  </td>
                  
                 
                  {row.values.map((cellValue, cellIndex) => {
                    return (
                      <td 
                        key={cellIndex} 
                        className='p-4 text-muted small'
                        style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}
                      >
                        {cellValue}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

      
      
    </div>
    <div className='mt-5 p-lg-5  p-3 responsive-text border rounded-4 shadow container '>
        <h3 className='text-muted fw-semibold'>Disclaimer</h3>
        <p className='text-muted text-small '>
          For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
        </p>
      </div>
     </> 
  )
}

export default Brokerage
