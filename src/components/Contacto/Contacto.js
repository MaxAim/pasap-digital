import React, { useRef } from 'react';
import emailjs, { init } from 'emailjs-com';
import "./Contacto.css"
import mail from "../../img/mailInverse.png";
import phone from "../../img/phone.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";


const Contacto = () => {
    init("user_xeXq38KJSQF8B4Jb3RGuh");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ng061r8', 'template_1u2vdda', form.current, 'user_xeXq38KJSQF8B4Jb3RGuh')
    };

    return(
        <div className="contacto">
            <h1>Contacto</h1>
            <div className="formulario" >
                <span>
                    <b>ESCRIBINOS</b>
                    <p>Para que podamos ayudarte mejor, por favor completá el formulario y nos comunicaremos con vos muy pronto. ¡Gracias!</p>
                    <p><img src={phone} alt="" />+54 11 5689 5895</p>
                    <p><img src={mail} alt="" />info@blockchainar.com.ar</p>
                    <div className="redes">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </span>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Nombre" />
                    <input type="email" name="user_email" placeholder="Mail" />
                    <textarea name="message" placeholder="Escribe aquí" />
                    <input className="submit" type="submit" value="ENVIAR" />
                </form>
            </div>
        </div>
    )
}


export default Contacto