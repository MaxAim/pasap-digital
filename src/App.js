import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PasapContainer from "./containers/PasapContainer/PasapContainer";
import BlockChainContainer from "./containers/BlockChainContainer/BlockChainContainer";
import Gracias from './components/Gracias/Gracias';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gracias" component={() => <Gracias />} />
        <Route path="/pasap" component={() => <PasapContainer />} />
        <Route path="/" component={() => <BlockChainContainer />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;