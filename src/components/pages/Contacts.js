import React from 'react'
import { FaHome, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import './Contacts.css'
import Button from '../Button/Button'

function Contacts() {
  return (
    <div className='container contacts'>
      <h1 className='h1-contacts'> Контакти </h1>

      <div className='test'>
      <div className='contacts-cards'>
        <div className='card'>
          <FaHome size='3rem'/>
          <p className='p-card'>м. Львів</p>
        </div>
        <div className='card'>
          <FaPhoneAlt size='3rem'/>
          <p className='p-card'>+38 (093) 87 87 878</p>
        </div>
        <div className='card'>
          <FaEnvelope size='3rem'/>
          <p className='p-card'>Електронна пошта</p>
        </div>
      </div>

      <form className='form' action="https://formsubmit.co/y.dziubalo@nltu.lviv.ua
" method="POST">
        <p className='form-header'>Форма зв'язку</p>
        <input className='form-input' type="text" name="name" placeholder="Ім'я" required></input>
        <input className='form-input' type="email" name="email" placeholder="Електронна пошта" required></input>
        <input className='form-input' type="number" name="telephone" placeholder="Телефон" required></input>
        <textarea placeholder="Повідомлення" required></textarea>
        <Button text="НАДІСЛАТИ"/>
      </form>
      </div>
    </div>
  )
}
//<button type="submit">Send</button>

/*
<input type="hidden" name="_captcha" value="false">
<input type="hidden" name="_subject" value="Нове повідомлення">
<input type="hidden" name="_next" value="http://kondyterska.onlinewebshop.net/index.html">
*/

export default Contacts