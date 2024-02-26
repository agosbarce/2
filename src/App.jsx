import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import Descuento from "./components/Descuento"
import Footer from "./Footer"
import CartContextProvider from "./components/context/CartContext"
import Checkout from "./components/Checkout"
import Cart from "./components/Cart"



const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='w-100 pb-5'>
          <Descuento />
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<Checkout/>} />
          </Routes>
          <Footer />
        </div>
        
      </BrowserRouter>
    </CartContextProvider>
    
    
  )
}

export default App