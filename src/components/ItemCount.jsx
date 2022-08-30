import React from "react";

const ItemCount = (props)=>{
    const [count, setCount] = React.useState(0);
    function counter(type){
        if(!type && count > 0){
            setCount(count - 1);
        }else if(type && count < props.stock){
            setCount(count + 1);
        }
    }
    return (
        <div className="col-12 d-flex justify-content-between mb-3 shopCounter my-2">
            <button className="col btnCount" onClick={()=> counter(false)}>-</button>
            <span className="col text-center">{count}</span>
            <button className="col btnCount" onClick={()=> counter(true)}>+</button>
        </div>
    );
};

export default ItemCount;