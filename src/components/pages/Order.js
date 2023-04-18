import React from 'react'
import { Routes, Route, Link, Outlet} from 'react-router-dom'
import Cakes from './Categories pages/Cakes/Cakes'

function Order() {
  return (
    <>
      <nav className='container nav'>
        <Link to="cake">Торти</Link>
      </nav>
      
      <Outlet />
    </>
  )
}


export default Order
