import React from "react";
import ItemCount from "./ItemCount";
import AddCart from "./AddCart";

const Item = (props)=>{
    const {info} = props;
    return (
        <div className="col-xl-3 col-lg-4 col-6 mb-3">
            <div className="shop-card h-100">
                <h1>{info.name}</h1>
                <p>{info.description}</p>
                <img src={"./assets/images/shop/" + info.image} alt="..." className="shop-pic mb-3" />
                <small className="mt-3 fs-9">{info.stock} Disponibles</small>
                <div className="shop-info">
                    <div className="shop-price">$ {info.price}</div>
                </div>
                <ItemCount stock={info.stock} />
                <AddCart />
            </div>
        </div>
    );
};

export default Item;