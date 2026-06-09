import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 const dashboardUrl = `${process.env.REACT_APP_DASHBOARD_URL}/signup`;
  return (
    <div className=' container mt-3 stick'
    >
     <nav className="navbar navbar-expand-lg custom-navbar py-2 border  shadow "      
     >
        <div className="container-fluid px-4">

    <Link to="/" className="navbar-brand">
      <img
        src="/media/images/logo.svg"
        alt="Finexa"
        className="navbar-logo"
      />
    </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav   mb-0 gap-3 ">
              <li className="nav-item ">
                <Link className="nav-link active text-secondary fw-semibold rounded-pill border px-3" aria-current="page" to='/' >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-secondary fw-semibold rounded-pill border px-3" to="/about">About</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active text-secondary fw-semibold rounded-pill border px-3"  to='/products'>Products</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active text-secondary fw-semibold rounded-pill border px-3" to='/pricing'>Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-secondary fw-semibold rounded-pill border px-3"  to='/support'>Support</Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-danger rounded-pill px-4"
                  onClick={() =>  {
                            window.open(dashboardUrl, '_blank', 'noopener,noreferrer');
                          }}
                >
                  Sign in to dashboard
                </button>
              </li>
            </ul>
          </div>  
        </div>
      </nav>
       
      
    </div>
  )
}

export default Navbar
