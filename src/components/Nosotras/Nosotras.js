import "./Nosotras.css"
import Profesional from "./Profesional/Profesional"
import cecilia from "../../img/cecilia.png"
import veronica from "../../img/veronica.png"

const Nosotras = ({ pasap }) => {
    return (
    <div className="nosotras" style={{backgroundColor: pasap && "aliceblue"}}>
        <div id="nosotras" />
        <div className="acerca">
            <h1 style={{color: pasap && "#505D68"}}>Acerca de nosotras</h1>
            <p><a href="blockchainar.com.ar">Blockchainar.com.ar</a> es un emprendimiento de dos ingenieras con mucha experiencia profesional y académica en tecnología y mercado.</p>
            <p>Trabajaron tanto en la industria como en el sector público con perspectiva de género y conciliación familia-trabajo.</p>
        </div>
        <div className="nosotrasBlockContainer" style={{display: pasap && "none"}}>
            <div className="nosotrasBlock">
                <h1 style={{right: "8.5vw"}}>1</h1>
                <h2>Quienes somos</h2>
                <p>Nuestro equipo posee conocimiento en la industria manufacturera, energética, en salud y en agronegocios.</p>
            </div>
            <div className="nosotrasBlock">
                <h1>2</h1>
                <h2>Tecnología</h2>
                <p>Tenemos experiencia en el desarrollo de tecnología blockchain y smart contracts. Estamos seguros que la transferencia tecnológica en el mercado nacional es el camino al desarrollo.</p>
            </div>
            <div className="nosotrasBlock">
                <h1>3</h1>
                <h2>Objetivos de desarrollo sostenible</h2>
                <p>En cada producto o proyecto, alineamos nuestros objetivos con los ODS promovidos por Naciones Unidas. Queremos cuidar el planeta del que somos parte.</p>
            </div>
        </div>
        <span>
            <Profesional foto={cecilia} nombre={"Cecilia"} titulo={"Ingeniera Industrial"} mail={""} linkedin={""} texto={"Trabajó en Buenos Aires en empresas como Procter & Gamble y Pepsico y también en Gestión Pública. Desde 2015 mientras cursaba su MBA surge y mantiene la vocación por emprendimientos STEM."} />
            <Profesional foto={veronica} nombre={"Veronica"} titulo={"Ingeniera en Informática"} mail={""} linkedin={""} texto={"Dirigió proyectos de software en su propio emprendimiento y trabajó en el ámbito público y en el privado. Su objetivo es aplicar el conocimiento adquirido a nuevos emprendimientos tecnológicos."} />
        </span>
    </div>
    )
}

export default Nosotras