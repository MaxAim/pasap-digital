import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Slide1 from "./Slides/Slide1"
import Slide2 from "./Slides/Slide2"
import Slide3 from "./Slides/Slide3"

const MainCarousel = () => {
    return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <Slide1 />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Slide2 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide3 />
      </Carousel.Item>
    </Carousel>
    )
}

export default MainCarousel