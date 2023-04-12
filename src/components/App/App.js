import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../pages/Main';
import Order from '../pages/Order';
import Footer from '../Footer/Footer';
import Contacts from '../pages/Contacts';

function App() {
    let component
    switch(window.location.pathname){
        case "/":
            component = <Main />
            break
        case "/order":
            component = <Order/>
            break
        case "/adress":
            component = <Contacts />
            break
    }
    return (
        <>
            <Navbar />
            {component}
            <Footer />
        </>
    )
}

export default App;