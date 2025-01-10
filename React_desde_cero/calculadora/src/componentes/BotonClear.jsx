import React from "react";
import '../hojas-de-estilo/BotonClear.css'

export const BotonClear = ({children, manejarClear}) => (
    <div className="boton-clear" 
    onClick={manejarClear}
    >
        {children}
    </div>
)