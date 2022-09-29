import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "./loading/Loading";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ()=>{
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{   
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        const queryFilter = categoryId ? query(queryCollection, where("categoria", "==", categoryId)) : queryCollection;
        getDocs(queryFilter)
            .then(
                res => setItems(res.docs.map(item => ({id: item.id, ...item.data()}))),
                setLoading(false)
            );
    },[categoryId]);

    return(
        <div className="container my-5">   
            {loading ? <Loading /> : <ItemList allItems={items} />}             
        </div>
    );
};

export default ItemListContainer;