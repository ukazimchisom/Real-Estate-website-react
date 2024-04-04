import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { Ellipse1, Ellipse2, Ellipse3, Ellipse4, Vector34, mind, Subtract } from '../../assets';
import './header.css';

function Header() {

  return (
    <div className='header' id='header'>
      <div className='header__contents-left'>

        <h1 className='gradient__text'>Helping People Get Their Dream Home.</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum, ex ac feugiat dui tortor </p>

        <div className='header__contents-left_buttons'>
          <div className='header__contents-left_button-1'>
            <button>View projects <FiArrowUpRight /></button>
          </div>
          <div className='header__contents-left_button-2'>
            <button>Buy Now <MdNavigateNext /></button>
          </div>
        </div>

        <div className="header__contents-left_reviews">
          <div className="header__contents-left_reviews-1">
            <div className="header__contents-Left_reviews-1_Truspilot">
              <MdStar />
              <h2>TrustPilot</h2>
            </div>
            <h5>Excellent 10,000+ reviews</h5>
            <div className='header__contents-left_reviews-stars'>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
          </div>

          <div className='header__contents-left_reviews-image'>
            <img src={Vector34} alt="" />
          </div>

          <div className="header__contents-left_reviews-2">
            <div className="header__contents-left_reviews-2_image">
              <img src={Ellipse1} alt="" />
              <img src={Ellipse2} alt="" />
              <img src={Ellipse3} alt="" />
              <img src={Ellipse4} alt="" />

              <h6>People Successfully got
                there dream house.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className='header__contents-right'>
        <div className='header__contents-right_image'>
          <img src={mind}  alt="" />
        </div>
      </div>

    </div>
  )
}

export default Header