import React from 'react'
import './cards.css'


const Cards = ({imgUrl, title, text}) => {
  return (
    <div className='cards__service-container_cards'>
      <div className='cards__service-container_cards-image'>
        <img src={imgUrl} alt="" />
      </div>
      <div className='cards__service-container_cards-title'>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      
        
      



    </div>
  )
}

export default Cards