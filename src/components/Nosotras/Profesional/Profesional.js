import "./Profesional.css"
import linkedinImg from "../../../img/linkedin.png"
import mailImg from "../../../img/mail.png"

const Profesional = ({foto, nombre, titulo, texto, mail, linkedin}) => {
    return(
        <div className="profesional">
            <img src={foto} className="foto" alt="" />
            <b>{nombre}</b>
            <h6>{titulo}</h6>
            <p>{texto}</p>
            <span>
                <a href={"mailto:" + mail}><img src={mailImg} alt="" /></a>
                <a href={linkedin}><img src={linkedinImg} alt="" /></a>
            </span>
        </div>
    )
}

export default Profesional