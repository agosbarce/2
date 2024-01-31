import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center mt-3">
            <div className="card w-100 text-center m-0 h-100">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img className="card-img-top" src={item.imagen} alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <a href="#" className="btn btn-light marron">Comprar</a>
                    </div>
                </Link>
            </div> 
        </div>
    )
}

export default Item;
