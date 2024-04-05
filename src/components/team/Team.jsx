import React from 'react'
import TeamFeatures from '../../containers/teamFeatures/TeamFeatures';
import { team1, team2, team3, team4 } from '../../assets';
import './team.css'

function Team() {
  return (
    <div className='teams__container' id='team'>
      <h3>Our Team</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum, ex ac feugiat dictum, dui tortor consectetur enim,</p>
      <div className='teams__container_teamFeatures-container'>
        <TeamFeatures imgUrl={team1} name='Ralph Edwards' position='sr. Backend Developer' />
        
        <TeamFeatures imgUrl={team2} name='Ralph Edwards' position='sr. Backend Developer' />

        <TeamFeatures imgUrl={team3} name='Ralph Edwards' position='sr. Backend Developer' />

        <TeamFeatures imgUrl={team4} name='Ralph Edwards' position='sr. Backend Developer' />
      </div>
    </div>
  )
}

export default Team