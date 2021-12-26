import './App.css';
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PasapContainer from "./containers/PasapContainer/PasapContainer";
import BlockChainContainer from "./containers/BlockChainContainer/BlockChainContainer";
import Gracias from './components/Gracias/Gracias';
import TecnologiaContainer from './containers/TecnologiaContainer/TecnologiaContainer';
import { FirstPage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';
import { ThirdPage } from './pages/ThirdPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pasap-digital/gracias" component={() => <Gracias />} />
        <Route exact path="/pasap-digital/pasap" component={() => <PasapContainer />} />
        <Route exact path="/pasap-digital/tecno" component={() => <TecnologiaContainer />} />
        <Route exact path="/pasap-digital" component={() => <BlockChainContainer />} />

        <Route exact path="/pasap-digital/bienvenidos" component={() => <FirstPage /> } />
        <Route exact path="/pasap-digital/onu" component={() => <SecondPage /> } />
        <Route exact path="/pasap-digital/salud-infantil" component={() => <ThirdPage /> } />

        <Redirect to="/pasap-digital" />
      </Switch>
    </BrowserRouter>
  );
}


export default App;