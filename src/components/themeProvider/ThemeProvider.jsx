import React from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const theme = 'light';

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};