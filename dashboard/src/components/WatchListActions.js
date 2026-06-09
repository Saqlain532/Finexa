import React, { useState } from 'react';
import { Tooltip, Grow } from '@mui/material';
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material';
import BuySellForm from './BuySellForm.js';

const WatchListActions = ({ uid }) => {
  const [showSellBuyForm, setShowSellBuyForm] = useState(false);
  const [isBuy, setIsBuy] = useState(true);

  return (
   
    <div className="flex items-center gap-1.5 px-1">
      
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm"
          onClick={() => { setIsBuy(true); setShowSellBuyForm(true); }}
        >
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm"
          onClick={() => { setIsBuy(false); setShowSellBuyForm(true); }}
        >
          S
        </button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="text-gray-400 hover:text-gray-800 p-1.5 rounded hover:bg-gray-100 transition-colors">
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="text-gray-400 hover:text-gray-800 p-1.5 rounded hover:bg-gray-100 transition-colors">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>

      {/* Your form remains fully functional */}
      {showSellBuyForm && (
        <BuySellForm 
          showSellBuyForm={showSellBuyForm} 
          isBuy={isBuy} 
          stockName={uid}
          onClose={() => setShowSellBuyForm(false)} 
        />
      )}
    </div>
  );
};

export default WatchListActions;