// import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); 

   /*  useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos); 
            }, 1000);
        })
        promesa.then(data => {
            setItems(data); 
        })
    }, [id]); */

    // Hacer solo una vez y despues comentar:

    /* useEffect(() => {
    const db = getFirestore(); 
    const itemsCollection = collection(db, "items"); 

    arrayProductos.forEach(producto => { 
        addDoc(itemsCollection, producto);
    });

}, []) */


useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    getDocs(consulta).then(resultado => {
        setLoading(false);
        setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    });

}, [id]);

    
    return (
        <div>
            <h1 className="font-weight-bold text-marron text-center mt-5 mb-3">Blossom Line</h1>
            
            <p className="text-center mt-3 text-dark">Diseños exclusivos hechos a mano. Comodidad y delicadeza en cada prenda. La magia del bordado y la suavidad del lino crean la combinación perfecta y dan vida a nuestra marca.</p>
            {loading ? <Loading/> : <ItemList items={items}/>}
        </div>
    )
}

export default ItemListContainer;