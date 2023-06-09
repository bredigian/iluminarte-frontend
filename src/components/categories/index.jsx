import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
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
  const customLeftButton = ({ previousSlide }) => (
    <ChevronLeftIcon
      onClick={previousSlide}
      className="text-dark w-0-8 cursor-pointer ml-10"
    />
  )

  const customRightButton = ({ nextSlide }) => (
    <ChevronRightIcon
      onClick={nextSlide}
      className="text-dark w-0-8 cursor-pointer mr-10"
    />
  )
  return (
    <Carousel
      slidesToShow={width >= widthData.xl ? 3 : 2}
      slidesToScroll={width >= widthData.xl ? 2 : 1}
      wrapAround
      renderCenterLeftControls={
        width >= widthData.xl ? customLeftButton : false
      }
      renderCenterRightControls={
        width >= widthData.xl ? customRightButton : false
      }
      renderBottomCenterControls={false}
      pauseOnHover={false}
      speed={250}
      className="lg:max-w-[1000px] mx-auto"
    >
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Carousel>
  )
}

export default Categories
