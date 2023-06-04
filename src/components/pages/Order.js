import React from 'react'
import { Routes, Route, Link, Outlet} from 'react-router-dom'
import Cakes from './Categories pages/Cakes/Cakes'

function Order() {
  return (
    <>
      <nav className='container nav'>
        <Link to="cakes">Торти</Link>
        <Link to="cupcakes">Капкейки</Link>
        <Link to="macarons">Макаруни</Link>
        <Link to="pastry">Тістечка</Link>
      </nav>
      
      <Outlet />
    </>
  )
}


export default Order
