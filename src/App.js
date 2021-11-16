import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import IndexContainer from "./containers/IndexContainer/IndexContainer";
import Loader from "./components/Loader/Loader"
import Gracias from './components/Gracias/Gracias';

function App() {
  const [loaded, setLoaded] = useState(false)
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 10000));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      setLoaded(true);
    });
    }, []);

  return (
    <BrowserRouter>
      <NavBar loaded={loaded}/>
      <Switch>
        <Route exact path="/gracias" component={() => loaded === true ? <Gracias /> : <Loader />} />
        <Route path="/" component={() => loaded === true ? <IndexContainer /> : <Loader />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;