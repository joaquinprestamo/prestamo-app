import React from "react";
import Item from "./Item";

const ItemList = (props)=>{
    const {allItems} = props;    

    return(
        <div className="row">
            {allItems.map((item, i) => {
                return(
                    <Item info = {item} key={i} />
                );
            })}
        </div>
    );
};

export default ItemList;