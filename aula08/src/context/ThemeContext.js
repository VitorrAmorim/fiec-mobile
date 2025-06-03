import React, { createContext, useState, useContext } from "react";
import light from '../theme/light';
import dark from '../theme/dark';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const theme = isDark ? dark : light;

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);