import React, { useEffect, useState } from 'react'
import ProductCard from '../../../Cart/ProductCard'
import './Cakes.css'
import axios from 'axios'
import products from "../../../../productData"

function Cakes() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchAllCakes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cakes");
        setCakes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCakes();
  }, []);
 
  return ( 
    <div className='container cakes'>
      <h1 className='h1-cakes'>Торти</h1>

      <div className='category-description'>
      Ми також пропонуємо торти для різних святкових подій, таких як весілля, дні народження, ювілеї, випускні вечори та інші особливі події. Наші торти стануть справжньою окрасою будь-якого свята та подарують вам та вашим гостям незабутні емоції.
      </div>
      <div className='centered'>

      <div className='cakes-cards'>
        {cakes.map(item => ( 
        <div className='cakes-card'>
          <ProductCard id ={item.id} 
          name = {item.name} 
          weight = {item.weight} 
          price = {item.price} 
          ph={products[0][item.id]}/>
        </div>
        ))}
      </div>
      
      </div>
    </div>
  ); 
} 

export default Cakes
