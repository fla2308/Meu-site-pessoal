import React from "react";

import "./Curriculo.css";
import data from "./Curriculo.json"

function Curriculo() {
    return (
        <>
<section>
        <h2>Resumo</h2>
        <p>{data.resumo}</p>
    </section>

    <section>
        <h2>Acadêmico</h2>  
        <ul>
        {data.experienciaAcademica.map ((item,index) => ( 
            <li key={index}>
        <p>({item.dataInicio} - {item.dataFim})</p> {item.titulo}
       </li>
    ))}
       </ul> 
        </section>

    <section>
        <h2>Profissional</h2>
        <ul>
        {data.experienciaProfissional.map ((item,index) => ( 
            <li key={index}>
        <p>({item.dataInicio} - {item.dataFim})</p> {item.titulo}
       </li>
    ))}
       </ul> 
    </section>
        </>
    ) 
}
export default Curriculo;