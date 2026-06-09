import React from 'react'
import { useState,useEffect } from 'react';
import api from '../api.js';
const Positions = () => {
  const [positions, setPositions] = useState([]);
   let backendUrl = process.env.REACT_APP_BACKEND_URL;
  useEffect( ()=>{
     const fetchPosition = async ()=>{
      try {
        const token = localStorage.getItem('accessToken');
        const res = await api.get(`${backendUrl}/api/auth/positions/getpositions`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        console.log(res.data)
        setPositions(res.data);
      } catch (error) {
       if (error.response && error.response.status === 404) {
             console.log("User has no positions yet.");
             setPositions([]); 
        } else if (error.response && error.response.status === 401) {
             console.error("User is not logged in or token expired.");
             
        } else {
             console.error("Positions data not fetched", error);
        }
      }
        
     }
     fetchPosition();
  }, [backendUrl]);
  return (
     <div className='custom-card'>
          <h3 className='title'>Positions ({positions.length})</h3>
          <div className='order-table'>
               <table>
                   <tr>
                      <th>Product</th>
                      <th>Instrument</th>
                      <th>Qty.</th>
                      <th>Avg. cost</th>
                      <th>LTP</th>
                      <th>P&L</th>
                      <th> Chg.</th>
                   </tr>
    
                   {positions.map((stock)=>{
                        // 1. Calculate Values
                          const curValue = stock.price * stock.qty;
                          const investedValue = stock.avg * stock.qty;
                          const pnlAmount = curValue - investedValue;
                          
                          // 2. Determine Logic (True/False)
                          const isProfit = pnlAmount >= 0;
                          const isDayLoss = stock.day < 0; 
                          
                          // 3. Assign CSS Classes
                          const profClass = isProfit ? "profit" : "loss";
                          const dayClass = isDayLoss ? "loss" : "profit";
                        return (
                          <tr key={stock.id}>
                            <td className={profClass} >{stock.product}</td>
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td className={profClass}
                            >
                                {(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                            <td className={dayClass}>{stock.day}</td>
                          </tr>
                        )
                   })}
    
               </table>
          </div>
        </div>
  )
}

export default Positions
