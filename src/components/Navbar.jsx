import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const Navbar = () => {

    const { user, theme, toggleTheme } = useContext(AppContext);

    const navStyle = {
        background: theme === "light" ? "#00447C" : "#222",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
    };


    return (
        <nav style={navStyle}>
            <span>Welcome {user}</span>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </nav>
    )
}

export default Navbar;