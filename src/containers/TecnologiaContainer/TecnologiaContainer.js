import "./TecnologiaContainer.css";
import NavBar from "../../components/NavBar/NavBar";
import SolucionesContainer from "../SolucionesContainer/SolucionesContainer";
import ArquitecturaContainer from "../ArquitecturaContainer/ArquitecturaContainer";
import Footer from "../../components/Footer/Footer";
import UpButton from "../../components/UpButton/UpButton";


const TecnologiaContainer = () => {
    return(
        <div className="tecnologiaContainer">
            <NavBar />
            <UpButton />
            <SolucionesContainer />
            <ArquitecturaContainer />
            <Footer />
        </div>
    )
}

export default TecnologiaContainer