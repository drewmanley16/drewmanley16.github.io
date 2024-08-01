import React from 'react'
import Navbar from '../Components/Navbar'
import '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/About.css'
import SectionOneImage from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/SectionOneImage.jpg'
import Footer from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Footer.js'
import useScrollFadeIn from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.js';
import Dog from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/dog.png'
import Family from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/family.png'
import Soccer from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/soccer.png'
export default function About() {
    useScrollFadeIn();
    
    return (
        <div className='about-container'>
            <div className='title-container fade-in'>
                <Navbar/>
                <h1 className='header fade-in'> Passions & Personality </h1>
            </div>
            <div className='section-one-container'>
                <img src={SectionOneImage} alt="image" className='section-one-image fade-in'></img>
                    <div className='text-container fade-in'>
                        <h2 className='sub-header'> A few fun facts.</h2>
                        <h4 className='sub-header-text'> I have a passion for exploring cafes, my dog is named Tobi, my favorite baseball <br></br>player is Buster Posey, my favorite gym exercises are calf raises and shoulder press, <br></br>I love to play tennis and pickleball, my favorite number is 16, I wish I was Harry <br></br>Potter, I love tacos and I have sprained my right ankle 6 times.</h4>
                    </div>
            </div>
            <div className='end-section-container'>
                <h5 className='small-header fade-in'>THIS IS ME IN A NUT-SHELL</h5>
                <h3 className='conclusion fade-in'>I'm a son, brother, soccer enthusiast, dog person, <br></br>gamer, mountaing biker, and front-end developer</h3>
            </div>
            <div className='personal-object-container'>
                <div className='personal-object-images fade-in'>
                    <div className='image-personal-container fade-in'>
                        <img src={Family} alt="OCG" className='family-image'></img>
                        <p className="personal-text">The Family.</p>
                    </div>
                    <div className='image-personal-container fade-in'>
                        <img src={Soccer} alt="OBG" className='sport-image'></img>
                        <p className="personal-text">The Sport.</p>
                    </div>
                    <div className='image-personal-container fade-in'>
                        <img src={Dog} alt="OBG" className='dog-image'></img>
                        <p className="personal-text">The Puppy.</p>
                    </div>
                </div>
            </div>
            <div className='backstory-container'>
                <h3 className='backstory-header fade-in'>Back Story.</h3>
                <h5 className='backstory-text fade-in'>
                I have lived the first 19 years of my life in San Jose, California. I feel so fortunate to live in an always-changing environment such as silicon valley.
                </h5>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}