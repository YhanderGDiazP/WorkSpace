import React from 'react';
import ReactDOM from 'react-dom/client';
import {Auth0Provider} from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider domain="dev-v25xrgb2.us.auth0.com" clientId="xyyuoHFzguWAYYVhRFXQeU1ahGjQADIp"
                       redirectUri={window.location.origin}>
            <App/>
        </Auth0Provider>
    </React.StrictMode>
);
reportWebVitals();
