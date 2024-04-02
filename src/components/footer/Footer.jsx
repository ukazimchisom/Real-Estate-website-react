import React from 'react';
import logo from '../../assets/logo.png';
import { social2 } from '../../assets';
import './footer.css';

function Footer() {
  return (
    <div className='footer__container' id='footer'>
      <div className='footer__container-left'>
        <div className='footer__container-left-logo'>
          <img src={logo} alt="logo" />
          <p>Land<span>M</span>ark</p>
        </div>
        <p>
          Follow us on all social
          media platforms
        </p>
        <img src={social2} alt="social icons" />
      </div>

      <div className='footer__container-middle'>
        <div className='footer__container-middle1'>
          <h6>Company</h6>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>

        <div className='footer__container-middle2'>
          <h6>Our services</h6>
          <p>Help center</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className='footer__container-right'>
        <h6>subscribe to our news letter</h6>
        <input type="text" placeholder='Enter your Email...' /><button>subscribe</button>
      </div>
      
    </div>
    
  )
}

export default Footer