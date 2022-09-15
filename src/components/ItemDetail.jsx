import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({info})=>{
    const lecheSeleccionada = ()=>{
        return(
            <></>
        );
    }

    const leches = ()=>{
        if(info.leches !== undefined){
            return(
                <ul className="mb-3 fs-7 product-extra">
                    {info.leches.map((leche, i) => {
                        return(
                            
                            <li key={i}>
                                <input onChange={lecheSeleccionada} type="radio" className="inputOption" name="extraOption" id={i} checked />
                                <label for={i} className="shop-button labelOption">{leche}</label>
                            </li>
                        );
                    })}
                </ul>
            );
        }
    }

    return (
        <div className="col-12 my-3">            
            <div className="row">
                <div className="col-md-6">
                    <img src={"../assets/images/shop/" + info.image} alt="..." className="detail-pic mb-3" />
                </div>
                <div className="col-md-6">
                    <h1>{info.name}</h1>
                    <p className="mb-1">{info.description}</p>
                    <p className="mb-3 fs-9">Últimos {info.stock} Disponibles</p>
                    {leches()}
                    <div className="shop-price">$ {info.price}</div>
                    <div className="col-md-6 mt-5">
                        <ItemCount stock={info.stock} />                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;