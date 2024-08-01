import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
import Linkedin from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/linkedin.js';
import Twitter from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/twitter.js';
import Instagram from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/instagram.js';
import useScrollFadeIn from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.js';

    const Footer = () => {
        useScrollFadeIn();

        return (
        <div className='footer-container'>
            <nav className='navbar-footer'>
              <div className='links-container fade-in'>
                <div className='footer-links-box'>
                  <Link to="mailto:deman@uoregon.edu">deman@uoregon.edu</Link>
                  <Link to="tel:+6693009848">(669) 300-9848</Link>
                </div>
              </div>
              <div className='center-logo fade-in'>
                <Link to="/home" className="footer-name-text">D</Link>
                <Link to="/home" className="footer-name-text">M</Link>
              </div>
              <div className='footer-logo-container fade-in'>
                <div className='logo-link-box'>
                  <Linkedin />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </nav>
            <div className='copyright-container'>
                <h5 className='copyright-text fade-in'> Copyright 2024 Drew Manley. All Rights Reserved. Reach Out With Inquiries.</h5>
            </div>
        </div>
          );
        }
      
export default Footer;