import React, { useEffect, useState } from 'react'
import ProductCard from '../../../Cart/ProductCard'
import '../Cakes/Cakes.css'
import axios from 'axios'
import products from "../../../../productData"

function Pastry() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/pastry");
        setItem(res.data);
      } catch (err) {
      }
    };
    fetchAllItems();
  }, []);

  return ( 
    <div className='container cakes'>
      <h1 className='h1-cakes'>Тістечка</h1>
      <div className='centered'>
      <div className='cakes-cards'>
        {items.map(item => ( 
        <div className='cakes-card'>
          <ProductCard id ={item.id} 
          name = {item.name} 
          weight = {item.weight} 
          price = {item.price} 
          ph={products[3][item.id]}/>
        </div>
        ))}
        </div>
      </div>
    </div>
  ); 
} 

export default Pastry