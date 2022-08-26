import React from "react";

const ItemListContainer = (props)=>{
    return(
        <div className="col-xl-3 col-md-3 col-6">
            <div className="shop-card">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <img src={"./assets/images/shop/" + props.image} alt="..." className="shop-pic mb-3" />
                <div className="shop-info">
                    <div className="shop-price">{props.price}</div>
                    <a href="#" className="shop-button">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;