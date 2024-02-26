import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";



const Checkout = () => {
    
        const [nombre, setNombre] = useState();
        const [email, setEmail] = useState();
        const [telefono, setTelefono] = useState();
        const [orderId, setOrderId] = useState();
        const {cart, clear, SumaTotalProductos} = useContext(CartContext);
    
        

        const generarOrden = () => {
            if (nombre.length === 0) {
                return false;
            }

            if (email.length === 0) {
                return false;
            }

            if (telefono.length === 0) {
                return false;
            }

            const buyer = {name: nombre, email:email, phone:telefono};
            const items = cart.map(item => ({id:item.idx, title:item.title, price:item.precio }));
            const fecha = new Date();
            const date = `${fecha.getDate()}-${fecha.getMonth()+1} - ${fecha.getFullYear()} ${fecha.getHours()}: ${fecha.getMinutes}}`;
            const total = SumaTotalProductos();
            const order = {buyer: buyer, items:items, date:date, total:total};


            // insertar documento al firestore

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(resultado => {
                clear();
                setOrderId(resultado.id);
            });
        }

    
        return (
            <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="text-dark mt-5">Checkout</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <form className="text-dark">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Telefono</label>
                                <input type="tel" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                            </div>

                            <button type="button" className="btn btn-light marron" onClick={generarOrden}>Generar orden</button>
                            
                        </form>
                        </div>
                        <div className="col text-center">
                            <table className="table text-dark">
                                <tbody>
                                    {cart.map(product =>
                                        <tr key={product.id}>
                                            <td className="align-middle"><img className="img-fluid" src={product.imagen} alt={product.title} width={100} /></td>
                                            <td className="align-middle text-start">{product.title}</td>
                                            <td className="align-middle text-start">Precio por unidad: ${product.precio}</td>
                                            <td className="align-middle">Cantidad: {product.quantity}</td>
                                            <td className="align-middle">Precio total: ${product.quantity * product.precio}</td>
                                            
                                        </tr>
                                    )}
                                    <tr>
                                        <td>Suma total:</td>
                                        <td>${SumaTotalProductos()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col text-center">
                            {orderId ? <div className="text-center m-4">
                                <h2 className="text-dark mb-3">Gracias por realizar tu compra en Blossom Line! Te esperamos de vuelta!</h2>
                                <Link to={"/"}><button className="btn btn-light marron">Seguir comprando</button></Link>
                                <h3 className="text-dark mt-3">Tu ID de compra es: <b>{orderId}</b></h3>
                                </div> : ""}
                        </div>
                    </div>
                </div>
        )
    }


export default Checkout;