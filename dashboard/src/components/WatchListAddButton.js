import React, {useState} from 'react'
import { Tooltip , Grow} from '@mui/material'
import api from '../api.js';
import { useNavigate } from 'react-router-dom';
const WatchListAddButton = () => {
   
    const [showInput, setShowinput] = useState(false);
    const [operation, setOperation] = useState("");
    const [formData, setFormData] = useState({
            stock:""
       });
    const navigate = useNavigate();
    let backendUrl = process.env.REACT_APP_BACKEND_URL;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
        const token = localStorage.getItem('accessToken');
        const stock = formData.stock;
        const payload = { operation, stock }
        console.log(payload)
        const endpoint = `${backendUrl}/api/profile/watchlist/updatewatchlist`
        const res = await api.post(endpoint, payload,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Success:", res.data);
        setFormData({stock: ""});
        setShowinput(false);
        navigate('/')
        } catch (error) {
           if (error.response && error.response.status === 401) {
                console.error('Authorization error: Token expired or missing');
            } else {
                console.error('Server side error:', error.response?.data?.message || error.message);
            }
        
        }
    }  
    const handleChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }                          

  return (
    <div className='felx flex-col relative'>
       <div className='flex gap-3 m-1.5'>
         <Tooltip 
            title="Add Stocks to watch" placement="bottom" arrow TransitionComponent={Grow}
          >
            <button
            onClick={()=>{setShowinput(true); setOperation('add')}}
            className='bg-amber-700 text-white p-1 rounded-lg'
            >
            Add
            </button>
            </Tooltip>
            <Tooltip 
                title="Delete Stocks from watch" placement="bottom" arrow TransitionComponent={Grow}
            >
            <button
             onClick={()=>{setShowinput(true); setOperation('del')}}
             className='bg-gray-600 text-white p-1 rounded-lg'
            >
            DEL
            </button>
        </Tooltip>
      </div> 
      
       {showInput &&  <div className='flex flex-col relative gap-1 bg-white border border-slate-200 justify-between '>
            <div
            onClick={()=>setShowinput(false)}
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 cursor-pointer p-1 flex items-center"
            >
            <i className="fa-solid fa-xmark text-lg"></i>
            </div>
            <form onSubmit={handleSubmit}>
                 <input
                    placeholder='enter valid stock name'
                    name='stock'
                    className='border border-slate-300  m-2 p-1 rounded-lg focus:ring-1 focus:ring-slate-400 focus:outline-none'
                    value={formData.stock}
                    onChange={handleChange}
                  />
                <button type='submit'
                       className='bg-blue-400 text-white px-2 py-1 rounded-lg'
                >
                    Submit
                </button>
            </form>    
        </div>}
    </div>
  )
}

export default WatchListAddButton
