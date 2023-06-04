import React, { useEffect, useState } from 'react'
import ProductCard from '../../../Cart/ProductCard'
import '../Cakes/Cakes.css'
import axios from 'axios'
import products from "../../../../productData"

function Cakes() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/macarons");
        setItem(res.data);
      } catch (err) {
      }
    };
    fetchAllItems();
  }, []);

  return ( 
    <div className='container cakes'>
      <h1 className='h1-cakes'>Макаруни</h1>
      <div className='centered'>
      <div className='cakes-cards'>
        {items.map(item => ( 
        <div className='cakes-card'>
          <ProductCard id ={item.id} 
          name = {item.name} 
          weight = {item.weight} 
          price = {item.price} 
          ph={products[2][item.id]}/>
        </div>
        ))}
        </div>
      </div>
    </div>
  ); 
} 

export default Cakes
