import React from 'react'
import './Assortment.css'
import ACard from './ACard/ACard'

function Assortment() {
  return (
    <div className='container assortment'>
        <h2>Lorem ipsum</h2>
        <div className='assortment-cards'>
            <ACard />
            <ACard />
            <ACard />
            <ACard />
        </div>
    </div>
  )
}

export default Assortment