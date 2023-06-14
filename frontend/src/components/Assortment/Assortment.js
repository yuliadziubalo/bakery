import React from 'react'
import './Assortment.css'
import ACard from './ACard/ACard'

function Assortment() {
  return (
    <div className='container assortment'>
        <h2>Продукція</h2>
        <div className='assortment-cards'>
            <ACard category="Торти" a="order/cakes" src={"images/main page/cake.jpg"}/>
            <ACard category="Капкейки" a="/order/cupcakes" src={"images/main page/cupcakes.jpg"}/>
            <ACard category="Макаруни" a="/order/macarons"src={"images/main page/macarons.jpg"}/>
            <ACard category="Тістечка" a="/order/pastry" src={"images/main page/pastry.jpg"}/>
        </div>
    </div>
  )
}

export default Assortment