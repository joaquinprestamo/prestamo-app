import React from "react";
import { Link } from "react-router-dom";

const AddCart = ()=>{
    return(
        <div className="text-center mb-3">
            <Link to={`/cart`} className="shop-button w-100">Agregar al carrito</Link>
        </div>
    );
}

export default AddCart;