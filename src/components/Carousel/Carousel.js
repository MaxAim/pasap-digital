import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import nextArrow from "../../img/next_arrow.png"
import prevArrow from "../../img/prev_arrow.png"
import Slide1 from "./Slides/Slide1"
import Slide2 from "./Slides/Slide2"
import Slide3 from "./Slides/Slide3"

const MainCarousel = () => {
  const nextIcon = <img src={nextArrow} className="arrows nextArrow" />;
  const prevIcon = <img src={prevArrow} className="arrows prevArrow" />;
    return (
    <Carousel variant="dark" nextIcon={nextIcon} prevIcon={prevIcon}>
      <Carousel.Item interval={200000}>
        <Slide1 />
      </Carousel.Item>
      <Carousel.Item interval={200000}>
        <Slide2 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide3 />
      </Carousel.Item>
    </Carousel>
    )
}

export default MainCarousel