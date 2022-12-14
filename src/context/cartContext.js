import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const CartProvider = ({children})=>{
    const [cart,setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    
    const sumTotal = ()=>{
        if(cart){
            let sum = 0;
            cart.map(item => {
                console.log(item.price)
                sum += item.price*item.count
            })
            setTotal(sum);
        }else{
            setTotal(0);
        }
    }

    const modifyItem = (subtotal, subtotalItems)=>{
        setTotal(total - subtotal);
        setTotalItems(totalItems - subtotalItems);
    }

    const isInCart = (id)=>{
        const existProduct = cart.filter(x=>x.id === id);
        if(existProduct.length !== 0){
            return true;
        }else{
            return false;
        }
    };

    const addToCart = (item)=>{         
        if(isInCart(item.id)){
            const product = cart.find(producto => producto.id === item.id);
            product.count = item.count;
            setCart([...cart]); 
            setTotalItems(totalItems + item.count);
        }else{
            setCart([...cart, item]); 
        }  
        setTotalItems(totalItems + item.count);            
    }

    const removeItem = (id, subtotal, subtotalItems)=>{  
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);   
        setTotal(total - subtotal);
        setTotalItems(totalItems - subtotalItems);
    }

    const deleteCart = ()=>{
        setCart([]);
        setTotal(0);
        setTotalItems(0)
    }

    return(
        <CartContext.Provider value={{cart, total, sumTotal, addToCart, removeItem, modifyItem, deleteCart, totalItems}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

