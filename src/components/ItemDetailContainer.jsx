import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); 

    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {

                let producto = arrayProductos.find(item => item.id === parseInt(id)); 
                resolve(producto); 
            }, 1000);
        })
        promesa.then(data => {
            setItem(data); 
        })
    }, [id]); */

    // Llamada al oroducto desde el firestore

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });

    }, [id]); 


    return (
        <>
            {loading ? <Loading/> : <ItemDetail item={item}/>}
        </>
        
    )
    

    
}

export default ItemDetailContainer;

//{loading ? <Loading/> : <ItemDetail item={item} />}