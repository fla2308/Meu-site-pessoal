import React from "react";

import api from "./services/api";

import './App.css';

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import Curriculo from "./componentes/curriculo/Curriculo";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contato from "./componentes/Contato/Contato";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   const [informacoes,setInformacoes] = React.useState({});
   const [curriculo,setCurriculo] = React.useState({});
   const [portfolio,setPortfolio] = React.useState({});

   const fetchDados = async () => {
    try{ 
      const informacao = await api.get ('/informacoes/1');
      setInformacoes ({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo, 
      });
      const experienciaacademica = await api.get ('/experiencias?tipo=academica');
      const experienciaprofissional = await api.get ('/experiencias?tipo=profissional');


      setCurriculo ({
        resumo: informacao.data.resumo,
        experienciaAcademica:experienciaacademica.data,
        experienciaProfissional:experienciaprofissional.data
      });

      const portfolio = await api.get ('/portfolio');
      setPortfolio (portfolio.data);

    } catch (error) {
      console.error ('Erro ao buscar dados:',error);
    }
  };
  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
<>
<Cabecalho informacoes={informacoes}></Cabecalho>

<BrowserRouter>
<BarraNavegacao></BarraNavegacao>
      <Routes>
          <Route index element={<Curriculo />} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>

<Rodape></Rodape>

</>
  )
}

export default App;
