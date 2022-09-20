import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const AddCart = (item)=>{
    //console.log(item);
    const {addToCart} = useContext(CartContext);
    const [goToCart, setGoToCart] = useState(false);
    function addItem(){
        addToCart(item);    
        setGoToCart(true);
    }

    return(
        <div className="text-center mb-3">
            {(goToCart)? 
            <Link to={`/cart`} className="shop-button w-100">Ir al carrito</Link> :
            <button className="shop-button w-100" onClick={()=> addItem()}>Agregar al carrito</button>
            }
        </div>
    );
}

export default AddCart;