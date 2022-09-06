import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";


const products = [
    {id:1, name:"Latte & Medialuna", description:"Latte + Medialuna + Jugo de Naranja", image:"promo-latte.jpg", price:650, stock:5 },
    {id:2, name:"Latte & Granola", description:"Latte + Copón de Granola con leche y frutas + Jugo de Naranja", image:"promo-granola.jpg", price:600, stock:5 },
    {id:3, name:"Latte & Tostada", description:"Latte + Tostada con Palta + Jugo de Naranja", image:"promo-tostada.jpg", price:600, stock:3 },
    {id:4, name:"Latte & Tostado", description:"Latte + Tostado de Jamón & Queso + Jugo de Naranja", image:"promo-tostado.jpg", price:650, stock:6 },
];

export const ItemListContainer = ()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const getItems = new Promise(resolve => {
            setTimeout(()=>{
                resolve(products);
            }, 2000);
        });
        getItems.then(res => setItems(res));
    }, []);

    return(
        <div className="container my-5">    
            <ItemList allItems={items} />
        </div>
    );
};

export default ItemListContainer;