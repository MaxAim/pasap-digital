import React from 'react'
import tilde from "../img/tilde.png"
import grafico from "../img/CELULAR.png"
import "./pages.css";
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export const FirstPage = () => {
    return (
        <>
            <NavBar pasap={true} />
            <div className="pasaporte1">
                <h1>Pasaporte Sanitario</h1>
                <p>Pasaporte Sanitario (PS) es una propuesta que combina salud, esparcimiento y turismo (hotelería,
                    gastronomía,
                    entretenimiento, transporte) en una sola app con una base datos geolocalizados, donde el usuario
                    registra
                    sus vacunas con trazabilidad, administra calendarios propios y familiares y recibe información
                    actualizada
                    por expertos en inmunidad dando libertad a decisiones informada sobre su inmunidad.</p>
            </div>
            <div className="grupoFamiliar">
                <div className="caracteristicas">
                    <div className="caracteristicasPasaporte">
                        <div className="img-tilde">
                            <img src={tilde} alt="" />
                        </div>
                        <div className="textoCaracteristicas">
                            <p>Contará con promociones y descuentos turísticos tanto locales como internacionales, en
                                transporte aéreo, cruceros, alojamiento, restaurantes
                            </p>
                        </div>
                    </div>
                    <div className="caracteristicasPasaporte">
                        <div className="img-tilde">
                            <img src={tilde} alt="" />
                        </div>
                        <div className="textoCaracteristicas">
                            <p>Trivias y concursos con premios, mayores descuestos para estimular el conocimiento sobre
                                las
                                vacunas
                            </p>
                        </div>
                    </div>
                    <div className="caracteristicasPasaporte">
                        <div className="img-tilde">
                            <img src={tilde} alt="" />
                        </div>
                        <div className="textoCaracteristicas">
                            <p>Seguimiento del calendario de vacunación con alertas. Combinaciones y sustitutos posibles
                                para el individuo y su grupo familiar. Información sobre disponibilidad geo localizada
                                de
                                vacunas, turnos y listas de espera
                            </p>
                        </div>
                    </div>
                    <div className="caracteristicasPasaporte">
                        <div className="img-tilde">
                            <img src={tilde} alt="" />
                        </div>
                        <div className="textoCaracteristicas">
                            <p>Con la carga de su vacuna con trazabilidad 3WM (EAN+Pasaporte+Punto de expendio, SISA,
                                certificado de vacunación con lote + DNI) Se podrá certificar vacunación y facilitar
                                visas
                            </p>
                        </div>
                    </div>
                </div>
                <div className="imagen-grafico">
                    <img src={grafico} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}
