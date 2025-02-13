import React from 'react'
import './Section3.css';
import Section3_Part2 from './Section3_Part2';
 
export default function Section3() {
  return (
    <div className='section3-main-container'>
            <div className="section3-upper-part">
                 <div className='section3-upper-inner-uper-div'>
                       <div className='section3-container-tag'><p>💡  Features</p></div>
                        <h3>Comprehensive Wealth Education & Growth at Your Fingertips</h3>
                        <p>Learn from the Best in the Industry and Apply Knowledge to Preserve and Grow Your Wealth</p>
                 </div>
                  
                  <div className='menu-link-bar'>
                        <div className='same-div-tag'><p>Trading dashboard</p></div>
                        <div className='same-div-tag'><p>Mining bots</p></div>
                        <div className='same-div-tag'><p>Rewards</p></div>
                        <div className='same-div-tag'><p>Streaks</p></div>
                        <div className='same-div-tag'><p>5 level referrals</p></div>
                  </div>
            </div>
             
             <Section3_Part2/>

    </div>
  )
}
