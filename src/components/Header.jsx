import React from "react";
import NavBar from "./NavBar";

const Header = ()=>{
    return (
        <header className="container">
            <div className="row">
                <h1 className="col">Titulo</h1>
                <NavBar />
            </div>
        </header>
    );
}

export default Header;