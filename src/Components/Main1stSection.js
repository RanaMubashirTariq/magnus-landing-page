import React from 'react'
import './Main1stSection.css';
import RateLabelSection from './RateLabelSection'
import MarqueeLabel from './MarqueeLabel'


export default function Main1stSection() {
  return (
       <div>
    <div className='main-1st-section-container'>
          <div className="main-1st-section-right-div">
                <div className="main-1st-section-right-top-d">
                    <div className='first-logo-part'><p>🔥 Magnus Capital - The Future</p></div>
                      <h1>Your gateway to wealth education and growth</h1>
                      <p>Learn, preserve, and grow your wealth with Magnus Capital’s expert-led courses and in-depth market insights</p>
                </div>


                <div className="main-1st-section-right-bottom-div">
                    <div className='two-icons'> 
                    <div className='icon'><a href="/"><img src="/Pictures/apple.svg" alt='apple-logo' /></a></div>
                    <div className='icon'><a href="/"><img src="/Pictures/andriod.svg" alt='andriod-logo'/></a></div>
                    </div>
                    
                    <div className='icon-telegram'>
                        <a href=""><img src="/Pictures/telegram.svg" alt="" />
                        <p>Open app in Telegram</p>
                        </a>
                    </div>
                </div>
          </div>


          <div className='main-1st-section-left-div'>
            <img src="/Pictures/main1stSectionLeft-div.svg" alt="" />
          </div>
    </div>

            <RateLabelSection/>
            <MarqueeLabel/>
    </div> 
  )
}