import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../Button/Button';
import '../../reset.css'
import './Header.css'

const Header = () => {
    return (
        <div className='container head'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p className='header-descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <Button />
        </div>
    )
}

export default Header;