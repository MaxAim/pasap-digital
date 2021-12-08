import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PasapContainer from "./containers/PasapContainer/PasapContainer";
import BlockChainContainer from "./containers/BlockChainContainer/BlockChainContainer";
import Gracias from './components/Gracias/Gracias';
import TecnologiaContainer from './containers/TecnologiaContainer/TecnologiaContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pasap-digital/gracias" component={() => <Gracias />} />
        <Route exact path="/pasap-digital/pasap" component={() => <PasapContainer />} />
        <Route exact path="/pasap-digital/tecno" component={() => <TecnologiaContainer />} />
        <Route exact path="/pasap-digital" component={() => <BlockChainContainer />} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;