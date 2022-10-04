import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/cartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function App(){
  return(
    <div>   
      <CartProvider>
        <BrowserRouter>
          <NavBar title="Buen Ayre" description="cafetería" />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/producto/:shortcut' element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>  
    </div>
  )
};
