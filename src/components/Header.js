import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../style/componentes-login.css';

export const Header = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <header id="headerWS">
                <a href="#" className='logo'>
                    <img src='https://i.pinimg.com/564x/6d/2d/f1/6d2df16e497d414718d14c996dd5ce05.jpg' alt='Logo de la Empresa'/>
                    <h2 className='nombreEmpresa'>WorkSpace</h2>
                </a>
                <nav>
                    <a href="#" className="nav-link">Inicio</a>
                    <a href="#" className="nav-link">Espacio</a>
                    <a onClick={() => loginWithRedirect()} className="nav-link">Iniciar Sesion</a>
                    <a href="#" className="nav-link">Registarse</a>
                    <a href="#" className="nav-link">Contacto</a>
                </nav>
            </header>
        </div>
    );
}