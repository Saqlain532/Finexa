import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api.js';

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        
        const response = await api.get(`${backendUrl}/api/auth/orders/getorders`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
       
        setOrdersData(response.data); 

      } catch (error) {
        console.error("Server error for fetching orders data", error);
        setOrdersData([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchOrders();
  }, []); 

  return (
    <>
      {loading && <h3>Loading orders....</h3>}
      
      {!loading && (
        <div className='orders custom-card'>
          {ordersData.length === 0 ? (
            <div className='no-orders text-center'>
              <p>You haven't placed any orders today</p>
              <Link to={'/'} className="btn bg-blue-600 text-white p-2 rounded mt-2 inline-block">
                Get started
              </Link>
            </div>
          ) : (
            <div className='flex flex-col overflow-auto'>
              <h2 className='text-slate-500 mb-4 font-bold'>Order history</h2>
              <table className='w-full text-slate-700 text-center border-2 border-slate-200 p-4  '>
                <thead className='border border-slate-200 p-2 m-2'>
                  <tr >
                    <th className='px-2 border border-slate-200'>Name</th>
                    <th className='px-2 border border-slate-200'>Qty</th>
                    <th className='px-2 border border-slate-200'>Price</th> 
                    <th className='px-2 border border-slate-200'>Mode</th>
                    <th className='px-2 border border-slate-200'>Product</th> 
                    <th className='px-2 border border-slate-200'>Time</th>
                  </tr>
                </thead>
                <tbody >
                  {ordersData.map((order) => (
                    
                    <tr key={order._id}
                      className='border border-slate-200 p-2 m-2'
                    > 
                      <td className='px-2 border border-slate-200'>{order.name}</td>
                      <td className='px-2 border border-slate-200'>{order.qty}</td>
                      <td className='px-2 border border-slate-200'>{order.price}</td> 
                      <td className={`${order.mode === 'BUY' ? 'text-blue-600' : 'text-red-600'} px-2 border border-slate-200`}>
                        {order.mode}
                      </td>
                      <td className='px-2 border border-slate-200'>{order.product || 'CNC'}</td>
                      <td className='px-2 border border-slate-200'>{new Date(order.createdAt).toLocaleString()}</td> 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Orders;