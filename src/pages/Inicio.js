import React from 'react';
import { Header } from '../components/Header';
import '../style/Inicio.css';

export const Inicio = () => {
    return (
        <div id='background-image'>
            <Header />
            <h2 id='titulo-inicio'>Bienvenido a WorkSpace's</h2>
        </div>
    );
}