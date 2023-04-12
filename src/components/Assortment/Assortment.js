import React from 'react'
import './Assortment.css'
import ACard from './ACard/ACard'

function Assortment() {
  return (
    <div className='container assortment'>
        <h2>Категорії</h2>
        <div className='assortment-cards'>
            <ACard category="Торти"/>
            <ACard category="Капкейки"/>
            <ACard category="Макаруни"/>
            <ACard category="Тістечка"/>
        </div>
    </div>
  )
}

export default Assortment