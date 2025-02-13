import React, { useState } from 'react'
import './Section6.css';

export default function Section6() {
         
    const [isHovered, setIsHovered] = useState(false);

    const handleHover =() =>{
      setIsHovered(!isHovered)
    }
      
  return (
    <div className='section6-main-container'>
          <div className="section6-right-div">
                <div className='section6-detail.div'>
                        <div className='section6-right-tag'><p>🤩  Testimonial</p></div>
                    <h3>Trusted by more than 30k+ people</h3>
                    <p>Here’s what our users had to say about Magnus Capital</p>
                </div>
                  <div className='section6-right-link-container'>
                     <div className='section6-link-div'
                     ><a href=""><i class="fa-solid fa-arrow-left"></i></a></div>
                     <div className='section6-link-div'
                     ><a href=''><i class="fa-solid fa-arrow-right"></i></a></div>
                  </div>
          </div>


            {/* second - part */} 
              <div className='section6-left-div'>
                   <div className='section6-left-para'><p>“</p></div>
                   <h3>Magnus Capital has helped me become a better trader and help me earn more money that I think I will never earn without Magnus.</h3>
                   <div className='section6-bottom-div'>
                       <div className='section6-bottom-pic'><img src="/pictures/section6-cricle.svg"/></div>
                       <div className='section-bottom-left-div'>
                        <h4>Jimmy Carter</h4>
                        <p>Anonymous Trader</p>
                       </div>
                   </div>
              </div>
    </div>
  )
}

