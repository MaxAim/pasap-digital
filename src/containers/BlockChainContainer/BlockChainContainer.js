import Contacto from "../../components/Contacto/Contacto";
import Nosotras from "../../components/Nosotras/Nosotras";
import NavBar from "../../components/NavBar/NavBar";
import Productos from "../../components/Productos/Productos";
import "./BlockChainContainer.css";
import BlockChain from "../../components/BlockChain/BlockChain";

function BlockChainContainer() {
    return (
        <main className={"index"}>
            <BlockChain />
            <NavBar />
            <Productos />
            <Nosotras />
            <Contacto />
        </main>
    );
  }
  
  export default BlockChainContainer;