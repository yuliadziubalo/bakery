import React from 'react'
import '../../reset.css'
import './Navbar.css'
import cart from '../../images/icons/корзина.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='container nav'>
        
        <p className='a-logo'>~ Кондитерські <br/> вироби ~</p>
        <ul>
            <CustomLink to="/">Головна</CustomLink>
            <CustomLink to="/order">Замовлення</CustomLink>
            <CustomLink to="/contacts">Контакти</CustomLink>
            <CustomLink to="/time">Час роботи</CustomLink>
        </ul>
        <div className='phone'>093 878 71 56</div>
        <img alt='cart' height={33} width={38} src={cart}/>
        
    </nav>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar