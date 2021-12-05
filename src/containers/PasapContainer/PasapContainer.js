import { useEffect, useState } from "react";
import MainCarousel from "../../components/Carousel/Carousel";
import Contacto from "../../components/Contacto/Contacto";
import Nosotras from "../../components/Nosotras/Nosotras";
import Proposito from "../../components/Proposito/Proposito";
import NavBar from "../../components/NavBar/NavBar";
import Loader from "../../components/Loader/Loader";
import "./PasapContainer.css"

function PasapContainer() {
    const [loaded, setLoaded] = useState(false)
    function fakeRequest() {
      return new Promise(resolve => setTimeout(() => resolve(), 10000));
    }
    useEffect(() => {
      fakeRequest().then(() => {
        setLoaded(true);
      });
      }, []);

    if (loaded) 
        {return (
        <main className={"index"}>
            <NavBar pasap={true}/>
            <MainCarousel />
            <Proposito />
            <Nosotras pasap={true} />
            <Contacto />
        </main>
    );}
    return <Loader />
  }
  
  export default PasapContainer;