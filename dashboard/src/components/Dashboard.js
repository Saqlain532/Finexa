import React from 'react'
import {Route, Routes} from "react-router-dom";
import Summary from './Summary.js';
import Orders from './Orders.js';
import Holdings from './Holdings.js';
import Positions from './Positions.js';
import Funds from './Funds.js';
import Apps from './Apps.js';
import SignUp from './SignUp.js';
import Menu from './Menu.js';
const Dashboard = () => {
  
 
  
  return (

        <div className='dashboard-container'>
            
            <Menu/>
            
            <div className='content' >
            <Routes>
                <Route path="/" element={<Summary/>} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/holdings" element={<Holdings/>} />
                <Route path="/positions" element={<Positions/>} />
                <Route path="/funds" element={<Funds/>} />
                <Route path="/apps" element={<Apps/>} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
            </div>
       </div>        
  )
}

export default Dashboard
