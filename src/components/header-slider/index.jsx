import Carousel from "nuka-carousel"
import React from "react"
import img1 from "../../assets/images/header/1.png"
import img2 from "../../assets/images/header/2.png"
import img3 from "../../assets/images/header/3.png"
import img4 from "../../assets/images/header/4.png"
import img5 from "../../assets/images/header/5.png"
import img6 from "../../assets/images/header/6.png"

const HeaderSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6]
  const renderBottomCenterControls = ({
    currentSlide,
    slideCount,
    goToSlide,
  }) => {
    const circles = Array.from({ length: slideCount }, (_, index) => (
      <div
        key={index}
        className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
          index === currentSlide ? "bg-primary" : "bg-[#ffffff65]"
        }`}
        onClick={() => goToSlide(index)}
      />
    ))

    return (
      <div className="custom-bottom-controls flex items-center gap-2 mb-6">
        {circles}
      </div>
    )
  }
  return (
    <div className="slider relative z-1">
      <Carousel
        className="glider-container"
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
        renderBottomCenterControls={renderBottomCenterControls}
        wrapAround
        autoplay
        autoplayInterval={10000}
        pauseOnHover={false}
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
      </Carousel>
    </div>
  )
}

export default HeaderSlider
