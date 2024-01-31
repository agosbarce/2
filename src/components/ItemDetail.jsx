import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => { // Render de cada producto individual cuando toco comprar.
    return (
        <div className="container pt-4"> 
            <div className="row">
                <div className="col md-4 offset-md-2">
                    <img className="img-fluid" src={item.imagen} alt={item.title} />
                </div>
                <div className="col m4-4">
                    <h1 className="text-marron "><b>{item.title}</b></h1>
                    <p className="text-dark">{item.descripcion}</p>
                    <p className="text-dark"><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;