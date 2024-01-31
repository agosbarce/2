const Enlace = ({link, nombre, color}) => {
    return (
        <a className={color} href={link}>{nombre}</a>
    )
}


export default Enlace