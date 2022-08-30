import React from "react";
import AddCart from "./AddCart";
import ItemCount from "./ItemCount";

const ItemListContainer = (props)=>{
    return(
        <div className="col-xl-3 col-lg-4 col-6 mb-3">
            <div className="shop-card h-100">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <img src={"./assets/images/shop/" + props.image} alt="..." className="shop-pic mb-3" />
                <div className="shop-info">
                    <div className="shop-price">{props.price}</div>
                </div>
                <ItemCount stock={props.stock} />
                <AddCart />
            </div>
        </div>
    );
}

export default ItemListContainer;