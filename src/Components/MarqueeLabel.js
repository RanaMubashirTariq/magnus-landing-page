import React from 'react'
import './MarqeeLabel.css';

export default function MarqueeLabel() {
  return (
    <div className='marquee-main-container'>
          <div className='marwee-label-container-div'>
               <div className='marquee-tag'><p>🍻  Our Partners</p></div>
                    <div className='marquee-heading-div'>
                          <h2>Built on Leading Technologies</h2>
                          <p>Powered by the most trusted blockchains and platforms in the industry.</p>
                    </div>

                     <div className='marquee-container-div'>
                          <marquee direction='left' scrollamount='10' >
                                <img src='/Pictures/Tron.svg'/>
                                <img src='/Pictures/Solana.svg'/>
                                <img src='/Pictures/BnbChain.svg'/>
                                <img src='/Pictures/Polygon.svg'/>
                                <img src='/Pictures/Avalanche.svg'/>
                                <img src='/Pictures/Etherum.svg'/>
                            </marquee>

                     </div> 
          </div>   
    </div>
  )
}