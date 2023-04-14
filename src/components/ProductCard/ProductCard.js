import React from 'react'
import Button from '../Button/Button'
import './ProductCard.css'

function ProductCard({...props}) {
  return (
    <div className='productCard'>
         <img className='img-product' src={props.src} alt={props.alt}></img>
         <p className='card-description'>Lorem ipsum</p>
         <Button text='ЗАМОВИТИ'></Button>
    </div>
  )
}

export default ProductCard