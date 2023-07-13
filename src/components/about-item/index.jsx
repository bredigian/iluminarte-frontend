import React from "react"

const AboutItem = ({ data }) => {
  return (
    <div className="about-carousel__item flex xs:flex-col sm:flex-row w-full justify-evenly xs:items-start xs:gap-4 lg:items-center">
      <div className="about-carousel__item-info flex flex-col items-star xs:gap-4 lg:gap-8">
        <h1 className="font-bold xs:ml-4 sm:ml-0 xs:text-5xl sm:text-7xl lg:text-9xl">
          {data?.date}
        </h1>
        <p className="xs:text-xs sm:text-lg lg:text-xl max-w-[530px]">
          {data?.description}
        </p>
      </div>
      <div className="about-carousel__item-img xs:w-full sm:w-[450px] lg:w-6">
        <img src={data?.img} alt={data?.date} />
      </div>
    </div>
  )
}

export default AboutItem
