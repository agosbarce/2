
import logoAgos from "../assets/LogoBlossom.svg";

const Logo = ({posicion}) => {
    return (
        <img className={posicion} src={logoAgos} alt="Logo" width={100} />
    )
}


export default Logo;