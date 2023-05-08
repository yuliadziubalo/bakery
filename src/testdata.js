import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
 
function MyComponent() { 
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
 
export default MyComponent; 