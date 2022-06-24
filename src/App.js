import {LoginButton} from "./components/Login";
import {LogoutButton} from "./components/Logout";
import {useAuth0} from "@auth0/auth0-react";
import {Profile} from "./components/Profile";
import './App.css';

function App() {
    const {isAuthenticated} = useAuth0();

    return (
        <div>
            <center>
                {isAuthenticated ? (
                    <>
                        <Profile />
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}
            </center>
        </div>
    );
}

export default App;
