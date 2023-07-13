import React, { useEffect, useRef, useState } from "react"

import { AboutItem } from "../../components"
import Carousel from "nuka-carousel"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import img1 from "../../assets/images/about/somos-iluminarte.png"
import { motion } from "framer-motion"
import useWidth from "../../hooks/useWidth"
import { years } from "../../constants"

const About = () => {
  const indexMax = years.length
  const [slideIndex, setSlideIndex] = useState(0)
  const width = useWidth()

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
        swiping={false}
      >
        <div className="about-init flex relative xs:flex-col sm:flex-row sm:items-center xs:gap-8 lg:gap-8 justify-evenly w-full">
          <div className="about-title flex flex-col xs:gap-4 lg:gap-12 items-start">
            <h1 className="text-dark xs:text-xl sm:text-5xl font-bold">
              Somos Iluminarte
            </h1>
            <p className="max-w-[520px] xs:text-sm sm:text-lg lg:text-xl">
              Detrás de nuestras marcas, hay mucho más que velas, hay historia y
              tradición, y el deseo de iluminar cada momento de tu vida.
            </p>
            <button
              type="button"
              className="cursor-default flex text-start text-tertiary-dark bg-tertiary-light xs:py-2 xs:px-4 sm:py-4 sm:px-8 items-center rounded-full max-w-4 shadow-2xl"
            >
              <p className="font-bold xs:text-xs sm:text-base lg:text-lg">
                Conocé el camino que nos ha llevado a iluminar tu vida
              </p>
              <ChevronRightIcon
                onClick={handleNextSlide}
                className="bg-white p-2 rounded-full xs:w-[50px] sm:w-[60px] lg:w-[80px] cursor-pointer"
              />
            </button>
          </div>
          <div className="about-img xs:w-[250px] sm:w-[450px] lg:w-6">
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
          animate={
            width > 970
              ? { opacity: 1, y: -120 }
              : width > 768
              ? { opacity: 1, y: -40 }
              : { opacity: 1 }
          }
          transition={{ type: "spring", duration: 0.5, delay: 0.7 }}
          className="progress flex items-center gap-12 xs:justify-center lg:justify-start xl:justify-center xs:w-full sm:w-mid"
        >
          <div
            className="progress-bar h-[10px] rounded-lg bg-gray-light"
            style={
              width > 1400
                ? { width: (indexMax + 1) * 100 }
                : width > 970
                ? { width: (indexMax + 1) * 55 }
                : width > 768
                ? { width: (indexMax + 1) * 75 }
                : { width: (indexMax + 1) * 50 }
            }
          >
            <div
              style={
                width > 1400
                  ? { width: slideIndex * 100 }
                  : width > 970
                  ? { width: slideIndex * 45 }
                  : width > 768
                  ? { width: slideIndex * 55 }
                  : { width: slideIndex * 40 }
              }
              className="progress-bar__item bg-primary h-full rounded-lg transition-300 ease-in-out"
            />
          </div>
          <button
            type="button"
            onClick={handleNextSlide}
            className="bg-primary rounded-full"
          >
            <ChevronRightIcon className="text-white xs:w-[40px] lg:w-[50px] p-2 rounded-full cursor-pointer" />
          </button>
        </motion.div>
      )}
    </section>
  )
}

export default About
