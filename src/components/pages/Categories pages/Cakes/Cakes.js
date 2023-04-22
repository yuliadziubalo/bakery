import React from 'react'
import ProductCard from '../../../Cart/ProductCard'
import './Cakes.css'

function Cakes() {
  return (
    <div className='container cakes'>
      <h1 className='h1-cakes'>Торти</h1>
      <div className='cakes-cards'>
        <ProductCard />
      </div>
      
    </div>
  )
}

export default Cakes