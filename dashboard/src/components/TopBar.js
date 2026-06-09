import React, { useState, useEffect } from 'react'; 
import api from '../api.js';

const TopBar = () => {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
        const response = await api.get(`${backendUrl}/api/marketindices`);
        setIndices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch indices", error);
        setLoading(false);
      }
    };
    
    fetchIndices();
    const intervalId = setInterval(fetchIndices, 120000); 
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div className="h-12 w-full border-b border-gray-200 bg-white animate-pulse" />;
  }

  if (indices.length === 0) return null;

  return (
    <div className='topbar-container'>
      <div className='indices-container'>
        <div className='col-4 pill-shape flex items-center'> 
          
          
          {indices.map((item, index) => {
            const isPositive = item.change >= 0;
            const sign = isPositive ? '+' : '';

            return (
              <React.Fragment key={item.name}>
                
                <div className="flex items-center gap-2"> 
                  <p className='index' style={index > 0 ? { marginLeft: ".2rem" } : {}}>
                    {item.name}
                  </p>
                  
                  {/* Current Price */}
                  <p className={`index-points font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {item.price?.toFixed(2)}
                  </p>
                  
                  {/* Absolute Change and Percentage */}
                  <p className={`percent text-xs ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {sign}{item.change?.toFixed(2)} ({sign}{item.percentChange?.toFixed(2)}%)
                  </p>
                </div>

               
                {index < indices.length - 1 && (
                  <hr className="mx-3 h-4 w-px bg-gray-300 border-none inline-block" />
                )}
              </React.Fragment>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default TopBar;