import React, { useEffect, useState } from 'react';
import WatchListItem from './WatchListItem.js';
import api from '../api.js';
import WatchListAddButton from './WatchListAddButton.js';
import { WatchlistChart } from './DoughnoutChart.js';

const WatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchLiveWatchList = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await api.get(`${backendUrl}/api/profile/watchlist`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWatchlistData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to load live market data');
        setLoading(false);
      }
    };
    fetchLiveWatchList();
  }, [backendUrl]);

  return (
    <div className='watchlist-container scrollbar-hide flex flex-col min-h-screen p-4'>
      <div className='search-container'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search eg:infy , bse, nifty fut weekly, gold mcx'
          className='search border px-3 py-2 rounded'
        />
        <span className='counts ml-3'>{watchlistData.length}/50</span>
      </div>

      <WatchListAddButton/>

      {loading && <div className="loading-text mt-4">Loading live updates...</div>}
      {error && <div className="error-text mt-4 text-red-500">{error}</div>}
      
    
      {!loading && !error && (
        <div className='flex flex-col gap-6 mt-4 w-full'>
        <div className="overflow-x-auto w-full max-h-72 overflow-y-auto shadow-sm border rounded-lg scrollbar-hide99">
          <table className='w-full text-left border-collapse  '>
            <thead className='border-b bg-slate-50 sticky top-0 z-10'>
              <tr className='text-sm text-slate-500'>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Curr.price</th>
                <th className="py-2 px-4">abs.chg</th>
                <th className='hidden sm:table-cell py-2 px-4'>high</th>
                <th className='hidden sm:table-cell py-2 px-4'>low</th>
                <th className='hidden sm:table-cell py-2 px-4'>Opening</th>
                <th className='hidden sm:table-cell py-2 px-4'>prev.d.clos</th>
              </tr>
            </thead>
            
            {/* Wrapped the mapped items in a <tbody> */}
            <tbody className="divide-y divide-gray-100">
              {watchlistData.map((stock) => {
                return <WatchListItem stock={stock} key={stock.symbol} />;
              })}
            </tbody>
          </table>
        </div>
     
         <div className="w-full border rounded-lg p-4 bg-white shadow-sm ">
            <WatchlistChart watchlistData={watchlistData}/>
        </div>
      </div>
       )}
    </div>
  );
};

export default WatchList;