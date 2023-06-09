import "glider-js/glider.min.css"

import React, { useEffect } from "react"

import Glider from "react-glider"
import img1 from "../../assets/images/header/1.png"
import img2 from "../../assets/images/header/2.png"
import img3 from "../../assets/images/header/3.png"
import img4 from "../../assets/images/header/4.png"
import img5 from "../../assets/images/header/5.png"
import img6 from "../../assets/images/header/6.png"

const HeaderSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6]
  const dots = document.getElementsByClassName("glider-dots")
  useEffect(() => {
    dots[0].style.transform = "translateY(-50px)"
    dots[0].classList.add("absolute")
    dots[0].classList.add("w-full")
  }, [])
  return (
    <div className="slider relative z-1">
      <Glider
        className="glider-container"
        draggable={true}
        hasDots={true}
        slidesToShow={1}
        slidesToScroll={1}
        scrollLock
        dragVelocity={1}
        dots={null}
      >
        {images.map((image, index) => {
          return (
            <div key={index} className="max-h-1">
              <img
                className="xs:h-full xl:h-6-5 w-full object-cover"
                src={image}
                alt=""
              />
            </div>
          )
        })}
      </Glider>
    </div>
  )
}

export default HeaderSlider
