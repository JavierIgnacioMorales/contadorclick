import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton({text, esBotonDeClic, manejarClic}){
    return(
        <button className={esBotonDeClic ? 'boton-clic': 'boton-reiniciar'} onClick={manejarClic}>
            {text}
        </button>
    );
}

export default Boton;