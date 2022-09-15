import React from "react";
import ItemCount from "./ItemCount";
import AddCart from "./AddCart";
import { Link } from "react-router-dom";
import Eye from "./svg/Eye";

const Item = (props)=>{
    const {info} = props;
    return (
        <div className="col-xl-3 col-lg-4 col-6 mb-3">
            <div className="shop-card h-100">
                <h1>{info.name}</h1>
                <p>{info.description}</p>
                <img src={"../assets/images/shop/" + info.image} alt="..." className="shop-pic mb-3" />
                <small className="mt-3 fs-9">{info.stock} Disponibles</small>
                <div className="shop-info">
                    <div className="shop-price">$ {info.price}</div>
                </div>
                <Link to={`/producto/${info.shortcut}`} className="my-2 fs-8 shop-button text-center"><span className="me-2">Ver más</span> <Eye /></Link>
            </div>
        </div>
    );
};

export default Item;