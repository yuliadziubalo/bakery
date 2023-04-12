import React from 'react'
import './Contacts.css'
import Button from '../Button/Button'

function Contacts() {
  return (
    <div className='container contacts'>
      <h1> Контакти </h1>
      <div className='contacts-cards'>
        <div className='card'>
          <img alt='logo' className='img-card'></img>
          <p className='p-card'>м. Львів</p>
        </div>
        <div className='card'>
          <img alt='logo' className='img-card'></img>
          <p className='p-card'>+380938787156</p>
        </div>
        <div className='card'>
          <img alt='logo' className='img-card'></img>
          <p className='p-card'>Електронна пошта</p>
        </div>
      </div>

      <form className='form'>
        <p className='form-header'>Форма зв'язку</p>
        <input className='form-input' placeholder="Ім'я"></input>
        <input className='form-input' placeholder="Електронна пошта"></input>
        <input className='form-input' placeholder="Телефон"></input>
        <textarea placeholder="Повідомлення"></textarea>
        <Button />
      </form>
    </div>
  )
}

export default Contacts