import { NavLink } from "react-router-dom";



const EnlacesContenedor = () => {
    return (
        <ul className="container-fluid row justify-content-center list-unstyled list-inline pt-5 pb-5 mb-0 pl-0 pr-0">
            
            <li className="list-inline-item ">
                <NavLink className="text-dark" to="/">Productos</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-dark" to="/category/blusas">Blusas</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-dark" to="/category/vestidos">Vestidos</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-dark" to="/category/pantalones">Pantalones</NavLink>
            </li>
            <li className="list-inline-item">
                <NavLink className="text-dark" to="/category/abrigos">Abrigos</NavLink>
            </li>
        </ul>
    )
}

export default EnlacesContenedor;