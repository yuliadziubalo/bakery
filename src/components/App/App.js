import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../pages/Main';
import Order from '../pages/Order';
import Footer from '../Footer/Footer';
import Contacts from '../pages/Contacts';
import OrderMain from '../pages/OrderMain';
import Cakes from '../pages/Categories pages/Cakes/Cakes';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main /> }/>
                <Route path="order" element={<Order/> }>
                    <Route path='cake' element={<Cakes />} />
                </Route>
                <Route path="contacts" element={<Contacts /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App;