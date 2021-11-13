import MainCarousel from "../../components/Carousel/Carousel";
import Contacto from "../../components/Contacto/Contacto";
import Nosotras from "../../components/Nosotras/Nosotras";
import Proposito from "../../components/Proposito/Proposito";
import "./IndexContainer.css"

function IndexContainer() {
    return (
        <main className={"index"}>
            <MainCarousel />
            <Proposito />
            <Nosotras blockchain={"pasap"} />
            <Contacto />
        </main>
    );
  }
  
  export default IndexContainer;