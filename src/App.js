import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import IndexContainer from "./containers/IndexContainer/IndexContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <IndexContainer />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;