import { createContext, useEffect, useContext, useState } from "react";
import api from "../api.js";

const portfolioContext = createContext();

export const usePortfolio = ()=> useContext(portfolioContext);

export const PortfolioProvider = ({children}) =>{
    const [holdings, setHoldings] = useState([]);
    const [fundsData, setFundsData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

   useEffect(()=>{
      const fetchAllData = async ()=>{
        try {
            const token = localStorage.getItem('accessToken');
             if (!token) {
            setLoading(false);
            return; 
            }
            const headers = { Authorization: `Bearer ${token}` };
            
            const [fundsResult, holdingsResult] = await Promise.allSettled([
            api.get(`${backendUrl}/api/auth/funds/getfunds`, { headers }),
            api.get(`${backendUrl}/api/auth/holdings/getholdings`, { headers }) 
            ]);
            
            //Handling funds
            if(fundsResult.status === 'fulfilled'){
                setFundsData(fundsResult.value.data);
            }else{
                const err = fundsResult.reason;
                if(err.response && err.response.status === 404){
                    setFundsData(err.response.data);
                }
                else{
                    console.error(err);
                    setError(err.response?.data?.message || `Failed to load Funds : ${err.message}`) 
                }
            }

            //Handling holdings 

            if(holdingsResult.status === 'fulfilled'){
                setHoldings(holdingsResult.value.data);
            }
            else{
                const err = holdingsResult.reason;
                if (err.response && err.response.status === 404) {
                    console.log("User has no holdings yet.");
                    setHoldings([]); 
                } else if (err.response && err.response.status === 401) {
                    console.error("User is not logged in or token expired.");
                    
                } else {
                    console.error("Holdings data not fetched", err);
                }
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || `Failed to load data: ${error.message}`);
            setLoading(false);
        }
      };
      fetchAllData();
   }, [backendUrl]);
   const totalInvestment = holdings.reduce((acc, stock) => {
      return acc + (stock.qty * stock.avg);
    }, 0);

    const currentValue = holdings.reduce((acc, stock) => {
        return acc + (stock.qty * stock.price);
    }, 0);

   const totalPnL = currentValue - totalInvestment;


    const pnlPercentage = totalInvestment > 0 
      ? ((totalPnL / totalInvestment) * 100).toFixed(2) 
      : 0.00;


    const pnlClass = totalPnL >= 0 ? "profit" : "loss";

   return (<portfolioContext.Provider value = {{fundsData, holdings, loading, error,  totalInvestment, currentValue, totalPnL, pnlPercentage , pnlClass }}>
                {children}
          </portfolioContext.Provider>)
};