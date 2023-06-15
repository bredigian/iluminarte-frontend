import React from "react"

const AboutItem = ({ data }) => {
  return (
    <div className="about-carousel__item flex w-full justify-evenly items-center">
      <div className="about-carousel__item-info flex flex-col items-star gap-8">
        <h1 className="font-bold text-9xl">{data?.date}</h1>
        <p className="text-xl max-w-[530px]">{data?.description}</p>
      </div>
      <div className="about-carousel__item-img w-6">
        <img src={data?.img} alt={data?.date} />
      </div>
    </div>
  )
}

export default AboutItem
