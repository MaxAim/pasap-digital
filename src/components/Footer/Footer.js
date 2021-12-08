import "./Footer.css"
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";


const Footer = () => {
    return(
        <div className="footer">
            <div className="redes">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <div>
                ©2021 - BlockchainAR  |   Derechos reservados
            </div>
        </div>
    )
}

export default Footer