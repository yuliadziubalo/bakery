import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../Button/Button';
import '../../reset.css'
import './Header.css'

const Header = () => {
    return (<>
        <div className='container head'>
            <h1>Солодкий світ ваших смаколиків: найкращі десерти та тістечка від нашої кондитерської</h1>
            <p className='header-descript'>
            У нас Ви можете замовити незабутні торти на святкові заходи, весільні торти, дитячі торти з улюбленими героями, або ж набори десертів для корпоративного заходу - наші майстри з радістю створять для Вас справжні шедеври печива та кондитерських виробів.
            <br /> Тож замовляйте тістечка та десерти від нашої кондитерської для своїх близьких та друзів, та насолоджуйтеся найкращими смаколиками від наших майстрів!
            </p>
        </div>

        <div className='scroll-bg'>
            
        </div>
        </>
    )
}

export default Header;