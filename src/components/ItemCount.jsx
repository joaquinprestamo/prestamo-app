import React from "react";
import { useEffect, useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const ItemCount = ({item})=>{
    const {cart} = useContext(CartContext);
    const {addToCart} = useContext(CartContext);
    
    const [count, setCount] = useState(0);
    const [goToCart, setGoToCart] = useState(false);
    
    
    useEffect(() => {
        const existProduct = cart.filter(x=>x.id === item.id);
        // console.log(existProduct);
        if(existProduct.length !== 0){
            setCount(existProduct[0].count);
        }
    }, [])    
    
    function counter(type){
        if(!type && count > 0){
            setCount(count - 1);
        }else if(type && count < item.stock){
            setCount(count + 1);
        }else if(count === 0){
            setCount(count);
        }
    }
    
    const addProduct = {...item, count};

    function addItem(){
        if(count > 0){
            addToCart(addProduct);    
            setGoToCart(true);
        }
    }
    
    return (
        <>  
            <div className="col-12 d-flex justify-content-between mb-3 shopCounter my-2">
            {(!goToCart)?
                <>
                    <button className="col btnCount" onClick={()=> counter(false)}>-</button>
                    <input className="col text-center" value={count} />
                    <button className="col btnCount" onClick={()=> counter(true)}>+</button>
                </>
            :
                <p className="col text-center mb-0">
                    {count}
                </p>            
            }
            </div>
            {((count > 0) && goToCart)? 
                <Link to={`/cart`} className="shop-button w-100">Ir al carrito</Link> :
                <button className="shop-button w-100" onClick={()=> addItem()}>Agregar al carrito</button>
            }
        </>
    );
};

export default ItemCount;