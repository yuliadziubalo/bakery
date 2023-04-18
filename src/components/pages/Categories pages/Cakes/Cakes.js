import React from 'react'
import img1 from '../../../../images/main page/cake.jpg'
import ProductCard from '../../../ProductCard/ProductCard'
import './Cakes.css'

function Cakes() {
  return (
    <div className='container cakes'>
      <h1 className='h1-cakes'>Торти</h1>
      <div className='cakes-cards'>
        <ProductCard alt="all" src={img1}/>
        <ProductCard alt="all" src={img1}/>
        <ProductCard alt="all" src={img1}/>
        <ProductCard alt="all" src={img1}/>
        <ProductCard alt="all" src={img1}/>
        <ProductCard alt="all" src={img1}/>
        <ProductCard alt="all" src={img1}/>
      </div>
      
    </div>
  )
}

export default Cakes