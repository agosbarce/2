import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            console.log("Agregaste " + counter + " productos al carrito!");
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn marron btn-light" onClick={decrementar}>-</button>
                        <button type="button" className="btn marron text-light">{counter}</button>
                        <button type="button" className="btn marron btn-light" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="col-md-5 p-0 mt-2">
                <button type="button" className="btn marron btn-light" onClick={onAdd}>Agregar al carrito</button>
            </div> 
        </>
    )
}
    
export default ItemCount;