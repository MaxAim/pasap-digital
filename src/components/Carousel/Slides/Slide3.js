import "./Slides.css"
import React from "react"
import { Link } from "react-router-dom"


const Slide3 = () => {
    return (
    <div className={"slides slide3"}>
        <div className="slideText">
            <h1>Datos de salud infantil en números, ¿Qué puedo hacer para ayudar?</h1> 
            <p>Compartimos el impacto de la Crisis COVID 19 sobre la vacunación de menores y sus riesgos, como también el efecto amplificador de la desigualdad sobre los mismos.</p>
            <Link exact to="/pasap-digital/salud-infantil"><button>VER MÁS</button></Link>
        </div>
    </div> 
    )
}

export default Slide3