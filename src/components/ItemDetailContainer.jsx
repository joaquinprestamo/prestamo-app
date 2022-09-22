import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "./loading/Loading";
import { useParams } from "react-router-dom";


const products = [
    {id:1, name:"Latte & Medialuna", description:"Latte + Medialuna + Jugo de Naranja", shortcut:"latte-medialuna-y-jugo-de-naranja", image:"promo-latte.jpg", price:650, stock:5, leches:["vacuna", "almendra", "soja"], categoria:"promociones" },
    {id:2, name:"Latte & Granola", description:"Latte + Copón de Granola con leche y frutas + Jugo de Naranja", shortcut:"latte-copon-de-granola-con-leche-y-frutas-y-jugo-de-naranja", image:"promo-granola.jpg", price:600, stock:5, leches:["vacuna", "almendra", "soja"], categoria:"promociones" },
    {id:3, name:"Latte & Tostada", description:"Latte + Tostada con Palta + Jugo de Naranja", shortcut:"latte-tostada-con-palta-y-jugo-de-naranja", image:"promo-tostada.jpg", price:600, stock:3, leches:["vacuna", "almendra", "soja"], categoria:"promociones" },
    {id:4, name:"Latte & Tostado", description:"Latte + Tostado de Jamón & Queso + Jugo de Naranja", shortcut:"latte-tostado-jamon-y-queso-y-jugo-de-naranja", image:"promo-tostado.jpg", price:650, stock:6, leches:["vacuna", "almendra", "soja"], categoria:"promociones" },
    {id:5, name:"Americano", description:"Café Americano", shortcut:"cafe-americano", image:"americano.jpeg", price:350, stock:60, categoria:"cafe" },
    {id:6, name:"Café con Leche", description:"Café con Leche", shortcut:"cafe-con-leche", image:"cafe-con-leche.jpeg", price:450, stock:60, leches:["vacuna", "almendra", "soja"], categoria:"cafe" },
    {id:7, name:"Cortado", description:"Café Cortado", shortcut:"cafe-cortado", image:"cafe-cortado.jpeg", price:300, stock:60, leches:["vacuna", "almendra", "soja"], categoria:"cafe" },
    {id:8, name:"Cappuccino", description:"Cappuccino", shortcut:"cappuccino", image:"cappuccino.jpeg", price:450, stock:60, leches:["vacuna", "almendra", "soja"], categoria:"cafe" },
    {id:9, name:"Laccao", description:"Chocolatada", shortcut:"laccao", image:"laccao.jpeg", price:400, stock:10, categoria:"cafe" },
    {id:10, name:"Latte Macchiatto", description:"Leche y Café Espresso", shortcut:"latte-macchiatto", image:"latte-macchiatto.jpeg", price:400, stock:60, leches:["vacuna", "almendra", "soja"], categoria:"cafe" },
    {id:11, name:"Ristretto", description:"Café Espresso Corto", shortcut:"ristretto", image:"ristretto.jpeg", price:300, stock:60, categoria:"cafe" },
];

export const ItemDetailContainer = ()=>{
    const {shortcut} = useParams();
    const [item,setItem] = useState([]);    
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const getItem = new Promise(resolve => {
            setTimeout(()=>{
                resolve(products);
                setLoading(true);
            }, 1000);
        });        
        getItem.then(res => {
            setItem(res.find(product => product.shortcut === shortcut));
            setLoading(false);
        });
    }, [shortcut]);

    return(
        <div className="container my-5">   
            {loading ? <Loading /> : <ItemDetail info = {item} />}             
        </div>
    );
};

export default ItemDetailContainer;