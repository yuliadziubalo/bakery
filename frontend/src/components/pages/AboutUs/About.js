import React from 'react'
import './About.css'

function About() {
  return (
    <div className='container about'>
      <div className='aboutUs'>
        <div className='section'>
          <div className='info'>Ласкаво просимо на сайт нашої кондитерської! Ми раді, що ви знайшли нас і можемо поділитися з вами нашими солодощами.
            Наша кондитерська пропонує великий асортимент десертів, з урахуванням вашого смаку та побажань. У нашому асортименті ви знайдете все, від традиційних кремових тістечок до ексклюзивних тортів.
          </div>
          <div className='info-img-box'>
            <img className='info-img' src="/images/771-693824866.jpg" alt='info'></img>
          </div>
        </div>

        <div className='section'>
          <div className='info-img-box'>
            <img className='info-img' src="/images/44707930_1888730311181519_6839603520434339840_o.jpg" alt='info'></img>
          </div>
          <div className='info'>Ми завжди використовуємо найсвіжіші та якісні інгредієнти, щоб зробити кожен десерт найсмачнішим для наших клієнтів. Наша команда професійних кондитерів майструє кожен десерт з любов'ю та увагою до деталей, щоб створити досконалий смаковий досвід для клієнтів.
          </div>
        </div>

        <div className='section'>
          <div className='info'>Ми пропонуємо індивідуальне замовлення та додаткові послуги, такі як гарна упаковка та доставка на подію чи святкування. Ми завжди готові допомогти в організації будь-якої події
          </div>
          <div className='info-img-box'>
            <img className='info-img' src="/images/f55662362426cec7ef9c555e5758c9f8_646cb6bbbfa0d.jpg" alt='info'></img>
          </div>
        </div>

        <div className='thank'>Дякуємо за те, що ви обрали нас! Будь ласка, зверніться до нас зі своїми запитами та питаннями, ми завжди раді допомогти Вам.</div>
      </div>
    </div>
  )
}

export default About