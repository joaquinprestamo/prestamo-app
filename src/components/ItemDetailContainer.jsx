import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const product = {id:1, name:"Latte & Medialuna", description:"Latte + Medialuna + Jugo de Naranja", image:"promo-latte.jpg", price:650, stock:5, leches:["vacuna", "almendra", "soja"] };

export const ItemDetailContainer = ()=>{
    const [item,setItem] = useState([]);
    useEffect(()=>{
        const getItem = new Promise(resolve => {
            setTimeout(()=>{
                resolve(product);
            }, 2000);
        });
        getItem.then(res => setItem(res));
    }, []);

    return(
        <div className="container my-5">    
            <ItemDetail info = {item} />
        </div>
    );
};

export default ItemDetailContainer;