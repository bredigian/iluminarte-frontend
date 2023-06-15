import React, { useEffect, useRef, useState } from "react"

import { AboutItem } from "../../components"
import Carousel from "nuka-carousel"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import img1 from "../../assets/images/about/somos-iluminarte.png"
import { motion } from "framer-motion"
import { years } from "../../constants"

const About = () => {
  const indexMax = years.length
  const [slideIndex, setSlideIndex] = useState(0)

  const handleNextSlide = () => {
    if (slideIndex < indexMax) {
      setSlideIndex(slideIndex + 1)
    }
    if (indexMax === slideIndex) {
      setSlideIndex(1)
    }
  }
  return (
    <section className="about flex flex-col p-8 w-full bg-about-section bg-auto bg-no-repeat">
      <Carousel
        renderBottomCenterControls={false}
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
        slideIndex={slideIndex}
        pauseOnHover={false}
        dragging={false}
      >
        <div className="about-init flex relative items-center justify-evenly w-full">
          <div className="about-title flex flex-col gap-12 items-start">
            <h1 className="text-dark text-7xl font-bold">Somos Iluminarte</h1>
            <p className="max-w-[520px] text-xl">
              Detrás de nuestras marcas, hay mucho más que velas, hay historia y
              tradición, y el deseo de iluminar cada momento de tu vida.
            </p>
            <button
              type="button"
              className="cursor-default flex text-start text-tertiary-dark bg-tertiary-light py-4 px-8 items-center rounded-full max-w-4 shadow-2xl"
            >
              <p className="font-bold text-lg">
                Conocé el camino que nos ha llevado a iluminar tu vida
              </p>
              <ChevronRightIcon
                onClick={handleNextSlide}
                width={60}
                className="bg-white p-2 rounded-full cursor-pointer"
              />
            </button>
          </div>
          <div className="about-img w-6">
            <img className="w-full" src={img1} alt="Nosotros" />
          </div>
        </div>
        {years.map((year) => {
          return <AboutItem key={year.id} data={year} />
        })}
      </Carousel>
      {slideIndex > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -120 }}
          transition={{ type: "spring", duration: 0.5, delay: 0.7 }}
          className="progress flex items-center gap-12 justify-center w-mid"
        >
          <div
            className="progress-bar h-[10px] rounded-lg bg-gray-light"
            style={{ width: (indexMax + 1) * 100 }}
          >
            <div
              style={{ width: slideIndex * 100 }}
              className="progress-bar__item bg-primary h-full rounded-lg transition-300 ease-in-out"
            />
          </div>
          <button
            type="button"
            onClick={handleNextSlide}
            className="bg-primary rounded-full"
          >
            <ChevronRightIcon
              width={50}
              className="text-white p-2 rounded-full cursor-pointer"
            />
          </button>
        </motion.div>
      )}
    </section>
  )
}

export default About
