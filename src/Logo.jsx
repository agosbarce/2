import React from "react";
import logoAgos from "./assets/LogoBlossom.svg";

const Logo = ({posicion}) => {
    return (
        <img className={posicion} src={logoAgos} alt="Logo" width={60} />
    )
}


export default Logo;