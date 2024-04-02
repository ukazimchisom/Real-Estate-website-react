import React from 'react';
import { LuBellRing } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { PiToolbox } from "react-icons/pi";
import { building1, building2 } from '../../assets';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className='aboutUs__container'>
      <div className='aboutUs__container-groupA'>

        <div className='aboutUs__container-groupA_image'>
          <img src={building2} alt="" />
        </div>
      </div>
      <div className='aboutUs__container-groupB'>
        <h5>About our Company</h5>
        <h4>We Are Offering The Best Real Estate Deals.</h4>
        <p>Lorem ipsum dolor sit amet is adipiscing elit. Aliquam rutrum, ex ac feugiat dictum, dui tortor consectetur enim, sed cursus lectus nunc sed enim. Aenean viverra molestie urna eget mollis.
        </p>
        <div className='aboutUs__container-groupB_buttons'>
          <button><LuBellRing /></button>
          <button><GoClock />
            24 H consultant</button>
          <button><PiToolbox /></button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs