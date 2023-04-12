import React from 'react'
import '../../reset.css'
import './Navbar.css'
import cart from '../../images/icons/корзина.png'

function Navbar() {
  return (
    <nav className='container nav'>
        
        <p className='a-logo'>~ Кондитерські <br/> вироби ~</p>
        <ul>
            <CustomLink href="/">Головна</CustomLink>
            <CustomLink href="/order">Замовлення</CustomLink>
            <CustomLink href="/adress">Контакти</CustomLink>
            <CustomLink href="/time">Час роботи</CustomLink>
        </ul>
        <div className='phone'>093 878 71 56</div>
        <img alt='cart' height={33} width={38} src={cart}/>
        
    </nav>
  )
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return (
        <li>
            <a className={path === href ? 'active' : ''} href={href} {...props}>{children}</a>
        </li>
    )
}

export default Navbar