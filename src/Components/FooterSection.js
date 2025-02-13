import React from 'react'
import './FooterSection.css';

export default function FooterSection() {
  return (
    <div className='footer-main-container'>
               <div className="footer-upper-container">
                      <div className="footer-right-container">
                          <div className='logo-pic-div'><img src="/Pictures/Logo.svg"/></div>
                          <div className='right-below-div'>
                               <div className='right-heading-div'><h3>Your gateway to wealth education & growth</h3></div>
                               <div className='right-icon-menu'>
                                    <div className='same-icon-div'><img src="/Pictures/apple.svg"/></div>
                                    <div className='same-icon-div'><img src="/Pictures/andriod.svg"/></div>
                                    <div className='same-icon-div'><img src="/Pictures/Telegramb.svg"/></div>
                               </div>
                          </div>
                      </div>


                      <div className="footer-left-container">
                          <div className='footer-left-heading-div'>
                                     <h3>Platform</h3>
                                <div className='menu-list-div'>
                                            <ul>
                                                <li>Magnus Explorer</li>
                                                <li>Magnus DEX</li>
                                                <li>Magnus Fund </li>
                                                <li>Magnus</li>
                                            </ul>
                                 </div>
                            </div>    

                             {/* second part  */}

                             <div className='footer-left-heading-div'>
                                     <h3>Company</h3>
                                <div className='menu-list-div'>
                                            <ul>
                                                <li>About Us</li>
                                                <li>Work With Us</li>
                                                <li>Blog & News</li>
                                            </ul>
                                 </div>
                            </div> 


                                {/* third part */}

                                <div className='footer-left-heading-div'>
                                     <h3>Legal</h3>
                                <div className='menu-list-div'>
                                            <ul>
                                                <li>Terms of Service</li>
                                                <li>Privacy Policy</li>
                                                <li>Cookies Policy</li>
                                                <li>MData Processing</li>
                                            </ul>
                                 </div>
                            </div> 
                      </div>
               </div>

               <div className='line'></div>



               <div className='footer-last-container'>
                    <div className='footer-last-right-div'><p>Copyright 2024 © Magnus</p></div>

                     <div className='footer-last-left-div'>
                        <ul>
                            <li>Insta</li>
                            <img src='/Pictures/dot.svg'/>
                            <li>FaceBook</li>
                            <img src='/Pictures/dot.svg'/>
                            <li>Twitter</li>
                            <img src='/Pictures/dot.svg'/>
                            <li>LinkedIn</li>
                            <img src='/Pictures/dot.svg'/>
                            <li>Discord</li>
                        </ul>
                     </div>
               </div>
    </div>
  )
}