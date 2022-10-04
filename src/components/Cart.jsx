import React from "react";

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import ItemDescription from "./ItemDescription";

const Cart = ()=>{
    const {cart, total, sumTotal, deleteCart} = useContext(CartContext); 
    useEffect(()=>{
        sumTotal();
    },[total]);

    return(
        <div className="container my-5">
            {(cart.length > 0) ? 
                <>                    
                    {cart.map((item)=>{
                        return(
                            <>
                                <ItemDescription info={item} key={item.id} />                                                  
                            </>
                        )
                    })}  
                    <h4 className="text-end fw-bold fs-5">Total: $ {total} </h4>
                    <div className="text-end fw-bold">
                        <button onClick={()=>{ deleteCart()}} className="fs-8 btn btnDelete">Vaciar carrito</button>      
                    </div>        
                </>
            : 
                <h2 className="fw-bold">
                    No hay productos en el carrito aún
                </h2>
            }  

            <Link to="/" className="mt-5 fs-8 shop-button text-center">Seguir comprando</Link>
            <Link to="/checkout" className="mt-5 fs-8 shop-button text-center">Terminar compra</Link>  
        </div>
    );
}

export default Cart;