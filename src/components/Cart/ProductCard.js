import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Button from "../Button/Button";
import './ProductCard.css'

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="productCards">
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
    </div>
  );
}
//<img src={item.img} position="top" alt="..." />