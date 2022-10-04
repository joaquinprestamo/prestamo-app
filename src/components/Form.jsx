import { serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { addDoc, collection, updateDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from "../context/cartContext";

const Form = ({ handleId})=>{
    const {cart, total, deleteCart} = useContext(CartContext); 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');   

    const order = {
        buyer: {name , email, phone},
        items: cart.map(item =>({ id:item.id, title: item.name, price: item.price, quantity: item.count})),
        total: {total},
        date: serverTimestamp()
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => handleId(id))
        deleteCart();
    };
    

    const handleName = (e) => { setName(e.target.value)};
    const handlePhone = (e) => { setPhone(e.target.value)};
    const handleEmail = (e) => { setEmail(e.target.value)};
    return(
        <div className="container my-5 h-100">
            <form action="" onSubmit={handleSubmit} className="row" id="orderForm">
                <input type="text" name="name" placeholder="Nombre completo" value={name} onChange={handleName} className="mb-3" required />
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmail} className="mb-3" required />
                <input type="tel" name="phone" placeholder="Teléfono" value={phone} onChange={handlePhone} className="mb-3" required />
                <button type="submit" className="fs-8 shop-button text-center">Confirmar compra</button>

            </form>            
        </div>
    )
}

export default Form;