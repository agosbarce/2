import ItemListContainer from "./ItemListContainer"
import NavBar from "./NavBar"

const App = () => {
  return (
    <div id="marron" className='w-100  pb-3'>
      <NavBar />
      <ItemListContainer greeting={'Ropa de lino y algodon bordados a mano'} />
    </div>
  )
}

export default App