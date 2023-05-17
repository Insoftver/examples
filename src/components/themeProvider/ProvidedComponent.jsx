import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ProvidedComponent = () => {
    const theme = useContext(ThemeContext);

    return(
        <div>
            <h2>Provided component</h2>
            <p>Basic useContext use</p>
            <p>Actual theme: {theme}</p>
        </div>
    );
};

export default ProvidedComponent;