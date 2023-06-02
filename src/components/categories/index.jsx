import React, { useEffect, useState } from "react"
import { categories, width as widthData } from "../../constants"

import Carousel from "nuka-carousel"
import CategoryItem from "../category-item"

const Categories = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleWidth)
    return () => {
      window.removeEventListener("resize", handleWidth)
    }
  }, [])
  return (
    <Carousel
      slidesToShow={width >= widthData.xl ? 3.25 : 2.25}
      slidesToScroll={width >= widthData.xl ? 3 : 2}
      autoplay={true}
      autoplayInterval={5000}
      wrapAround
      renderCenterLeftControls={false}
      renderCenterRightControls={false}
      renderBottomCenterControls={false}
      pauseOnHover={false}
      speed={500}
    >
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Carousel>
  )
}

export default Categories
