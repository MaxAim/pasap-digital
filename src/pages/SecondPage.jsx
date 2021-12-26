import React from 'react'
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ods13 from "../img/ODS-13.png";
import ods14 from "../img/ODS-14.png";
import ods15 from "../img/ODS-15.png";
import ods16 from "../img/ODS-16.png";
import ods17 from "../img/ODS-17.png";
import ods18 from "../img/ODS-18.png";
import "./pages.css";

export const SecondPage = () => {
    return (
        <div>
            <NavBar pasap={true} />
            <h1 className="saludInfantilh1">¿Cómo nos alineamos con los ODS de la ONU?</h1>
            <section className="cardsContainer">
                <div className="cards-2">
                    <div className="mb-4">
                        <div className="cardtype1">
                            <img src={ods13} alt="" />
                            <div className="parrafosFlex">
                                <p>1.3&nbsp;&nbsp;&nbsp;Poner en práctica a nivel nacional sistemas y medidas apropiadas de
                                    protección
                                    social para todos y, para 2030, lograr una amplia cobertura de los pobres y los más
                                    vulnerables
                                </p>
                                <p>1.4&nbsp;&nbsp;&nbsp;Para 2030, garantizar que todos los hombres y mujeres, en
                                    particular los
                                    pobres y los más vulnerables, tengan los mismos derechos a los recursos económicos, así
                                    como
                                    acceso a los servicios básicos, la propiedad y el control de las tierras y otros bienes,
                                    la
                                    herencia, los recursos naturales, las nuevas tecnologías y los servicios económicos,
                                    incluida la
                                    microfinanciación
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cardtype1">
                        <img src={ods15} alt="" />
                        <div className="parrafosFlex">
                            <p>Los efectos de&nbsp;la pandemia de la COVID-19 podrían revertir los escasos logros&nbsp;que
                                se han
                                alcanzado en materia de igualdad de género y derechos de las mujeres.&nbsp; El brote de
                                coronavirus&nbsp;agrava las desigualdades existentes&nbsp;para las mujeres y niñas a nivel
                                mundial;
                                desde la salud y la economía, hasta la seguridad y la protección social
                            </p>
                            <p> 5.b&nbsp;&nbsp;Mejorar el uso de la tecnología instrumental, en particular la tecnología de
                                la
                                información y las comunicaciones, para promover el empoderamiento de las mujeres
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-1">
                    <div className="cardLarge">
                        <img src={ods14} alt="" />
                        <div className="parrafosFlex">
                            <p>
                                3.2&nbsp; Para 2030, poner fin a las muertes evitables de recién nacidos y de niños menores
                                de 5 años,
                                logrando que todos los países intenten reducir la mortalidad neonatal al menos hasta 12 por
                                cada 1.000
                                nacidos vivos, y la mortalidad de niños menores de 5 años al menos hasta 25 por cada 1.000
                                nacidos
                                vivos
                            </p>
                            <p> 3.3&nbsp; Para 2030, poner fin a las epidemias del SIDA, la tuberculosis, la malaria y las
                                enfermedades tropicales desatendidas y combatir la hepatitis, las enf. transmitidas por el
                                agua y
                                otras enfermedades transmisibles
                            </p>
                            <p>3.8&nbsp; Lograr la cobertura sanitaria universal, en particular la protección contra los
                                riesgos
                                financieros, el acceso a servicios de salud esenciales de calidad y el acceso a medicamentos
                                y vacunas
                                seguros, eficaces, asequibles y de calidad para todos
                            </p>
                            <p>3.b&nbsp; Apoyar las actividades de investigación y desarrollo de vacunas y medicamentos
                                para las
                                enfermedades transmisibles y no transmisibles que afectan primordialmente a los países en
                                desarrollo y
                                facilitar el acceso a medicamentos y vacunas esenciales asequibles de conformidad con la
                                Declaración
                                de Doha relativa al Acuerdo sobre los ADPIC y la Salud Pública, en la que se afirma el
                                derecho de los
                                países en desarrollo a utilizar al máximo las disposiciones del Acuerdo sobre los Aspectos
                                de los
                                Derechos de Propiedad Intelectual Relacionados con el Comercio en lo relativo a la
                                flexibilidad para
                                proteger la salud pública y, en particular, proporcionar acceso a los medicamentos para
                                todos
                            </p>
                            <p> 3.d&nbsp; Reforzar la capacidad de todos los países, en particular los países en desarrollo,
                                en
                                materia de alerta temprana, reducción de riesgos y gestión de los riesgos para la salud
                                nacional y
                                mundial
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="medium-card">
                <div className="card-single">
                    <img src={ods16} alt="" />
                    <p>
                        8.9&nbsp;&nbsp;De aquí a 2030, elaborar y poner en práctica políticas encaminadas a promover un
                        turismo
                        sostenible que cree puestos de trabajo y promueva la cultura y los productos locales
                    </p>
                </div>
            </section>
            <section className="cardsContainer">
                <div className="cards-2">
                    <div className="cardtype1">
                        <img src={ods17} alt="" />
                        <div className="parrafosFlex">
                            <p>
                                El crecimiento del sector manufacturero ha ido disminuyendo constantemente. La pandemia
                                está&nbsp;afectando gravemente a las industrias y está provocando alteraciones en las
                                cadenas de valor
                                mundiales y en el suministro de productos.
                                Las tecnologías de la información y la comunicación&nbsp;han estado en la primera línea de
                                la
                                respuesta a la COVID-19. La crisis ha acelerado la digitalización de muchos negocios y
                                scios… así como
                                el acceso a la sanidad, la educación y los bnes y scios esenciales.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-1">
                    <div className="cardLarge">
                        <img src={ods18} alt="" />
                        <div className="parrafosFlex">
                            <p>
                                10.7&nbsp;Facilitar la migración y la movilidad ordenadas, seguras, regulares y responsables
                                de las
                                personas, incluso mediante la aplicación de políticas migratorias planificadas y bien
                                gestionadas
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
