import { Link } from 'react-router-dom';
import Cart from '../assets/cart.svg'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ?
            <Link to={"/cart"}>
                <button type="button" className="btn btn-light marron">
                    <img src={Cart} alt="Cart" width={50} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
                </button>
            </Link> : ""
    )
}

export default CartWidget;


/* return (
            <button type="button" className="btn btn-light">
                <img src={Cart} alt="Cart" width={50} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>   
    ) */