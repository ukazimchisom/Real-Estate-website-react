import React from 'react'
import {social} from '../../assets';
import './teamFeatures.css';

function TeamFeatures({imgUrl, name, position }) {
  return (
    <div className='teamFeatures__container'>
      <div className='teamFeatures__container-image'>
        <img src={imgUrl} alt="" />
      </div>
      <h5>{name}</h5>
      <p>{position}</p>
      <img src={social} alt="" />
    </div>
  )
}

export default TeamFeatures