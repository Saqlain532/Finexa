import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useUser } from '../context/UserContext.js';

const Menu = () => {
    
   const [selectedMenu, setSelectedMenu] = useState(0);
   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   

  const {userData, handleLogout} = useUser(); 

  const getInitials = () => {
     if (!userData || !userData.firstName || !userData.lastName) {
       return "U"; 
     }
     return `${userData.firstName[0]}${userData.lastName[0]}`.toUpperCase();
   };
   

   const handleMenuClick = (index) =>{
    setSelectedMenu(index)
   };
   const handleProfileClick = (index) =>{
      setIsProfileDropdownOpen(!isProfileDropdownOpen)
        
   };

   const menuClass = "menu";
   const activeMenuClass = "menu selected"
  return (
    <div className='menu-container' >
      <img src="logo.png"  alt='logo'
      style={{width:"50px"}}
      />
      <div className={` menus nav-links ${isOpen ? "active" : ""}`}>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link
             className='custom-shape-menu-li'
             style={{textDecoration:"none"}}
             to='/'
             onClick={()=>handleMenuClick(0)}
            >
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}
                >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to='/orders'
             onClick={()=>handleMenuClick(1)}
             className='custom-shape-menu-li'
            >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}
                > Orders</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to='/holdings'
             onClick={()=>handleMenuClick(2)}
             className='custom-shape-menu-li'
            >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}
                >Holdings</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to='/positions'
             onClick={()=>handleMenuClick(3)}
             className='custom-shape-menu-li'
            >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}
                >Positions</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to='/funds'
             onClick={()=>handleMenuClick(4)}
             className='custom-shape-menu-li'
            >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}
                >Funds</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to='/apps'
             onClick={()=>handleMenuClick(5)}
             className='custom-shape-menu-li'
            >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}
                >Apps</p>
            </Link>
          </li>
          <li className="relative"> 
            <div className='flex flex-col cursor-pointer' onClick={handleProfileClick}>
              <div className="profile">
                <div className="avatar">{getInitials()}</div>
                <p className="username">{userData ? userData.firstName : "Guest"}</p>
              </div> 
              
              {isProfileDropdownOpen && (
                
                <div className='absolute top-full right-0 mt-2 bg-slate-300 shadow-lg rounded-full border border-gray-200 flex flex-col z-50 min-w-[120px] overflow-hidden'>
                  <button 
                    className='bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 text-sm font-semibold transition-colors text-left'
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
       
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
       <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
      
    </div>
  )
}

export default Menu
