import "glider-js/glider.min.css"

import Glider from "react-glider"
import React from "react"
import img1 from "../../assets/images/header/1.png"
import img2 from "../../assets/images/header/2.png"
import img3 from "../../assets/images/header/3.png"

const HeaderSlider = () => {
  return (
    <div className="slider relative z-1">
      <Glider
        className="glider-container"
        draggable={false}
        hasDots
        slidesToShow={1}
        slidesToScroll={1}
        scrollLock
      >
        <div className="pb-4">
          <img className="max-h-1 w-full object-cover" src={img1} alt="" />
        </div>
        <div className="pb-4">
          <img className="max-h-1 w-full object-cover" src={img2} alt="" />
        </div>
        <div className="pb-4">
          <img className="max-h-1 w-full object-cover" src={img3} alt="" />
        </div>
      </Glider>
    </div>
  )
}

export default HeaderSlider
