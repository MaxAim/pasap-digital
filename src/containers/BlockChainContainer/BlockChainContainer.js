import Contacto from "../../components/Contacto/Contacto";
import Nosotras from "../../components/Nosotras/Nosotras";
import NavBar from "../../components/NavBar/NavBar";
import Productos from "../../components/Productos/Productos";
import "./BlockChainContainer.css";
import BlockChain from "../../components/BlockChain/BlockChain";
import UpButton from "../../components/UpButton/UpButton";

function BlockChainContainer() {
    return (
        <main className={"index"}>
            <NavBar />
            <UpButton />
            <BlockChain />
            <Productos />
            <Nosotras />
            <Contacto />
        </main>
    );
  }
  
  export default BlockChainContainer;