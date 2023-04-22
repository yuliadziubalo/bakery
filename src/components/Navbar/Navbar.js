import React, { useEffect } from "react";
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { getCartTotal } from "../features/cartSlice"

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <nav className='container nav'>
      <p className='a-logo'>~ Кондитерські <br /> вироби ~</p>
      <ul>
        <CustomLink to="/">Головна</CustomLink>
        <CustomLink to="/order">Замовлення</CustomLink>
        <CustomLink to="/contacts">Контакти</CustomLink>
        <CustomLink to="/time">Про нас</CustomLink>
        <CustomLink to="/cart"><FaShoppingCart />{totalQuantity}</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}


//