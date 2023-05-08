import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-head'>
        <div className='footer-logo'>~ Кондитерські<br />вироби ~</div>

        <div className='categories'>
          <h3 className='h3-footer'>Категорії</h3>
          <ul className='categories-list'>
            <li className='li-item'>
              <a>Торти</a></li>
            <li className='li-item'>Капкейки</li>
            <li className='li-item'>Макаруни</li>
            <li className='li-item'>Тістечка</li>
          </ul>
        </div>

        <div className='footer-contacts'>
          <h3 className='h3-footer'>Контакти</h3>
          <div className='footer-contact'>
            <img alt='' className='contact-icon'></img>
            <p className='contact-info'>Пн-Нд | 9.00-18.00</p>
          </div>
          <div className='footer-contact'>
            <img alt='' className='contact-icon'></img>
            <p className='contact-info'>+380938787156</p>
          </div>
          <div className='footer-contact'>
            <img alt='' className='contact-icon'></img>
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