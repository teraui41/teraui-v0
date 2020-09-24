import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-jss';

const ThemeContext = createContext(null);

const ThemeProvide = ({ theme, children }) => {
return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
} 

export default ThemeProvide;
