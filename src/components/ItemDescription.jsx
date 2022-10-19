import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";


const ItemDescription = ({info})=>{
    const {sumTotal, removeItem, modifyItem} = useContext(CartContext);

    const subtotal = info.price * info.count;

    // useEffect(() => {
    //     sumTotal(subtotal);
    // }, [])

    const eliminarItem = (id, subtotal)=>{
        removeItem(id, subtotal);
    }   
    
    const modificarItem = (subtotal)=>{
        modifyItem(subtotal)
    }

    return(
        <div className="col-12 d-flex mb-4">
            <div className="col d-flex">
                <img src={"../assets/images/shop/" + info.image} alt={info.name} className="description-pic mb-0" />
                <div className="ms-3">
                    <h6 className="fw-bold">{info.name}</h6>
                    <p className="mb-0"><small>Cantidad: {info.count}</small></p>
                    <p className="mb-0"><small>Precio unitario: $ {info.price}</small></p>
                    <Link to={`/producto/${info.id}`} onClick={()=> modificarItem(subtotal, info.count)}>Modificar</Link>
                </div>
            </div>
            <div className="text-end">
                <p className="mb-0"><strong>Subtotal:</strong> $ {subtotal}</p>
                <button onClick={()=> eliminarItem(info.id, subtotal, info.count)}  className="btn btnDelete fs-8 mt-2 text-center">Eliminar</button>
            </div>
        </div>
    );
}

export default ItemDescription;