import {Login} from "./pages/Login";
import {LogoutButton} from "./components/Logout";
import { Inicio } from "./pages/Inicio";
import {useAuth0} from "@auth0/auth0-react";
import {Profile} from "./components/Profile";
import './App.css';

function App() {
    const {isAuthenticated} = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
                    <>
                        <Profile />
                        <LogoutButton />
                    </>
                ) : (
                    <Login />
                )}
        </div>
    );
}

export default App;
