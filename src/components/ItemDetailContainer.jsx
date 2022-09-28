import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "./loading/Loading";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = ()=>{
    const {shortcut} = useParams(false);
    const [item,setItem] = useState([]);    
    const [loading,setLoading] = useState(true);

    useEffect(()=>{   
        const db = getFirestore();
        const queryDoc = doc(db, 'items',shortcut);
        getDoc(queryDoc)
            .then(
                res => setItem({id: res.id, ...res.data()}),
                setLoading(false)
            );
    },[shortcut]);

    return(
        <div className="container my-5">   
            {loading ? <Loading /> : <ItemDetail info = {item} />}             
        </div>
    );
};

export default ItemDetailContainer;