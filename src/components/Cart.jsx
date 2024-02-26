import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, clear, removeItem, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container m-5">
                <div className="row">
                    <div className="col">
                        <h3 className="text-dark mb-4">! No se encontraron productos en el carrito</h3>
                    </div>
                </div>
                <Link className="btn btn-light marron " to ={"/"}>Volver a productos</Link>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-dark mt-5">Productos seleccionados</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table text-dark">
                            <tbody>
                                <tr>
                                    <td className="align-middle">
                                            <button className="btn btn-light marron" onClick={clear}>Vaciar Carrito</button>
                                        </td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img className="img-fluid" src={product.imagen} alt={product.title} width={100} /></td>
                                        <td className="align-middle text-start">{product.title}</td>
                                        <td className="align-middle text-start">Precio por unidad: ${product.precio}</td>
                                        <td className="align-middle">Cantidad: {product.quantity}</td>
                                        <td className="align-middle">Precio total: ${product.quantity * product.precio}</td>
                                        <td className="align-middle"><button className="btn btn-light marron" onClick={()=>removeItem(product.id)}>Eliminar producto</button></td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Suma total:</td>
                                    <td>${SumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="col">
                                <Link to={"/checkout"}><button className="btn btn-light marron ml-2">Comprar</button></Link> 
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Cart;