import React from 'react'
import './ACard.css'
import { Link } from 'react-router-dom'

function ACard(props) {
  return (
    <div className='assort-card'>
        <Link className='link' to={props.a}></Link>
        <div>
            <img className='assort-card-img' src={props.src}/>
        </div>
        <div className='assort-card-text'>{props.category}</div>
    </div>
  )
}

export default ACard