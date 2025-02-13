import React, { useState } from 'react';
import './NavbarSection.css';

export default function NavbarSection() {
  const [isOpen , setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='navbar-main-container'>
      <div className='first-part'>
        <img src='/Pictures/Logo.svg' alt='Logo' />
      </div>
      

      <div className={`second-part ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <select name='features'>
              <option value='features'>Features</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
          </li>
          <li><a href='/'>Price</a></li>
          <li>
            <select name='company'>
              <option value='company'>Company</option>
              <option value='dev-soul'>Dev Soul</option>
              <option value='tc-skill'>TC Skill</option>
            </select>
          </li>
          <li><a href='/'>Developer</a></li>
        </ul>
      </div>
      

      <div className="third-part">
      <button className= 'btn1'    style={{
          backgroundColor: isHovered ? 'rgba(12, 13, 14, 1)' : 'white',
          color: isHovered ? 'white' : 'black',
          border: isHovered ? '1px solid rgba(12, 13, 14, 1)' : '1px solid rgba(241, 241, 241, 1)',
        }} onMouseEnter={handleHover} onMouseLeave={handleHover}> Login</button>


        
              <button    className="btn2" style={{  backgroundColor: isHovered ? 'white' : 'rgba(12, 13, 14, 1)',
                                                    color: isHovered ? 'black' : 'white',
                                                    border: isHovered ? '1px solid rgba(241, 241, 241, 1)' : '1px solid rgba(12, 13, 14, 1)',
                                                }}>  Add Funds</button>
                        <button className='menu-toggle' onClick={toggleMenu}>
                        <i class="fa-solid fa-bars"></i>
                        </button>
    </div>
    </div>
  );
}
