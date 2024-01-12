import CartWidget from "./CartWidget";
import EnlacesContenedor from "./EnlacesContenedor";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="container-fluid w-100 row bg-light d-flex align-items-center justify-content-between p-8 m-0 .navbar-expand{-sm|-md|-lg|-xl|-xxl} p-8 m-0 ">
            <div className="col p-0">
                <Logo posicion={'float-left'} />
                
            </div>
            <div className="col p-0">
                <EnlacesContenedor />
            </div>
            <div className="col p-0">
                <CartWidget />
            </div>
        </div>
    )
}


export default NavBar;