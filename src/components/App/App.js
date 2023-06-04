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
import Cupcakes from '../pages/Categories pages/Cupcakes/Cupcakes';
import Macarons from '../pages/Categories pages/Macarons/Macarons';
import Pastry from '../pages/Categories pages/Pastry/Pastry';
import About from '../pages/AboutUs/About';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="order" element={<Order />}>
                    <Route path='' element={<Cakes />} />
                    <Route path='cakes' element={<Cakes />} />
                    <Route path='cupcakes' element={<Cupcakes/>} />
                    <Route path='macarons' element={<Macarons/>} />
                    <Route path='pastry' element={<Pastry/>} />
                </Route>
                <Route path="contacts" element={<Contacts />} />
                <Route path="about" element={<About/>} />
                <Route path="cart" element={<CartPage />} />
            </Routes>
            <Footer />

        </>
    )
}

export default App;

/*<Routes>
                <Route exact path="/" element={<ProductCard />} />
                
            </Routes>*/