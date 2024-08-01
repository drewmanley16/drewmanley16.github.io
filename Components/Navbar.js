import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';

    const Navbar = () => {
        const location = useLocation(); // Get current location
  
        // Helper function to check if the link is active
        const isActive = (path) => location.pathname === path ? 'active' : '';
        
        return (
            <nav className="navbar">
              <div className="navbar-name-container">
                <Link to="/home">
                  <span className="name-text name-text-d">D</span>
                  <span className="name-text name-text-m">M</span>
                </Link>
              </div>
              <div className="navbar-links-container">
                <div className="links-box">
                  <Link to="/home" className={isActive('/home')}> HOME </Link>
                  <Link to="/about" className={isActive('/about')}>ABOUT</Link>
                  <Link to="/consulting" className={isActive('/consulting')}>CONSULTING</Link>
                  <Link to="/coding" className={isActive('/coding')}>CODING</Link>
                  <div className='dropdown'>
                    <span className='dropbtn'>MORE</span>
                    <div className='dropdown-content'>
                        <Link to="/resume" className={isActive('/resume')}> RESUME </Link>
                        <Link to="/professional-bio" className={isActive('/professional-bio')}> PROFESSIONAL BIO </Link>
                    </div>
                  </div>
                  <div className='dropdown'>
                    <span className='dropbtn'>CONTACT</span>
                    <div className='dropdown-content'>
                        <Link to="https://www.linkedin.com/in/drewmanley/"> LINKEDIN </Link>
                        <Link to="mailto:deman@uoregon.edu"> MAIL </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-menu-container">
                <Link to="/home" className={isActive('/home')}>[ HOME ]</Link>
              </div>
            </nav>
          );
        }
      
export default Navbar;