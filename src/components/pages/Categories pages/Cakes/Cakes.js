import React, { useEffect, useState } from 'react'
import ProductCard from '../../../Cart/ProductCard'
import './Cakes.css'
import axios from 'axios'

function Cakes() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cakes");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
 
  return ( 
    <div> 
      {books.map(item => ( 
        <div key={item.id}> 
          <h2>{item.name}</h2> 
          <p>{item.weight}</p> 
        </div> 
      ))} 
    </div> 
  ); 
} 

export default Cakes


/*<div className='container cakes'>
      <h1 className='h1-cakes'>Торти</h1>
      <div className='cakes-cards'>
        <ProductCard />
      </div>
      
    </div>*/