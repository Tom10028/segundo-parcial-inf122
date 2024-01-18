import React from "react";
import '../styles/Contador.css'
function Contador({dato, dato2}){
    
    return(
        <div className='box'>
                <div className='text-container'>
                    <p className="text1">Completadas: {dato2}</p>
                </div>
                <div className='text-container'>
                    <p className="text2">Pendientes: {dato} </p>
                </div>
        </div>
    );

}
export default Contador;