import React from 'react'
import './Assortment.css'
import ACard from './ACard/ACard'
import cake from "../../images/main page/cake.jpg"
import cupcake from "../../images/main page/cupcakes.jpg"
import macaron from "../../images/main page/macarons.jpg"
import pastry from "../../images/main page/pastry.jpg"

function Assortment() {
  return (
    <div className='container assortment'>
        <h2>Продукція</h2>
        <div className='assortment-cards'>
            <ACard category="Торти" src={cake}/>
            <ACard category="Капкейки" src={cupcake}/>
            <ACard category="Макаруни" src={macaron}/>
            <ACard category="Тістечка" src={pastry}/>
        </div>
    </div>
  )
}

export default Assortment