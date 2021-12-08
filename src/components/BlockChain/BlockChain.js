import "./BlockChain.css"
import nodo from "../../img/nodo.png";
import shape from "../../img/shape.png";
import mask from "../../img/mask.png";
import { Link } from "react-router-dom";

const BlockChain = () => {
    return(
        <div className="tecnologia">
            <div className="blockInfo">
                <div>
                    <h1>Tecnología Blockchain</h1>
                    <p>En pocas palabras, si toda la información se puede concentrar en una tecnología como blockchain, la información queda accesible para todos los participantes que interactúan, de forma transparente, y fundamentalmente, se evitan intermediarios.</p>
                    <Link to="/pasap-digital/tecno"><button>VER MÁS</button></Link>
                </div>
                <div className="blockPointers">
                    <div><img className="check mask" src={mask} alt="Check" /><img className="check shape" src={shape} alt="Check" /><p>Hay una necesidad de una base de datos común compartida</p></div>
                    <div><img className="check mask" src={mask} alt="Check" /><img className="check shape" src={shape} alt="Check" /><p>Hay múltiples partes involucradas o escritores en una base de datos</p></div>
                    <div><img className="check mask" src={mask} alt="Check" /><img className="check shape" src={shape} alt="Check" /><p>Las partes involucradas en el proceso tienen incentivos en conflicto o no tienen confianza entre los participantes</p></div>
                    <div><img className="check mask" src={mask} alt="Check" /><img className="check shape" src={shape} alt="Check" /><p>Es necesario contar con una historia objetiva e inmutable o un registro de hechos para la referencia de las partes</p></div>
                    <div><img className="check mask" src={mask} alt="Check" /><img className="check shape" src={shape} alt="Check" /><p>La criptografía se está utilizando actualmente o debería usarse. La criptografía facilita la confidencialidad de los datos, la integridad de los datos, la autenticación y el no repudio</p></div>
                    <div><img className="check mask" src={mask} alt="Check" /><img className="check shape" src={shape} alt="Check" /><p>Los datos para llevar a cabo cualquier proceso de la organización normalmente se almacenan en distintas bases de datos a lo largo del ciclo de vida del proceso. Es importante que estos datos sean coherentes en todas las entidades y que se desee la digitalización de dicho proceso</p></div>
                </div>
            </div>
            <img src={nodo} alt="BlockChain" className="nodo" />
        </div>
    )
}

export default BlockChain