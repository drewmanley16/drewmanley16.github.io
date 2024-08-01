import React from 'react'
import Navbar from '../Components/Navbar'
import useScrollFadeIn from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.js';
import Footer from '../Components/Footer';
import '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Professional-bio.css'
import Headshot from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Headshot.jpg'

export default function ProfessionalBio() {
    return (
        <div className='pro-container'>
        <div className='title-container fade-in'>
                <Navbar/>
                <h1 className='header fade-in'> Striving Forward </h1>
            </div>
            <div className='pro-one-container'>
                <img src={Headshot} alt="image" className='pro-one-image fade-in'></img>
                    <div className='pro-text-container fade-in'>
                        <h2 className='sub-header'> Professional Bio. </h2>
                        <h4 className='pro-sub-header-text'> 
                        I have a passion for exploring cafes, my dog is named Tobi, my favorite baseball <br></br>
                        player is Buster Posey, my favorite gym exercises are calf raises and shoulder press, <br></br>
                        I love to play tennis and pickleball, my favorite number is 16, I wish I was Harry <br></br>
                        Potter, I love tacos and I have sprained my right ankle 6 times.
                        </h4>
                    </div>
            </div>
        <Footer/>
        </div>
    )
}