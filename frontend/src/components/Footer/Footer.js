import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaPhone, FaHome, FaClock } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-head'>
        <div className='footer-logo'>~ Кондитерські<br />вироби ~</div>

        <div className='categories'>
          <h3 className='h3-footer'>Категорії</h3>
          <ul className='categories-list'>
            <li className='li-item'>
              <Link to="/order/cakes">Торти</Link>
            </li>
            <li className='li-item'><Link to="/order/cupcakes">Капкейки</Link></li>
            <li className='li-item'><Link to="/order/macarons">Макаруни</Link></li>
            <li className='li-item'><Link to="/order/pastry">Тістечка</Link></li>
          </ul>
        </div>

        <div className='footer-contacts'>
          <h3 className='h3-footer'>Контакти</h3>
          <div className='footer-contact'>
            <FaClock></FaClock>
            <p className='contact-info'>Пн-Нд | 9.00-18.00</p>
          </div>
          <div className='footer-contact'>
            <FaPhone></FaPhone>
            <p className='contact-info'>+38 (093) 87 87 878</p>
          </div>
          <div className='footer-contact'>
            <FaHome></FaHome>
            <p className='contact-info'>м. Львів</p>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        @ Yuliia Dziubalo | 2022
      </div>
    </footer>
  )
}

export default Footer