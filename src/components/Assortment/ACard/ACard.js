import React from 'react'
import './ACard.css'
import chocolate from '../../../images/chocolate.png'

function ACard() {
  return (
    <div className='assort-card'>
        <div>
            <img className='assort-card-img' src={chocolate}/>
        </div>
        <div className='assort-card-text'>Lorem ipsum dolor sit amet</div>
    </div>
  )
}

export default ACard