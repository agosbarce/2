
import CartWidget from "./components/CartWidget";
import EnlacesContenedor from "./components/EnlacesContenedor";
import Logo from "./components/Logo";
import NavBarForm from "./components/NavbarForm";

const NavBar = () => {
    return (
        <div className="container-fluid w-100 row bg-light d-flex align-items-center justify-content-between m-0 .navbar-expand{-sm|-md|-lg|-xl|-xxl} p-8 m-0 clarito">
            <div className="col md-2 text-center">
                <Logo/>
            </div>
            <div className="col md-2 text-center">
                <EnlacesContenedor />
            </div>
            <div className="col md-2 text-center">
                <NavBarForm />
            </div>
            <div className="col md-2 text-center">
                <CartWidget />
            </div>
        </div>
    )
}


export default NavBar;