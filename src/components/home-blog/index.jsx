import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import blogImg from "../../assets/images/home/blog/fabricadasVelas.png"
import { useInView } from "react-intersection-observer"

const HomeBlog = ({ navigate }) => {
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
    <section className="home-blog pt-8 xs:gap-4 lg:mt-xl flex xs:flex-col xs:items-center  lg:items-start lg:flex-row xxl:justify-center xxl:gap-8 h-6-5 w-full bg-white-transparent">
      <div className="home-blog__img xs:w-[200px] lg:w-4-5 lg:-translate-y-28">
        <img className="w-full" src={blogImg} alt="Creacion de velas" />
      </div>
      <div
        className={`home-blog__info flex flex-col xs:items-center xs:gap-6 p-4 max-w-7 lg:mt-20`}
      >
        <h1 className="font-serif font-bold xs:text-xl sm:text-4xl xl:text-6xl text-dark">
          Fabricadas Responsablemente
        </h1>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
        >
          <motion.p className="xs:text-base xs:text-center lg:text-start sm:text-lg lg:text-2xl font-bold text-dark">
            Nuestras veladoras y candelas fabricadas responsablemente, por
            artesanos que mezclan métodos ancestrales y modernos, dando paso a
            productos de alta calidad y precio justo.
          </motion.p>
        </motion.div>
        <button
          onClick={() => navigate("/blog")}
          type="button"
          className="bg-tertiary text-white font-bold xs:text-xs sm:text-xl text-3xl xs:px-8 xs:py-2 lg:px-16 lg:py-2 rounded-full cursor-pointer"
        >
          Ver más
        </button>
      </div>
    </section>
  )
}

export default HomeBlog
