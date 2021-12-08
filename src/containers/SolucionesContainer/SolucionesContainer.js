import "./SolucionesContainer.css";
import Soluciones from "../../components/Soluciones/Soluciones";
import energiarenovable from "../../img/energiarenovable.png";
import greenh from "../../img/greenh.png";
import mhealth from "../../img/mhealth.png";
import vinocertificado from "../../img/vinocertificado.png";
import hexagons from "../../img/hexagons.png";

const SolucionesContainer = () => {
    return (
    <div className="solucionesContainer">
        <img className="hexagons" src={hexagons} alt="" />
        <div>
            <div className="solucionesInfo">
                <h1>¿Qué aporta la tecnología Blockchain?</h1>
                <div>
                    <p>Es la herramienta encargada de proteger datos y velar por la integridad de la información gracias a características como criptografía e inmutabilidad. </p>
                    <p>Es una tecnología emergente ampliamente usada en países de la Unión Europea. Sin ir más lejos, en el mes de junio de 2021 la UE aprobó la regulación de la Identidad Digital sobre blockchain, lo que permitirá a los ciudadanos moverse entre los países de la región usando los documentos registrados en la cadena de bloques.</p>
                    <p>Estos beneficios hacen que blockchain obtenga protagonismo en el mercado, permitiendo escalar en el mismo a la vez que se cumplen con los máximos estándares internacionales de resguardo de la información.</p>
                    <p>El abanico de industrias para implementar tecnologías DLT es muy amplio, abarca desde servicios financieros, certificaciones de títulos, derechos de propiedad privada, criptomonedas, registro de activos, registro de bienes personales, hasta el seguimiento de cadenas de suministro de todas las índoles.</p>
                </div>
            </div>
            <div className="solucionesSubContainer">
                <h2>Nuestras soluciones</h2>
                <div className="solucionesRowContainer">
                    <Soluciones title="Certificados de Energías Renovables" img={energiarenovable} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…" />
                    <Soluciones title="Trazabilidad en procesos de energía limpia – Green H" img={greenh} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…" />
                </div>
                <div className="solucionesRowContainer">
                    <Soluciones title="Blockchain para MHealth" img={mhealth} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…" />
                    <Soluciones title="Certificación de origen de vinos de autor" img={vinocertificado} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default SolucionesContainer