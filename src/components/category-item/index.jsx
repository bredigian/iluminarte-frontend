import React, { useState } from "react"

const CategoryItem = ({ category }) => {
  const { img, name, description } = category
  const [isHover, setIsHover] = useState(false)
  const handleHover = () => {
    setIsHover(!isHover)
  }
  return (
    <div
      className="categories-item flex flex-col relative overflow-hidden max-w-4"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`categories-item__popup absolute z-10 bg-primary_transparent flex items-center justify-center ease-in-out duration-300 w-full h-full ${
          isHover ? "opacity-1" : "opacity-0"
        }`}
      >
        <button
          type="button"
          className="px-6 py-2 bg-primary text-white font-bold xs:text-base sm:text-xl lg:text-3xl rounded-full cursor-pointer"
        >
          Ver más
        </button>
      </div>
      <div className="categories-item__img relative z-1 overflow-hidden">
        <img
          className={`w-4 object-cover ${
            isHover ? "scale-zoom" : ""
          } ease-in-out transition-transform duration-300`}
          src={img}
          alt={name}
        />
      </div>
      <div className="categories-item__info absolute xs:bottom-4 xs:ml-4 lg:bottom-8 lg:ml-8">
        <h3 className="font-serif text-white xs:text-sm sm:text-2xl lg:text-4xl font-bold">
          {name}
        </h3>
        <p className="text-white xs:text-xs sm:text-base lg:text-2xl">
          {description}
        </p>
      </div>
    </div>
  )
}

export default CategoryItem
