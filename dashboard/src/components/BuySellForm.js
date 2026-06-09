import React, { useState } from 'react';
import { createPortal } from 'react-dom'; 
import api from '../api.js';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext.js';

const BuySellForm = ({ showSellBuyForm, isBuy, onClose, stockName }) => {
  
  const {fundsData} = usePortfolio();
  const [productType, setProductType] = useState("CNC"); 
  const [response, setResponse] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  if (!showSellBuyForm) return null;

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const orderData = {
        name: stockName,
        qty: Number(formData.get("qty")),
        price: Number(formData.get("price")),
        mode: isBuy ? "BUY" : "SELL",
        product: productType
    };

    console.log("Order Payload to send to Backend:", orderData);
    
    try {
      let token = localStorage.getItem('accessToken');
      
      const res = await api.post(`${backendUrl}/api/auth/orders/postorder`, orderData, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      setResponse(res.data.message || "Order successful!");
      
      setTimeout(() => {
        onClose(); 
        navigate('/orders');
      }, 1500);

    } catch (error) {
        console.error("Server error", error);
        console.log("Server error");
        if (error.response) {
            setResponse(error.response.data.message || "Failed to place order.");
        } else {
            setResponse("Network error. Please try again.");
        }
    } 
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      
      <div className="bg-white p-6 rounded-xl shadow-xl relative w-full max-w-sm m-4">
        
        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer p-1"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          
          <h2 className="text-2xl text-slate-700 font-bold text-center mb-1">
            {isBuy ? `Buy ${stockName}` : `Sell ${stockName}`}
          </h2>

          {/* Product Type Selection (Intraday vs Delivery) */}
          <div className="flex gap-4 mb-2 justify-center">
            <label className="flex items-center gap-1 text-sm cursor-pointer">
              <input 
                type="radio" 
                name="product" 
                value="MIS" 
                checked={productType === "MIS"}
                onChange={() => setProductType("MIS")}
                className="accent-blue-600"
              />
              Intraday (MIS)
            </label>
            <label className="flex items-center gap-1 text-sm cursor-pointer">
              <input 
                type="radio" 
                name="product" 
                value="CNC" 
                checked={productType === "CNC"}
                onChange={() => setProductType("CNC")}
                className="accent-blue-600"
              />
              Longterm (CNC)
            </label>
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="number"
              name="qty"
              placeholder="Qty"
              min="1"
              required
              className="border rounded-md p-3 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="number"
              name="price"
              placeholder="Price"
              step="0.01"
              min="0.01"
              required
              className="border rounded-md p-3 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {response && (
            <div className="p-3 rounded-md text-sm text-center font-medium bg-slate-100 text-slate-800 border border-slate-200">
              {response}
            </div>
          )}

          {/* Margins & Balance Information */}
          <div className="flex justify-between text-xs text-slate-500 mt-1 mb-2 px-1">
            <span>Margins used: <span className="font-semibold text-slate-700">{fundsData.marginUsed}</span></span>
            <span>Opening balance: <span className="font-semibold text-slate-700">{isBuy ? fundsData.openingBalance : '-'}</span></span>
          </div>

          <button
            type="submit"
            className={`${
              isBuy ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"
            } text-white font-bold p-3 rounded-full w-full text-center transition-colors shadow-sm`}
          >
            {isBuy ? "Buy" : "Sell"}
          </button>
          
        </form>
      </div>
      
    </div>,
    document.body
  );
};

export default BuySellForm;