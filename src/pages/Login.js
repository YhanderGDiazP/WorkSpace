import React from 'react';
import '../style/Login.css';

export const Login = () => {

    return (
        <body>
            <main>
                <div className='contenedor-principal'>
                    <div className='box-back'>
                        <div className='box-back-login'>
                            <h3>¿Ya tiene cuenta?</h3>
                            <p>Inicie sesion para entrar a la página</p>
                            <button id='btn'>Iniciar Sesion</button>
                        </div>
                        <div className='box-back-register'>
                            <h3>¿Aun no tiene cuenta?</h3>
                            <p>Registrate para poder Iniciar Sesion</p>
                            <button id='btn'>Registrate</button>
                        </div>
                    </div>

                    <div className='contenedor-login-register'>
                        <form action='' className='formulario-login'>
                            <h2> Iniciar Sesion</h2>
                            <input type='' placeholder='Nombre de usuario'></input>
                            <input type='' placeholder='Contraseña'></input>
                            <button className='btn-form-login-register'>Iniciar Sesion</button>
                        </form>
                        <form className='formulario-register'>
                            <h2> Registrarse </h2>
                            <input type='' placeholder='Nombre'></input>
                            <input type='' placeholder='Nombre de usuario'></input>
                            <input type='' placeholder='Contraseña'></input>
                            <input type='' placeholder='Numero Telefonico'></input>
                            <button className='btn-form-login-register'>Registrarse</button>
                        </form>
                    </div>
                </div>
            </main>
        </body>
    );
}