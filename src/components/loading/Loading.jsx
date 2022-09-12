import React from "react";
import "./loading.css";

const Loading = ()=>{
    return(
        <div className="loading-container text-center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <small>cargando...</small>
        </div>
    );
}

export default Loading;