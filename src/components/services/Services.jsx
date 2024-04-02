import React from 'react'
import Cards from '../../containers/cards/Cards'
import { service1, service2, service3, service4, netflix, visa1, visa2, zoom } from '../../assets';
import './services.css'

function Services() {
  return (
    <div className='services__container' id='services'>
      <h3>Profesional <span>Service</span>.</h3>
      <h4>Proven Results.</h4>
      <div className='services__container-service1_cards-containers'>

        <Cards imgUrl={service1} title="Find Your Dream Home" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <Cards imgUrl={service2} title="Best Quality Guarantee" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <Cards imgUrl={service3} title="100% Safe Transaction" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <Cards imgUrl={service4} title="Low Cost on Taxes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

      </div>

      <div className='services__container-service2-container'>

        <img src={netflix} alt="" />
        <img src={zoom} alt="" />
        <img src={visa2} alt="" />
        <img src={visa1} alt="" />

      </div>

    </div>
  )
}

export default Services