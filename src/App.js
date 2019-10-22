import React from 'react';
import './App.scss';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro.js';
import Noticias from './componentes/Noticias';
import Projeto from './componentes/Projeto';
import Footer from './componentes/Footer';
import EscolaCadastro from './componentes/Cadastro/EscolaCadastro';
import DoadorCadastro from './componentes/Cadastro/DoadorCadastro';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/noticias/" component={Noticias}/>
      <Route exact path="/cadastro" component={Cadastro}/>
      <Route exact path="/sobre" component={Projeto}/>
      <Route exact path="/escola" component={EscolaCadastro} />
      <Route exact path="/doador" component={DoadorCadastro} />
      <Footer />
    </Router>
  );
}

export default App;
