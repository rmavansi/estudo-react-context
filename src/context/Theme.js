import React, { createContext, useContext, useState } from 'react';

export const themes = {
    light: {
        color: "black",
        background: "white"
    },
    dark: {
        color: "white",
        background: "#15202b"
    }
  }

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [ theme, setTheme ] = useState(themes.dark);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;
    return {theme, setTheme};

}