import "./Proposito.css";
import propositoImg from "../../img/proposito.png";
import problemaImg from "../../img/problema.png";
import { Col, Row, Container } from "react-bootstrap";
import Pointers from "./Pointers/Pointers";
import globo from "../../img/globo.png";
import calendario from "../../img/calendario.png";
import market from "../../img/market.png";
import blockchain from "../../img/blockchain.png";



const Proposito = () => {
    return (
    <div>
        <Container>
            <Row>
                <img src={propositoImg} alt="" />
                <Col>
                    <h1>Propósito</h1>
                    <p>Nuestro propósito es acompañar la toma de decisiones sobre inmunidad personal y familiar de manera informada, facilitando el acceso a vacunas y el seguimiento de sus efectos secundarios.</p>
                    <p>Al mismo tiempo, abrimos oportunidades para volver a transitar y a disfrutar de destinos locales e internacionales con mayor libertad, seguridad y a menor costo.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>¿Cual es</h1>
                    <h1>el problema?</h1>
                    <p>La información sobre inmunización varía en un entorno cada vez más volátil y la abundancia de información desinforma. Solo el 10% de la población mundial está completamente vacunada, según Our World in Data</p>
                    <p>Desigualdad de la distribución de vacunas entre países, esto profundiza factores de pobreza, desempleo, desigualdad.</p>
                    <p>El colapso del turismo internacional debido a la pandemia podría costarle a la economía mundial hasta US$ 2,4 billones este año (UNCTAD-WTO)</p>
                </Col>
                <img src={problemaImg} alt="" />
            </Row>
        </Container>
        <Container className="solucion">
            <h1>¿Cual es la solución?</h1>
            <p>Apoyados en tecnología de Blockchain contaremos con una base de datos descentralizada asegurando la integridad de la información.</p>
        </Container>
        <Container className="pointersContainer">
            <Row>
                <Pointers img={globo} text={"Registro y certificación de la inmunidad personal a diferentes patógenos. Adhesión voluntaria y geo localizada"} />
                <Pointers img={calendario} text={"Administración del calendario, compatibilidad de vacunas, disponibilidad de stocks, turnos de aplicación y trazabilidad de lotes aplicados. Seguimiento de efectos secundarios"} />
                <Pointers img={market} text={"Marketplace sanitariamente sustentable"} />
            </Row>
        </Container>
        <Container className="blockchain">
            <Row>
                <Col>
                    <h1>¿Qué aporta la</h1>
                    <h1>tecnología Blockchain?</h1>
                    <p>Es la herramienta encargada de proteger datos y velar por la integridad de la información gracias a características como criptografía e inmutabilidad. </p>
                    <p>Es una tecnología emergente ampliamente usada en países de la Unión Europea. Sin ir más lejos, en el mes de junio de 2021 la UE aprobó la regulación de la Identidad Digital sobre blockchain, lo que permitirá a los ciudadanos moverse entre los países de la región usando los documentos registrados en la cadena de bloques.</p>
                </Col>
                <img src={blockchain} alt="" />
            </Row>
        </Container>
    </div>

)
}

export default Proposito