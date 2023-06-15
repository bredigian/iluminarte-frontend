import React, { useEffect } from "react"

import monthImg1 from "../../assets/images/home/month/velaMonthBackground.png"
import monthImg2 from "../../assets/images/home/month/velaMonthProduct.png"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const VelaMonth = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Puedes ajustar este valor según tus necesidades
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <section className="home-month flex xs:flex-col lg:flex-row lg:justify-center lg:gap-10 items-center w-full overflow-hidden">
      <div className="home-month__bg xs:w-full xs:h-mid lg:w-5 lg:h-[630px] overflow-hidden">
        <img
          className="hover:scale-zoom object-cover ease-in-out duration-300"
          src={monthImg1}
          alt="Fondo de Vela del mes"
        />
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
          <img
            className="xs:w-2 sm:w-2 lg:w-2-5"
            src={monthImg2}
            alt="Vela del mes"
          />
        </motion.div>
        <motion.div className="home-month__product-info max-w-5 flex flex-col items-center gap-4">
          <motion.p className="xs:text-base sm:text-sm xl:text-xl font-bold text-center">
            Candelas blancas de 17 cm
            <br />
            con y sin caja
          </motion.p>
          <motion.button
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
