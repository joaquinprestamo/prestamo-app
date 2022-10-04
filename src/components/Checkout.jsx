import React, {useState} from "react";
import Form from "./Form";

const Checkout = ()=>{
    const [orderId, setOrderId] = useState();

    const handleId = (numeroOrden) =>{
        setOrderId(numeroOrden)

    }
    if(orderId){
        return (
            <div className="my-5 fs-8 text-center" id="orderDetail">
                <h3>¡Gracias por su compra!</h3>
                <p>La identificación de su compra es {orderId}</p>
            </div>
        );
    }else{
        return (
            <Form handleId={handleId} />    
        );
    }
}

export default Checkout;