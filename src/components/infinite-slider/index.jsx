import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React from "react"
import Slider from "react-slick"
import productsImg from "../../assets/images/products/homeProducts.png"

const InfiniteSlider = () => {
  const images = [productsImg, productsImg]

  return (
    <div style={{ width: "100%", height: "fit-content" }}>
      <Slider
        dots={false}
        infinite={true}
        speed={20000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={1}
        cssEase="linear"
        swipe={false}
        focusOnSelect={"false"}
        arrows={false}
        pauseOnHover={false}
        pauseOnFocus={false}
        pauseOnDotsHover={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default InfiniteSlider
