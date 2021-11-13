import { Col } from "react-bootstrap"
import "./Pointers.css"

const Pointers = ({img, text}) => {
    return(
    <Col className="pointers">
        <img src={img} alt="" />
        <p>{text}</p>
    </Col>
    )
}

export default Pointers