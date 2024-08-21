import React from "react";

import "./cabecalho.css";

function Cabecalho(props) {

    const { nome, cargo, foto } = props.informacoes;

    return (
<header>
      <img src={foto} alt="Foto de flaviana"/>
      <h1 id="nome-perfil"> Flaviana silva</h1>
      <h3 id="eventoSubtitulo">Futura desenvolvedora de software</h3>
  </header>
 )
}

export default Cabecalho;
