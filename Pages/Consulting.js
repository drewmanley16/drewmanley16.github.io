import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import UOOCG from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/UOOCG.jpg'
import { Link, useLocation } from 'react-router-dom'
import UOBlockchain from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/UOBlockchain.jpg'
import '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Consulting.css'
import useScrollFadeIn from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.js';
import OBGxLit from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/OBGxLit.webp'

export default function Consulting() {
    useScrollFadeIn();
    
    return (
        <div className='consulting-container'>
            <div className='consulting-text-container fade-in'>
                <Navbar/>
                <h1 className="consulting-header" > Solving Problems. </h1>
            </div>
            <div className='consulting-first-container'>
                <div className='consulting-text fade-in'>
                    <h2 className='consulting-sub-header'>MY CAMPUS CONSULTING VENTURES</h2>
                    <h4 className='consulting-sub-header-text'> I have had such a great opportunity to <br></br> participate in two consulting groups on <br></br> campus.  </h4>
                </div>
            </div>
            <div className='consulting-team-container'>
                <div className='consulting-team-images fade-in'>
                    <a href="https://www.oregonconsultinggroup.com/" className='image-text-link'>
                        <div className='image-text-container'>
                            <img src={UOOCG} alt="OCG" className='ocg-image'></img>
                            <p className="image-text">The Oregon Consulting Group</p>
                        </div>
                    </a>
                    <a href="https://www.oregonblockchain.org/" className='image-text-link'>
                        <div className='image-text-container'>
                            <img src={UOBlockchain} alt="OBG" className='obg-image'></img>
                            <p className="image-text">The Oregon Blockchain Group</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='consulting-first-container-2'>
                <div className='consulting-text-2 fade-in'>
                    <h2 className='consulting-sub-header-2'>I'M A SEASONED CONSULTANT</h2>
                    <h4 className='consulting-sub-header-text'> Below you'll find a selection of some <br></br>of my most recent consulting deliverables <br></br> and final projects. </h4>
                </div>
            </div>
            <div className='consulting-project-container'>
                <div className='consulting-project-images fade-in'>
                    <a href="" className='image-project-text-link'>
                        <div className='image-project-text-container'>
                            <img src={UOOCG} alt="OCG" className='project1-image'></img>
                            <p className="image-project-text">xBiologix Company Report</p>
                        </div>
                    </a>
                    <a href="https://medium.com/oregon-blockchain-group/unlocking-the-future-of-ai-with-lit-protocol-1c52f8682ad1" className='image-project-text-link'>
                        <div className='image-project-text-container'>
                            <img src={OBGxLit} alt="OBG" className='project2-image'></img>
                            <p className="image-project-text"> Encrypted AI Computations Utilizing Lit Protocol's Key Management Software</p>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}