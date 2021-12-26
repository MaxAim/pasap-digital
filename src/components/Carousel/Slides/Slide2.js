import "./Slides.css"
import React from "react"
import appStore from "../../../img/appStore.png"
import playStore from "../../../img/playStore.png"
import { Link } from "react-router-dom"

const Slide2 = () => {
    return (
    <div className={"slides slide2"}>
        <div className="slideText">
            <h1>Bienvenidos a <br /> Pasaporte Sanitario </h1>
            <p>Pasaporte Sanitario  es una solución que combina salud y turismo en una sola app con una base de datos geolocalizados y protegidos mediante tecnología blockchain.</p>
            <Link exact to="/pasap-digital/bienvenidos"><button>VER MÁS</button></Link>
            <div className="rightAnc">
                <a href="https://play.google.com"><img src={playStore} alt="Play Store" /></a>
                <a href="https://apps.apple.com"><img src={appStore} alt="App Store" /></a>
            </div>

        </div>
    </div> 
    )
}

export default Slide2