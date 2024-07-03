import React from "react";

import './App.css';

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Cabecalho from "./componentes/cabecalho/cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import Curriculo from "./componentes/curriculo/Curriculo";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contato from "./componentes/Contato/Contato";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<>
<Cabecalho></Cabecalho>

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
echo "# site-pessoal-react" >> README.md 
git init 
git add README.md 
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/fla2308/site-pessoal-react.git
 git push -u origin <main>