import React from 'react'
import './Section5.css';
export default function Section5() {
  return (
    <div className='section5-main-container'>
              <div className='section5-upper-div'>
                      <div className='section5-container-tag'><p>💼  Briefs</p></div>
                      <h3>Learn, Earn, Engage, Grow Wealth</h3>
                      <p>Magnus lets you learn, earn, and grow wealth with expert tools and insights, all in one platform.</p>
              </div>


               {/* Second part */}
                  
                  <div className="section5-below-div">
                      <div className="section5-below-right-div">
                         <div className='section5-below-right-inner-div'>
                             <h3>Professional Market Reports</h3>
                             <p>Stay informed with Magnus Capital's market reports. Our experts provide tailored insights to help you navigate the financial landscape and make empowered investment decisions.</p>
                         </div>
                         <div className='section-below-pic-div'><img src="/Pictures/section5-right.svg"/></div>
                      </div>

                      <div className="section5-below-left-div">
                         <div className='section5-below-right-inner-div'>
                             <h3>Comprehensive Wealth Education</h3>
                             <p>Magnus Capital offers comprehensive wealth education courses. Learn at your own pace with interactive modules designed to build your financial knowledge and confidence. Take control of your financial future today.</p>
                         </div>
                         <div className='section-below-pic-div'><img src="/Pictures/section5-left.svg"/></div>
                      </div>
                  </div>

    </div>
  )
}
