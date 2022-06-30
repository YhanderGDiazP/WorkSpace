import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Header } from '../components/Header';
import '../style/Login.css';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div id='background-image'>
            <Header />
            <h2 id='titulo-inicio'>Bienvenido a WorkSpace's</h2>
        </div>
    );
}