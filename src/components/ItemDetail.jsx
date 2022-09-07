import React from "react";
import ItemCount from "./ItemCount";
import AddCart from "./AddCart";

const ItemDetail = ({info})=>{
    return (
        <div className="col-12 my-3">            
            <div className="row">
                <div className="col-md-6">
                    <img src={"./assets/images/shop/" + info.image} alt="..." className="detail-pic mb-3" />
                </div>
                <div className="col-md-6">
                    <h1>{info.name}</h1>
                    <p className="mb-1">{info.description}</p>
                    <p className="mb-3 fs-9">Últimos {info.stock} Disponibles</p>
                    <ul className="mb-3 fs-7 product-extra">
                        {info.leches.map((leche, i) => {
                            return(
                                <li key={i}><button>{leche}</button></li>
                            );
                        })}
                    </ul>
                    <div className="shop-price">$ {info.price}</div>
                    <ItemCount stock={info.stock} />
                    <AddCart />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;