import { createContext, useState } from "react"



export const CartContext = createContext(); 


const CartContextProvider = ({children}) => { 
    const [cart, setCart] = useState([]);
    

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === id); // Si esta en el carrito, 
            cart[pos].quantity += quantity;
            setCart([...cart])  // con el operador spread crea un nuevo array con lo nuevo. 
        } else {
            setCart([...cart, {...item, quantity:quantity}]); // distribuyo lo que ya habia antes 
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(product => product.id != id); // filtra todos los productos que sean distintos a un id.
        setCart([...items]);
    }


    const clear = () => {
        setCart([]); // facil, vaciamos el carrito
    }


    const isInCart = (id) => { // existe este producto?
        return cart.some(product => product.id === id);
    }

    const CantTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity, 0); // 0 es el valor inicial. 
    }

    const SumaTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.precio, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;