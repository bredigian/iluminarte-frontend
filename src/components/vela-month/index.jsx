import React, { useEffect } from "react"

import { Pulsar } from "@uiball/loaders"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useProductsStore } from "../../store"

const VelaMonth = ({ navigate }) => {
  const {
    productOfTheMonth,
    getProductOfTheMonth,
    imageHomeProductOfTheMonth,
    getImageHomeProductOfTheMonth,
  } = useProductsStore()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Puedes ajustar este valor según tus necesidades
  })
  const toProducts = () => {
    navigate("/products")
  }
  useEffect(() => {
    getProductOfTheMonth()
    getImageHomeProductOfTheMonth()
  }, [])
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <section className="home-month flex xs:flex-col lg:flex-row lg:justify-center lg:gap-10 items-center w-full overflow-hidden">
      <div className="home-month__bg xs:w-full xs:h-mid lg:w-5 lg:max-h-[630px] overflow-hidden">
        {!imageHomeProductOfTheMonth ? (
          <Pulsar size={45} />
        ) : (
          <img
            className="hover:scale-zoom object-cover ease-in-out duration-300"
            src={imageHomeProductOfTheMonth || null}
            alt="Fondo de Vela del mes"
          />
        )}
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
        className={`home-month__product xs:p-4 flex flex-col items-center gap-4`}
      >
        <motion.h1 className="font-serif text-dark xs:text-xl sm:text-3xl xl:text-5xl font-bold">
          Vela del mes
        </motion.h1>
        <motion.div className="home-month__product-img">
          {!productOfTheMonth ? (
            <div className="h-[300px] grid place-items-center">
              <Pulsar size={45} />
            </div>
          ) : (
            <img
              className="xs:w-2 sm:w-2 lg:w-2-5"
              src={productOfTheMonth?.IMAGENES[0]?.IMAGEN}
              alt="Vela del mes"
            />
          )}
        </motion.div>
        <motion.div className="home-month__product-info max-w-5 flex flex-col items-center gap-4">
          <motion.p className="xs:text-base sm:text-sm xl:text-xl font-bold text-center">
            {productOfTheMonth?.NOMBRE}
          </motion.p>
          <motion.button
            onClick={toProducts}
            type="button"
            className="xs:text-sm sm:text-base lg:text-lg xl:text-2xl text-white font-bold bg-tertiary xs:px-10 px-16 py-2 mt-4 rounded-full cursor-pointer"
          >
            Ver más
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VelaMonth
