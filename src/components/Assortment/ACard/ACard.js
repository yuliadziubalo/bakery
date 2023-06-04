import React from 'react'
import './ACard.css'

function ACard(props) {
  return (
    
    <div className='assort-card'>
        <div>
            <img className='assort-card-img' src={props.src}/>
        </div>
        <div className='assort-card-text'>{props.category}</div>
    </div>
  )
}

export default ACard