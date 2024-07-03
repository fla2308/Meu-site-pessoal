import React from "react";
import WhatsAppImage from "../../assets/WhatsApp Image 2024-04-13 at 14.57.59.jpeg";

import "./cabecalho.css";

function cabecalho() {
    return (
<header>
      <img src={WhatsAppImage} alt="Foto de flaviana"/>
      <h1 id="nome-perfil"> Flaviana silva</h1>
      <h3 id="eventoSubtitulo">Futura desenvolvedora de software</h3>
  </header>
 )
}

export default cabecalho;
