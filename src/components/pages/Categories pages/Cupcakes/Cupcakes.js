import React, { useEffect, useState } from 'react'
import ProductCard from '../../../Cart/ProductCard'
import '../Cakes/Cakes.css'
import axios from 'axios'
import products from "../../../../productData"

function Cupcakes() {
  const [cupcakes, setCupcakes] = useState([]);

  useEffect(() => {
    const fetchAllCupcakes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cupcakes");
        setCupcakes(res.data);
      } catch (err) {
        //console.log(err);
      }
    };
    fetchAllCupcakes();
  }, []);

  //console.log(cupcakes)
 
  return ( 
    <div className='container cakes'>
      <h1 className='h1-cakes'>Капкейки</h1>
      <div className='centered'>

      <div className='cakes-cards'>
        {cupcakes.map(item => ( 
        <div className='cakes-card'>
          <ProductCard id ={item.id} 
          name = {item.name} 
          weight = {item.weight} 
          price = {item.price} 
          ph={products[1][item.id]}/>
        </div>
        ))}
        </div>

      </div>
    </div>
  ); 
} 

export default Cupcakes


/*<div className='container cakes'>
      <h1 className='h1-cakes'>Торти</h1>
      <div className='cakes-cards'>
        <ProductCard />
      </div>
      
    </div>*/