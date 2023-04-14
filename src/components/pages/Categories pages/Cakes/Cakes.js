import React from 'react'
import img1 from '../../../../images/main page/cake.jpg'
import ProductCard from '../../../ProductCard/ProductCard'
import './Cakes.css'

function Cakes() {
  return (
    <div className='container cakes'>
      <ProductCard alt="all" src={img1}/>
      <ProductCard alt="all" src={img1}/>
      <ProductCard alt="all" src={img1}/>
      <ProductCard alt="all" src={img1}/>
    </div>
  )
}

export default Cakes