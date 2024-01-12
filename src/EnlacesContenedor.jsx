import Enlace from "./Enlace";


const EnlacesContenedor = () => {
    return (
        <ul className="container-fluid row justify-content-center list-unstyled list-inline mb-0">
            <li className="list-inline-item"><Enlace nombre={'Inicio'} link={''} color={'text-dark'}/></li>
            <li className="list-inline-item"><Enlace nombre={'Catalogo'} link={''} color={'text-dark'}/></li>
            <li className="list-inline-item"><Enlace nombre={'Colecciones'} link={''} color={'text-dark'} /></li>
            <li className="list-inline-item"><Enlace nombre={'Contacto'} link={''} color={'text-dark'}/></li>
        </ul>
    )
}

export default EnlacesContenedor;