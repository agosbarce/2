import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams(); 

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos); 
            }, 1000);
        })
        promesa.then(data => {
            setItems(data); 
        })
    }, [id]);
    
    return (
        <div>
            <h1 className="font-weight-bold text-marron text-center mt-5 mb-3">Blossom Line</h1>
            <p className="text-center mt-3 text-dark">Diseños exclusivos hechos a mano. Comodidad y delicadeza en cada prenda. La magia del bordado y la suavidad del lino crean la combinación perfecta y dan vida a nuestra marca.</p>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;