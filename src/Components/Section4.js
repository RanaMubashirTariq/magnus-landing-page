import React from 'react'
import './Section4.css';
import Section4_Part2 from './Section4_Part2';

export default function Section4() {
  return (
    <div className='section4-main-container'>
             <div className='section4-upper-container'>
                     <div className='section4-inner-upper-container'>
                             <div className='section4-container-tag'><p>🎯  Coming Soon</p></div>
                              <h3>More stuff coming soon!</h3>
                              <p>Magnus is your gateway to wealth education and growth. Coming soon: advanced analytics, real-time alerts, and personalized investment strategies to help you maximize your crypto portfolio's potential.</p>
                     </div>

                     <div className='menu-link-bar'>
                        <div className='same-div-tag'><p>Trading dashboard</p></div>
                        <div className='same-div-tag'><p>Mining bots</p></div>
                        <div className='same-div-tag'><p>Rewards</p></div>
                        <div className='same-div-tag'><p>Streaks</p></div>
                        <div className='same-div-tag'><p>5 level referrals</p></div>
                  </div>
             </div>

             <Section4_Part2/>
    </div>
  )
}
