import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

export default function App(){
  return(
    <div>      
      <BrowserRouter>
        <NavBar title="tender" description="cafetería" />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/producto/:shortcut' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
};
