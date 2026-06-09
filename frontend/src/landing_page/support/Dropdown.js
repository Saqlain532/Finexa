import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css'; 

const Dropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [data]);
  

  return (
    <div className="dropdown" ref={dropdownRef}>
  <button className="dropdown-btn" onClick={toggleDropdown}>
    
    <div className="left-section">
      <div className="icon-box">
        {data.icon}
      </div>

      <div className="title-box">
        <p>{data.title}</p>
      </div>
    </div>

    <span className="arrow">
      {isOpen ? (
        <i className="fa-solid fa-chevron-up"></i>
      ) : (
        <i className="fa-solid fa-chevron-down"></i>
      )}
    </span>

  </button>

  {isOpen && (
    <ul className="dropdown-menu">
      {data.list.map((listValue, index) => (
        <li key={index} onClick={() => setIsOpen(false)}>
          <a href={`#${listValue.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            {listValue}
          </a>
        </li>
      ))}
    </ul>
  )}
</div>
  );
};

export default Dropdown;