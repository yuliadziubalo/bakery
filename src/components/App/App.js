import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Main from '../pages/Main'
import Order from '../pages/Order'
import Cakes from '../pages/Categories pages/Cakes/Cakes';
import Contacts from '../pages/Contacts';
import MyComponent from '../../testdata';
import { Route, Routes } from 'react-router-dom';

import '../../reset.css'
import './main.css'

//import Navbar from "./components/Navbar";
import ProductCard from "../Cart/ProductCard"
import CartPage from "../Cart/cartPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="order" element={<Order />}>
                    <Route path='' element={<Cakes />} />
                    <Route path='cake' element={<Cakes />} />
                </Route>
                <Route path="contacts" element={<Contacts />} />
                <Route path="cart" element={<CartPage />} />
            </Routes>
            <Footer />

            <Cakes/>
        </>
    )
}

export default App;

/*<Routes>
                <Route exact path="/" element={<ProductCard />} />
                
            </Routes>*/