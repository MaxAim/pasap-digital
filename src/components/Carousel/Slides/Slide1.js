import "./Slides.css"
import React from "react"
import { Link } from "react-router-dom"


const Slide1 = () => {
    return (
    <div className={"slides slide1"}>
        <div className="slideText">
            <h1>¿Cómo alinea este proyecto con los Objetivos de Desarrollo Sostenible para 2030 de la ONU?</h1>
            <p>Te invitamos a conocer cómo contribuye Pasaporte Sanitario a lograr los Objetivos de Desarrollo Sostenible (ODS) que constituyen un llamamiento universal a la acción para poner fin a la pobreza, proteger el planeta y mejorar las vidas y las perspectivas de las personas en todo el mundo. En 2015, todos los Estados Miembros de las Naciones Unidas aprobaron 17 Objetivos como parte de la Agenda 2030 para el Desarrollo Sostenible.</p>
            <Link exact to="/pasap-digital/onu"><button>VER MÁS</button></Link>
        </div>
    </div> 
    )
}

export default Slide1