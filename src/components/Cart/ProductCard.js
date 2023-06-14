import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Button from "../Button/Button";
import './ProductCard.css'

import products from "../../productData.js"
import { Link } from "react-router-dom";
import Description from "../Description/Description";

export default function ProductCard({...props}) {

  function Descrip() {
    <Description></Description>
  }

  const dispatch = useDispatch();
  let url = `../../images/products/${props.ph}`;
  return (
    <div className="productCards">
      <div className='card-link' to="cart" onClick={Descrip}></div>
        <div className='productCard' key={props.id} size="">
          <img className='img-product' src={url} alt="cake"/>
          <div className='card-description'>
            <p className="card-title">{props.name}</p>
            <p className='card-weight'>{props.weight} </p>
            <p className="card-price">{props.price} ГРН</p>
          </div>
          
          <div className="div-btn">
            <button className="btn" onClick={() => dispatch(addToCart(  {
              id: props.id,
              name: props.name,
              weight: props.weight,
              price: props.price,
              img: url,
              quantity: 1, 
              }))}>Додати</button>
          </div>

        </div>
    </div>
  );
}

//`images/products/${props.ph}`

//<img src={item.img} position="top" alt="..." />
//<img className='img-product' src={`data:image/png;base64, ${props.ph}`}/>
//<img className='img-product' src={require(`'${url}'`) } alt="cake"/>
    /*<div className="productCards">
      {items.map((item) => (
        <div className='productCard' key={item.id} size="">
          <img className='img-product' src={item.img}></img>
          <div className='card-description'>
            <p className="card-title">{item.title}</p>
            <p className='card-weight'>{item.price} кг</p>
            <p className="card-price">{item.price} ГРН</p>
          </div>
          
          <div className="div-btn">
            <button className="btn" onClick={() => dispatch(addToCart(item))}>Додати</button>
          </div>
        </div>
      ))}
    </div>*/