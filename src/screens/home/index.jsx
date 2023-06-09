import {
  AnimatedText,
  Categories,
  HeaderSlider,
  InfiniteSlider,
} from "../../components"
import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import aboutImg from "../../assets/images/about/nosotros.png"
import blogImg from "../../assets/images/blog/fabricadasVelas.png"
import monthImg1 from "../../assets/images/month/velaMonthBackground.png"
import monthImg2 from "../../assets/images/month/velaMonthProduct.png"
import { useInView } from "react-intersection-observer"

const Home = () => {
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
    <main className="home flex flex-col w-full gap-20">
      <section className="home-slider">
        <HeaderSlider />
        <AnimatedText />
      </section>
      <section className="home-categories xs:p-4 sm:p-8">
        <Categories />
      </section>
      <section className="home-about w-full grid place-items-center pb-8">
        <div className="home_about__info absolute flex xs:flex-col xs:px-4 lg:flex-row items-center justify-center gap-8 w-full">
          <div className="home_about__info-title flex flex-col items-start gap-4 max-w-7">
            <h1 className="text-white font-serif font-bold xs:text-3xl sm:text-4xl lg:text-6xl">
              Nuestra historia
            </h1>
            <p className="text-white xs:text-lg sm:text-2xl lg:text-4xl font-bold lg:max-w-[550px]">
              Sabias que nuestro negocio inició en el patio de una casa
            </p>
          </div>
          <button
            type="button"
            className="bg-secondary xs:text-lg sm:text-1xl lg:text-3xl text-white font-bold px-10 py-2 rounded-full"
          >
            Conocer más
          </button>
        </div>
        <div className="home-about__img h-2 w-full">
          <img
            className="h-full w-full object-cover"
            src={aboutImg}
            alt="Acerca de nosotros"
          />
        </div>
      </section>
      <section className="home-blog pt-8 mt-xl flex xs:flex-col xs:items-start xl:flex-row xxl:justify-center xxl:gap-8 h-6-5 w-full bg-white-transparent">
        <div className="home-blog__img w-4-5 -translate-y-28">
          <img className="w-full" src={blogImg} alt="Creacion de velas" />
        </div>
        <div
          className={`home-blog__info flex flex-col xs:items-center xs:gap-6 gap-20 p-4 max-w-7 mt-20`}
        >
          <h1 className="font-serif font-bold xs:text-1xl sm:text-4xl xl:text-6xl text-dark">
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
            <motion.p className="xs:text-base sm:text-lg lg:text-2xl font-bold text-dark">
              {" "}
              Nuestras veladoras y candelas fabricadas responsablemente, por
              artesanos que mezclan métodos ancestrales y modernos, dando paso a
              productos de alta calidad y precio justo.
            </motion.p>
          </motion.div>
          <button
            type="button"
            className="bg-tertiary text-white font-bold xs:text-lg sm:text-xl text-3xl px-16 py-2 rounded-full cursor-pointer"
          >
            Ver más
          </button>
        </div>
      </section>
      <section className="home-month flex xs:flex-col lg:flex-row lg:justify-center lg:gap-10 items-center w-full overflow-hidden">
        <div className="home-month__bg xs:w-full xs:h-mid lg:w-5 lg:h-[630px] overflow-hidden">
          <img
            className="hover:scale-zoom object-cover ease-in-out duration-300"
            src={monthImg1}
            alt="Fondo de Vela del mes"
          />
        </div>
        <div
          className={`home-month__product xs:p-4 flex flex-col items-center gap-4 animated-text fade-in`}
        >
          <h1 className="font-serif text-dark xs:text-xl sm:text-3xl xl:text-5xl font-bold">
            Vela del mes
          </h1>
          <div className="home-month__product-img">
            <img
              className="xs:w-2 sm:w-2 lg:w-2-5"
              src={monthImg2}
              alt="Vela del mes"
            />
          </div>
          <div className="home-month__product-info max-w-5 flex flex-col items-center gap-4">
            <p className="xs:text-base sm:text-sm xl:text-xl font-bold text-center">
              Candelas blancas de 17 cm
              <br />
              con y sin caja
            </p>
            <button
              type="button"
              className="xs:text-sm sm:text-base lg:text-lg xl:text-2xl text-white font-bold bg-tertiary xs:px-10 px-16 py-2 mt-4 rounded-full cursor-pointer"
            >
              Ver más
            </button>
          </div>
        </div>
      </section>
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
    </main>
  )
}

export default Home
