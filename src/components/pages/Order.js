import React from 'react'

function Order() {
  return (
    <nav className='container nav'>
        
        <ul>
            <CustomLink href="order/cake">Торти</CustomLink>
            <CustomLink href="">Капкейки</CustomLink>
            <CustomLink href="">Макаруни</CustomLink>
            <CustomLink href="">Тістечка</CustomLink>
        </ul>
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

export default Order
