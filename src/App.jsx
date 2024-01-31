import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './NavBar'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import Descuento from "./components/Descuento"
import Footer from "./Footer"


const App = () => {
  return (
    <BrowserRouter>
      <div className='w-100 pb-5'>
        <Descuento />
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        
        </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
    
  )
}

export default App