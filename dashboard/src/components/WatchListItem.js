import React from 'react';
import WatchListActions from './WatchListActions.js';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

const WatchListItem = ({ stock }) => {
 
  
 
  const { symbol, data } = stock;
  const { c, dp, o, pc, h, l } = data;
  
  const isDown = dp < 0;

  return (
    <tr 
      className="group hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-none"
    >
      
      <td className="py-4 px-4 font-semibold text-sm text-gray-600 min-w-[220px]">
        <div className="flex items-center gap-3">
          <span>{symbol}</span>
          
        
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center bg-white shadow-sm border border-gray-200 rounded px-2 py-1">
              <WatchListActions uid={symbol} />
            </div>
        
        </div>
      </td>

      <td className="py-4 px-4 font-semibold text-sm text-gray-900">
        ${c?.toFixed(2)}
      </td>

      <td className="py-4 px-4 font-medium">
        <span className={`inline-flex items-center gap-0.5 px-2 py-1 rounded text-xs font-bold ${
          isDown ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
        }`}>
          {isDown ? '-' : '+'}
          {Math.abs(dp)?.toFixed(2)}%
          {isDown ? <KeyboardArrowDown className="!text-sm" /> : <KeyboardArrowUp className="!text-sm" />}
        </span>
      </td>

      <td className="py-4 px-4 text-gray-500 text-xs hidden sm:table-cell">
        {h?.toFixed(2)}
      </td>

      <td className="py-4 px-4 text-gray-500 text-xs hidden sm:table-cell">
        {l?.toFixed(2)}
      </td>
      
      <td className="py-4 px-4 text-gray-500 text-xs hidden sm:table-cell">
        {o?.toFixed(2)}
      </td>

      <td className="py-4 px-4 text-gray-500 text-xs hidden sm:table-cell">
        {pc?.toFixed(2)}
      </td>
    </tr>
  );
};

export default WatchListItem;