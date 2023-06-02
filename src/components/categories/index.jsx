import "react-slideshow-image/dist/styles.css"

import Carousel from "nuka-carousel"
import CategoryItem from "../category-item"
import React from "react"
import { categories } from "../../constants"

const Categories = () => {
  return (
    <Carousel
      slidesToShow={3.25}
      slidesToScroll={3}
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
