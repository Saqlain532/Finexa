import React from 'react'
import { usePortfolio } from '../context/PortfolioContext.js'
import HoldingsChart from './VerticalChart.js';
const Holdings = () => {

  const { holdings, totalInvestment, currentValue, totalPnL, pnlPercentage, pnlClass } = usePortfolio();
  
  return (
    <div className='custom-card'>
      <h3 className='title'>Holdings ({holdings.length})</h3>
      <div className='order-table'>
           <table>
            <thead>
               <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
               </tr>
            </thead>  
              <tbody>
               {holdings.map((stock, index)=>{
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stock.isLoss ? "loss" : "profit";

                    return (
                    
                      <tr key={index}>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td>{curValue.toFixed(2)}</td>
                        <td className={profClass}
                        >
                            {(curValue -stock.avg * stock.qty).toFixed(2)}</td>
                        <td className={profClass} >{stock.net}</td>
                        <td className={dayClass}>{stock.day}</td>
                      </tr>
                    
                    )
               })}
             </tbody>     

           </table>
      </div>
     
      <div className='row'>
    <div className='col'>
        <h5>
            
            {totalInvestment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h5>
        <p>Total investment</p>
    </div>
    <div className='col'>
        <h5>
            {currentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h5>
        <p>Current Value</p>
    </div>
    <div className='col'>
        <h5 className={pnlClass}>
            
            {totalPnL > 0 ? "+" : ""}
            {totalPnL.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
            {" "}
            ({totalPnL > 0 ? "+" : ""}{pnlPercentage}%)
        </h5>
        <p>P&L</p>
    </div>
</div>
    <HoldingsChart holdingsData={holdings} />
    </div>
  )
}

export default Holdings
