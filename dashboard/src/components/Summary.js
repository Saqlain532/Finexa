import React from 'react'
import { usePortfolio } from '../context/PortfolioContext.js';
import { useUser } from '../context/UserContext.js';
const Summary = () => {
  const {fundsData, holdings, totalInvestment, currentValue, totalPnL, pnlPercentage } = usePortfolio();
  const {userData} = useUser();
  return (
   <div className='custom-card'>  
      <div className='username'>
        <h6>Hi, {userData ? userData.firstName : "User"}</h6>
        <hr className='divider'/>
      </div>
      <div  className='section'>
            <span>
              <p>Equity</p>
            </span>
          

          <div className='data' >
              <div className='first'>
                    <h3>{fundsData.availableMargin}</h3>
                    <p>Margin available</p>
              </div>
          
              <hr/>

              <div className='second'>
                <p>
                  Margins used <span>{fundsData.usedMargin}</span> {" "}
                </p>
                <p>
                  Opening balance <span>{fundsData.openingBalance}</span>{" "}
                </p>
              </div>

          </div>
          <hr className='divider'/>
      </div>
      <div  className='section'>
            <span>
              <p>Holdings({holdings.length})</p>
            </span>
          

          <div className='data' >
              <div className='first'>
                    <h3 className='profit'>
                       { totalPnL.toFixed(3) }<small>{pnlPercentage}%</small>{" "}
                    </h3>
                    <p>P&L</p>
              </div>
          
              <hr/>

              <div className='second'>
                <p>
                  Current Value <span>{currentValue}</span> {" "}
                </p>
                <p>
                  Investment <span>{totalInvestment}</span>{" "}
                </p>
              </div>

          </div>
          <hr className='divider'/>
      </div>

      

    </div>  
  );
};

export default Summary
