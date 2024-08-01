import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Footer.js'
import HomeImageOne from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/HomeImageOne.png'
import { Link, useLocation } from 'react-router-dom'
import SectionTwoImage from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/SectionTwoImage.png'
import useScrollFadeIn from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.js';

const Home = () => {
    useScrollFadeIn();

  return    <div> 
                <div className='home-container'>
                    <div className='home-text-container fade-in'>
                        <Navbar/>
                        <h1 className="primary-header" >Front-End Developer <br></br>& Avid Consultant.</h1>
                    </div>
                    <div className='home-section-one-container'>
                        <img src={HomeImageOne} alt="image" className='home-section-one-image fade-in'></img>
                    <div className='home-text-sub-container fade-in'>
                        <h2 className='home-sub-header'>Consulting is my<br></br>Passion and Focus.</h2>
                        <h4 className='home-sub-header-text'> Taking the easy route is boring. I love to challenge myself through complex <br></br>problem solving. Consulting is the way in which I do so. Click the button<br></br> below to navigate through my consulting journey.</h4>
                        <Link to="/consulting" className="consulting-button">LEARN MORE</Link>
                    </div>
            </div>
            <div className='home-section-two-container'>
                <img src={SectionTwoImage} alt="image" className='home-section-two-image fade-in'></img>
                    <div className='home-text-sub-container-two fade-in'>
                        <h2 className='home-sub-header-two'>My Other Passion is<br></br>Software Development.</h2>
                        <h4 className='home-sub-header-text-two'> I hate instructions and I love building. I have been exposed to coding my <br></br> whole life but just recently started applying myself. I love software <br></br> development because it allowed me to satisfy my creativty "itch" while <br></br> doing so in a structured, constructive way. Click below to see my projects!</h4>
                        <Link to="/coding" className="coding-button">LEARN MORE</Link>
                    </div>
            </div>
            <Footer />  
        </div>
        </div>
}

export default Home