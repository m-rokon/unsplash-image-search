import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const setInitialDarkMode = () => {
    const preferDarkMode = window.matchMedia(
        "prefers-color-scheme:dark"
    ).matches;

    const localDarkTheme = localStorage.getItem("darkTheme") === "true";
    return localDarkTheme || preferDarkMode;
};

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(setInitialDarkMode);
    const [searchTerm, setSearchTerm] = useState("cat");

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem("darkTheme", newDarkTheme);
    };

    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.toggle("dark-theme", isDarkTheme);
    }, [isDarkTheme]);

    return (
        <AppContext.Provider
            value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
