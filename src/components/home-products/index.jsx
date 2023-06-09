import InfiniteSlider from "../infinite-slider"
import React from "react"

const HomeProducts = () => {
  return (
    <section className="home-products flex flex-col items-center gap-8 w-full py-8 bg-light">
      <h1 className="font-serif text-dark xs:text-2xl sm:text-4xl lg:text-6xl font-bold">
        Nuestros productos
      </h1>
      <InfiniteSlider />
      <button
        type="button"
        className="text-fff font-bold xs:text-sm sm:text-base lg:text-2xl bg-tertiary py-2 xs:px-10 px-16 rounded-full"
      >
        Ver más productos
      </button>
    </section>
  )
}

export default HomeProducts
