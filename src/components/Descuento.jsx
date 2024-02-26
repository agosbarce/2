import { Link } from "react-router-dom";

const Descuento = () => {
    return (
        <div className="container-fluid marron text-center sticky-top">
            <Link to={"/category/blusas"}>
                        <button className="btn btn-light marron">SOLO POR HOY 15% DE DESCUENTO EN BLUSAS!</button>
            </Link>
        </div>
    )
    
    
}

export default Descuento;