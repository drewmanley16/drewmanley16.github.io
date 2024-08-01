import React from 'react'
import Navbar from '../Components/Navbar'
import useScrollFadeIn from '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.js';
import '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Resume.css'
import '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Consulting.css'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import ResumeLink from "/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Drew Manley's Resume.pdf"

export default function Resume() {
    return (
        <div>
            <div className='resume-container'>
                <Navbar />
                <div className='resume-header-container'>
                    <div className='resume-header'>
                        <h1 className='resume-header-text'> My Resume </h1>
                    </div>
                </div>
            </div>
            <div className='resume-first-container'>
                <div className='resume-text'>
                    <h2 className='resume-sub-header'> DIG EVEN DEEPER </h2>
                    <h4 className='resume-sub-header-text'> Below you will see a web-version of my <br></br> resume. There is also a PDF version attached <br></br> at the bottom if that is more your speed :)  </h4>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> Education. </h1>
                    </div>
                    <div className='right-column-3'>
                        <h2 className='job-role'> BACHELOR OF BUSINESS ADMINISTRATION AND COMPUTER SCIENCE </h2>
                        <h3 className='job-info'>
                            University of Oregon, Expected Graduation June 2027
                        </h3>
                        <h4 className='job-description'> Cumulative GPA: 3.80 | 2x Dean’s List</h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> Work Experience. </h1>
                    </div>
                    <div className='right-column'>
                        <h2 className='job-role'> BUSINESS MANAGEMENT INTERN </h2>
                        <h3 className='job-info'>
                            DeSpark, Boston, Massachusets, June 2024 - Present
                        </h3>
                        <h4 className='job-description'> ●	Developed and implemented user acquisition strategy of 5+ varying media platforms resulting in a 340%+ increase in followers, impressions, and likes, directly attributing to doubling the size of current userbase <br></br>
●	Conducted market research, reached out to VC’s, and collaborated with founders to help pitch DeSpark resulting in $2M+ increase of company valuation
</h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> </h1>
                    </div>
                    <div className='right-column-2'>
                        <h2 className='job-role'> AI & BLOCKCHAIN CONSULTANT </h2>
                        <h3 className='job-info'>
                            The Oregon Blockchain Group, January 2024 - Present
                        </h3>
                        <h4 className='job-description'> ●	Analyzed 5+ diverse digital asset pitch decks and helped invest 5 figures of cryptocurrency, directly attributing to outperforming market benchmark by 15% <br></br>
●	Utilized developer skills, cryptocurrency knowledge, and research to help consulting team develop and publish 5 web3 articles and a dynamic JavaScript use-case for a cutting-edge AI/Blockchain startup
</h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> </h1>
                    </div>
                    <div className='right-column-2'>
                        <h2 className='job-role'> STRATEGY CONSULTANT </h2>
                        <h3 className='job-info'>
                            The Oregon Consulting Group, November 2023 - Present
                        </h3>
                        <h4 className='job-description'> ●	Delivered revenue-generating strategy consulting services to F500, non-profit, and growth-stage businesses through use of primary research, complex financial analysis, and human-centered design methodologies <br></br>
●	Created implementation strategy for major university to establish post-graduate education opportunities through analysis of 50+ schools, resulting in optimized sports and human performance programs <br></br>
●	Benchmarked behavioral research labs across public university landscape to deliver research lab transformation strategy recommendations to Lundquist College of Business faculty and administration
</h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> </h1>
                    </div>
                    <div className='right-column-2'>
                        <h2 className='job-role'> BUSINESS OPERATIONS INTERN </h2>
                        <h3 className='job-info'>
                            Lumenous Device technologies, June 2023 - September 2023
                        </h3>
                        <h4 className='job-description'> ●	Operated and oversaw the ultra-precise laser cutting production of more than 1500 Nitinol medical-grade stents <br></br>
●	Formulated and formatted new organization system in Microsoft Excel for 20+ years of data for federal health compliance <br></br>
●	Wired, soldered, manufactured, and aided in the troubleshooting of hardware and software problems in three system builds, leading to over $30,000 in market sales
</h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> Extracurricular Activities. </h1>
                    </div>
                    <div className='right-column-4'>
                        <h2 className='job-role'> BROTHERHOOD COMMITTEE ADVISOR </h2>
                        <h3 className='job-info'>
                            Alpha Kappa Psi, November 2023 - Present
                        </h3>
                        <h4 className='job-description'> ●	Hosted a networking trip of 18 members to San Francisco to visit 4 different market-leading companies, participating in networking and panel events for increased professional development of members <br></br>
●	Conducted formal presentation on professional development and personal experiences to 90+ members<br></br>
●	Advised for Brotherhood committee to implement Brother Study Sessions and comprehensive professional development plan for membership onboarding
 </h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> </h1>
                    </div>
                    <div className='right-column-2'>
                        <h2 className='job-role'> STUDENT LEADER </h2>
                        <h3 className='job-info'>
                            Merge Ministries, July 2023 - August 2023
                        </h3>
                        <h4 className='job-description'> ●	Recognized as 1 of 12 specially selected individuals chosen for their ability to excel in communication and outreach to travel abroad to serve an underdeveloped community of Santo Domingo, Dominican Republic <br></br>
●	Persevered through language barrier to design a variety of sports games alongside local community leaders, helping run a children’s camp for 50+ Dominican children 
 </h4>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <div className='resume-section'>
                    <div className='left-column'>
                        <h1 className='section-title'> Skills. </h1>
                    </div>
                    <div className='right-column-5'>
                        <h3 className='job-info-1'>
                            - React.js (familiar) <br></br>
                            - Node.js (limited)<br></br>
                            - HTML5 (familiar)<br></br>
                            - JavaScript (familiar)<br></br>
                            - CSS (familiar)<br></br>
                            - Python (limited)<br></br>
                            - Tableau (sufficient)<br></br>
                            - Shopify (sufficient)<br></br>
                            - Microsoft Suite (sufficient)<br></br>
                            - Photoshop (sufficient)<br></br>
                        </h3>
                    </div>
                </div>
            </div>
            <div className='resume-link-container'>
                <div className='resume-link-text'> View The PDF Version of my Resume </div>
                <Link to= {ResumeLink} className='resume-link'> Here </Link>
            </div>
            <Footer />
        </div>
    );
}