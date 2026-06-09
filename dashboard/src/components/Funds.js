import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext.js';


const Funds = () => {
 const {fundsData, loading, error}  = usePortfolio();
  return (
    <div className='custom-card'>
      <div className='funds'>
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link className='btn btn-green'>Add funds</Link>
        <Link className='btn btn-blue'>Withdraw</Link>
      </div>

      {loading && <div className="loading-text mt-4">Loading live updates...</div>}
      
      {error && <div className="error-text mt-4 text-red-500">{error}</div>}
      
      
      {!loading && !error && fundsData.message === "Funds not found for this user" && (
         <div className="mt-4 p-4 border rounded bg-gray-50">
             <p className="text-gray-600">No funds found for this account. Please add funds to begin.</p>
         </div>
      )}

     
      {!loading && !error && !fundsData.message && (
        <div className='row'>
          <div className='col'>
            <span>
              <p>Equity</p>
            </span>
            <div className='table'>
              <div className='data'>
                <p>Available margin</p>
                <p className='imp colored'>{fundsData.availableMargin}</p>
              </div>
              <div className='data'>
                <p>Used margin</p>
                <p className='imp '>{fundsData.usedMargin}</p>
              </div>
              <div className='data'>
                <p>Available cash</p>
                <p className='imp '>{fundsData.availableCash}</p>
              </div>
              <hr/>
              <div className='data'>
                <p>Opening Balance</p>
                <p>{fundsData.openingBalance}</p>
              </div>
              <div className='data'>
                <p>Payin</p>
                <p>{fundsData.payin}</p>
              </div>
              <div className='data'>
                <p>SPAN</p>
                <p>{fundsData.span}</p>
              </div>
              <div className='data'>
                <p>Delivery Margin</p>
                <p>{fundsData.deliveryMargin}</p>
              </div>
              <div className='data'>
                <p>Exposure</p>
                <p>{fundsData.exposure}</p>
              </div>
              <div className='data'>
                <p>Options premium</p>
                <p>{fundsData.optionsPremium}</p>
              </div>
              <hr/>
              <div className='data'>
                <p>Collateral (Liquid funds)</p>
                <p>{fundsData.collateralLiquid}</p>
              </div>
              <div className='data'>
                <p>Collateral (Liquid Equity)</p>
                <p>{fundsData.collateralEquity}</p>
              </div>
              <div className='data'>
                <p> Total Collateral</p>
                <p>{(fundsData.collateralLiquid || 0) + (fundsData.collateralEquity || 0)}</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='commodity'>
              <p>You don't have a commodity account</p>
              <Link className='btn btn-blue'>Open Account</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Funds;