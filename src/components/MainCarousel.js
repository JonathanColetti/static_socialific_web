import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import logo from "../media/logo.png"


export default function MainCarousel() {
  return (
    <Carousel style={{}}>
      <Carousel.Item>
        <img alt='logo' className='' src={logo} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt='logo' className='' src={logo} />
      </Carousel.Item>
      <Carousel.Item>
        <img alt='logo' className='' src={logo} />
      </Carousel.Item>
    </Carousel>

  )
}
