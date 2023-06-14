import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { getCartTotal } from "../features/cartSlice"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <nav className='container nav'>
      <div className='a-logo'>~ Кондитерські <br /> вироби ~</div>
      <ul className={isMobile? "nav-links-mob" : "nav-links"}
      onClick={() => setIsMobile(false)}>
        <CustomLink to="/">Головна</CustomLink>
        <CustomLink to="/order">Замовлення</CustomLink>
        <CustomLink to="/contacts">Контакти</CustomLink>
        <CustomLink to="/about">Про нас</CustomLink>
        <CustomLink  to="/cart"><FaShoppingCart /><span className="c">{totalQuantity}</span></CustomLink>
      </ul>

      <button className="burger-icon"
      onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (<FaTimes/>):(<FaBars/>)}
      </button>
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