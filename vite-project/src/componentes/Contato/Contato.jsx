import React, {useState}  from "react";

import "./Contato.css";

function Contato() {

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [mensagem, setMensagem] = React.useState("");

function enviarformulario(event) {
    event.preventDefault();
    console.log("Formulário enviado");
    
    const texto = `Nome: ${nome}\nE-mail: ${email}\ntelefone: ${telefone}\nmensagem: ${mensagem}`;

    const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; // número do whatsApp parabo qual a mensagem será enviada;

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(linkWhatsApp, '_blank');

}

function mascaraTelefone(event) {
    const texto = event.target.value;
    const textoApenasNumeros = texto.replace(/D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    setTelefone(telefoneFormatado);
    }

    return(
    <form onSubmit={enviarformulario}>

    <fieldset>
    <label htmlFor="input-nome">Nome</label>
    <input 
       type="text"
       name="input-nome" 
       id="input-nome"
       required 
       minLength="2"
       value={nome}
       onChange={(event) => setNome(event.target.value)}
     />
    </fieldset>

    <fieldset>
    <label htmlFor="input-email">E-mail</label>
    <input 
       type="email" 
       name="input-email" 
       id="input-email"
       required
       value={email}
       onChange={(event) => setEmail(event.target.value)}
    />
    </fieldset>

    <fieldset>
    <label htmlFor="input-tel">Telefone</label>
    <input 
       type="tel" 
       name="input-tel" 
       id="input-tel" 
       placeholder="(99)99999-9999" 
       required 
       pattern="^\(\d{2}\) \d{5}-\d{4}$" 
       maxLength="15"
       value={telefone}
       onChange={(event) => setTelefone(event.target.value)}
    />
    </fieldset>

    <fieldset>
    <label htmlFor="input-msg">Mensagem</label>
    <textarea 
        name="input-msg" 
        id="input-msg" 
        cols="30" 
        rows="10"
        value={mensagem}
        onChange={(event) => setTelefone(event.target.value)}
    ></textarea>
    </fieldset> 

<center>
    <input type="submit" value="ENVIAR" className="button" />
</center>

        </form>

    )
}
export default Contato;