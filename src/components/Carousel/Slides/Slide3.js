import "./Slides.css"
import React from "react"
import image from "../../../img/slide3.png"


const Slide3 = () => {
    return (
    <div className={"slide slide3"}>
        <div className="slideText">
            <h1>Datos de salud infantil en números, ¿Qué puedo hacer para ayudar?</h1> 
            <p>Compartimos el impacto de la Crisis COVID 19 sobre la vacunación de menores y sus riesgos, como también el efecto amplificador de la desigualdad sobre los mismos.</p>
            <button>Ver más</button>
        </div>
        <img src={image} alt="" />
    </div> 
    )
}

export default Slide3