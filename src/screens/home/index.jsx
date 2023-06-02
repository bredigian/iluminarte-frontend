import { AnimatedText, Categories, HeaderSlider } from "../../components"

import React from "react"
import aboutImg from "../../assets/images/about/nosotros.png"
import blogImg from "../../assets/images/blog/fabricadasVelas.png"
import monthImg1 from "../../assets/images/month/velaMonthBackground.png"
import monthImg2 from "../../assets/images/month/velaMonthProduct.png"
import productsImg from "../../assets/images/products/homeProducts.png"

const Home = () => {
  return (
    <main className="home">
      <section className="home-slider">
        <HeaderSlider />
        <AnimatedText />
      </section>
      <section className="home-categories xs:p-4 sm:p-8">
        <Categories />
      </section>
      <section className="home-about w-full pb-8 bg-white">
        <div className="home_about__info absolute flex xs:flex-col xs:px-4 items-center justify-center gap-8 h-about w-full">
          <div className="home_about__info-title flex flex-col items-start gap-4 max-w-7">
            <h1 className="text-white font-serif font-bold xs:text-5xl sm:text-6xl lg:text-8xl">
              Sabías que...
            </h1>
            <p className="text-white xs:text-lg sm:text-2xl lg:text-6xl">
              Nuestro negocio inició en el patio de una casa
            </p>
          </div>
          <button
            type="button"
            className="bg-tertiary xs:text-xl sm:text-2xl lg:text-4xl text-white font-bold px-10 py-2 rounded-full"
          >
            Conocer más
          </button>
        </div>
        <div className="home-about__img h-about w-full">
          <img
            className="h-full w-full object-cover"
            src={aboutImg}
            alt="Acerca de nosotros"
          />
        </div>
      </section>
      <section className="home-blog p-8 flex xs:flex-col xs:items-center xxl:flex-row xxl:items-start xxl:justify-center w-full bg-white">
        <div className="home-blog__img">
          <img className="w-7.5" src={blogImg} alt="Creacion de velas" />
        </div>
        <div className="home-blog__info flex flex-col xs:items-center items-start xs:gap-6 gap-20 p-4 max-w-7">
          <h1 className="font-serif font-bold xs:text-3xl sm:text-6xl xl:text-8xl text-dark xl:-translate-x-1">
            Fabricadas Responsablemente
          </h1>
          <p className="xs:text-base sm:text-lg lg:text-3xl text-dark">
            Nuestras veladoras y candelas fabricadas responsablemente, por
            artesanos que mezclan métodos ancestrales y modernos, dando paso a
            productos de alta calidad y precio justo.
          </p>
          <button
            type="button"
            className="bg-tertiary text-white font-bold xs:text-lg sm:text-xl text-3xl px-16 py-2 rounded-full cursor-pointer"
          >
            Ver más
          </button>
        </div>
      </section>
      <section className="home-month flex xs:flex-col lg:flex-row items-center w-full bg-light overflow-hidden">
        <div className="home-month__bg xs:w-full xs:h-mid lg:w-full overflow-hidden">
          <img
            className="hover:scale-zoom object-cover ease-in-out duration-300"
            src={monthImg1}
            alt="Fondo de Vela del mes"
          />
        </div>
        <div className="home-month__product xs:w-full xs:p-4 w-mid flex flex-col items-center gap-10">
          <h1 className="font-serif text-dark xs:text-3xl sm:text-5xl xl:text-7xl font-bold">
            Vela del mes
          </h1>
          <div className="home-month__product-img">
            <img
              className="xs:w-2 sm:w-2-5 lg:w-3"
              src={monthImg2}
              alt="Vela del mes"
            />
          </div>
          <div className="home-month__product-info max-w-5 flex flex-col items-center gap-4">
            <p className="xs:text-xl sm:text-2xl xl:text-3xl text-center">
              Candelas blancas de 17 cm
              <br />
              con y sin caja
            </p>
            <button
              type="button"
              className="xs:text-sm sm:text-base lg:text-xl xl:text-3xl text-white font-bold bg-tertiary xs:px-10 px-16 py-2 mt-4 rounded-full cursor-pointer"
            >
              Ver más
            </button>
          </div>
        </div>
      </section>
      <section className="home-products flex flex-col items-center gap-8 w-full xs:px-8 py-8 bg-secondary-light">
        <h1 className="font-serif text-dark xs:text-2xl sm:text-5xl lg:text-7xl font-bold">
          Nuestros productos
        </h1>
        <div className="home-products__img w-full">
          <img className="w-full" src={productsImg} alt="" />
        </div>
        <button
          type="button"
          className="text-white font-bold xs:text-sm sm:text-base lg:text-3xl bg-primary py-2 xs:px-10 px-16 rounded-full"
        >
          Ver más productos
        </button>
      </section>
    </main>
  )
}

export default Home
