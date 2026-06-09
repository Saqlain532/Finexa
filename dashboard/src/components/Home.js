import React  ,{useEffect, useState} from 'react'
import Dashboard from './Dashboard.js'
import Sidebar from './Sidebar.js'
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {  
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setIsAuthenticated(true);
      
      if (location.pathname === '/signup') navigate('/');
    } else {
      setIsAuthenticated(false);
      
      if (location.pathname !== '/signup') navigate('/signup');
    }

    setIsLoading(false);
  }, [navigate, location.pathname]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-xl text-slate-500">Loading your workspace...</h2>
      </div>
    );
  }

  return (
    <div className='layout'>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} >
        
          <button
          className="menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
          <i class="fa-solid fa-angle-right"></i>
         </button>
          <Sidebar/>
         
      </div>
      <div className='dashboard'>
       

        <Dashboard/>
      </div>
    </div>
  );
};

export default Home
