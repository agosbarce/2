import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => { 

    const {addItem} = useContext(CartContext); 

        const onAdd = (quantity) => { 
            addItem(item, quantity); 
        }

    return (
        <div className="container pt-4"> 
            <div className="row">
                <div className="col md-4 offset-md-2">
                    <img className="img-fluid" src={item.imagen} alt={item.title} />
                </div>
                <div className="col ">
                    <h1 className="text-marron"><b>{item.title}</b></h1>
                    <p className="text-dark">{item.descripcion}</p>
                    <p className="text-dark"><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="row">
                <div className="col md-4 offset-md-2 text-center mt-4">
                    <Link to={`/category/${item.category}`}>
                        <button className="btn btn-light marron">{"Ver mas " + item.category}</button>
                    </Link>
                </div>
                <div className="col"></div>
            </div>
                </div>
            </div>
        </div>


        
    )
}

export default ItemDetail;
