import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../pages/Main';
import Order from '../pages/Order';
import Adress from '../pages/Adress';
import Footer from '../Footer/Footer';

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
            component = <Adress />
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