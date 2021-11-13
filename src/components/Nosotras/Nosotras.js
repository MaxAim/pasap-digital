import "./Nosotras.css"
import Profesional from "./Profesional/Profesional"
import cecilia from "../../img/cecilia.png"
import veronica from "../../img/veronica.png"

const Nosotras = ({ blockchain }) => {
    return (
    <div className="nosotras">
        <div className="acerca">
            <h1>Acerca de nosotras</h1>
            <p><a href="blockchainar.com.ar">Blockchainar.com.ar</a> es un emprendimiento de dos ingenieras con mucha experiencia profesional y académica en tecnología y mercado.</p>
            <p>Trabajaron tanto en la industria como en el sector público con perspectiva de género y conciliación familia-trabajo.</p>
        </div>
        <span>
            <Profesional foto={cecilia} nombre={"Cecilia"} titulo={"Ingeniera Industrial"} mail={""} linkedin={""} texto={"Trabajó en Buenos Aires en empresas como Procter & Gamble y Pepsico y también en Gestión Pública. Desde 2015 mientras cursaba su MBA surge y mantiene la vocación por emprendimientos STEM."} />
            <Profesional foto={veronica} nombre={"Veronica"} titulo={"Ingeniera en Informática"} mail={""} linkedin={""} texto={"Dirigió proyectos de software en su propio emprendimiento y trabajó en el ámbito público y en el privado. Su objetivo es aplicar el conocimiento adquirido a nuevos emprendimientos tecnológicos."} />
        </span>
    </div>
    )
}

export default Nosotras