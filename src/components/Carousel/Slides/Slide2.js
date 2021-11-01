import "./Slides.css"
import React from "react"
import image from "../../../img/slide2.png"


const Slide2 = () => {
    return (
    <div className={"slides slide2"}>
        <div className="slideText">
            <h1>Bienvenidos a <br /> Pasaporte Sanitario </h1>
            <p>Pasaporte Sanitario  es una solución que combina salud y turismo en una sola app con una base de datos geolocalizados y protegidos mediante tecnología blockchain.</p>
            <button>Ver más</button>
        </div>
        <img src={image} alt="" />
    </div> 
    )
}

export default Slide2