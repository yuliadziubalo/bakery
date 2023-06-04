import React from 'react'
import './Assortment.css'
import ACard from './ACard/ACard'

function Assortment() {
  return (
    <div className='container assortment'>
        <h2>Продукція</h2>
        <div className='assortment-cards'>
            <ACard category="Торти" src={"images/main page/cake.jpg"}/>
            <ACard category="Капкейки" src={"images/main page/cupcakes.jpg"}/>
            <ACard category="Макаруни" src={"images/main page/macarons.jpg"}/>
            <ACard category="Тістечка" src={"images/main page/pastry.jpg"}/>
        </div>
    </div>
  )
}

export default Assortment