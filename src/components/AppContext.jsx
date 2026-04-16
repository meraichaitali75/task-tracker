import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState("Chaitali Merai");
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const loginUser = (name) => setUser(name);

    // The 'value' prop shares the data and functions
    return (
        <AppContext.Provider value={{ user, theme, toggleTheme, loginUser }}>
            {children}
        </AppContext.Provider>
    )

}