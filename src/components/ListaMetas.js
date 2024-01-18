import React, {useState} from 'react';
import Meta from './Meta';
import '../styles/ListaMetas.css'
import Contador from './Contador';
function ListaMetas(){
    const[metas, setMetas]=useState([]);
    const[nuevaMeta, setNuevaMeta]=useState('');
    
    

    const agregarMeta=()=>{
        if(nuevaMeta.trim()==='') return;
        setMetas([...metas, {id:Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');
    };
    const eliminarMeta=(id)=>{
        setMetas((prevMetas)=>
            prevMetas.filter((meta)=> meta.id !==id));
    };
    const marcarMeta=(id)=>{   
        setMetas((prevMetas)=> prevMetas.filter((meta)=> meta.texto="Completada"));
        
    };  
    var cantMetas=metas.length;
    var cantCompletas=0;
    for(let i=0;i<metas.length;i++){
        if(metas[i].texto==="Completada"){
            cantCompletas++;
            cantMetas--;
        }
    }  
    
    
    
    return(
        <div className='ListaMetas'>   
            <div className='inputt'>
                <input
                    className="input"
                    type="text"
                    value={nuevaMeta}
                    onChange={(e)=> setNuevaMeta(e.target.value)}
                    
                />    
                <button className="boton" onClick={agregarMeta}>Agregar</button>    
            </div>      
            <Contador dato={cantMetas} dato2={cantCompletas}/>
            {metas.map((meta)=>(
                <Meta
                    key={meta.id}
                    meta={meta.texto}
                    meta2={meta.id}
                    clickDelete={eliminarMeta}
                    clickMarcar={marcarMeta}
                />
            ))}        
            
        </div>
    );
}
export default ListaMetas;