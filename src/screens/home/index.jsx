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
      <section className="home-categories px-8 pb-12">
        <Categories />
      </section>
      <section className="home-about w-full pb-8 bg-white">
        <div className="home_about__info absolute flex items-center justify-center gap-8 h-about w-full">
          <div className="home_about__info-title flex flex-col items-start gap-4 max-w-7">
            <h1 className="text-white font-serif font-bold text-8xl">
              Sabías que...
            </h1>
            <p className="text-white text-6xl">
              Nuestro negocio inició en el patio de una casa
            </p>
          </div>
          <button
            type="button"
            className="bg-tertiary text-4xl text-white font-bold px-10 py-2 rounded-full"
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
      <section className="home-blog p-8 flex items-start justify-center w-full bg-white">
        <div className="home-blog__img">
          <img className="w-7.5" src={blogImg} alt="Creacion de velas" />
        </div>
        <div className="home-blog__info flex flex-col items-start gap-20 p-4 max-w-7">
          <h1 className="font-serif font-bold text-8xl text-dark -translate-x-1">
            Fabricadas Responsablemente
          </h1>
          <p className="text-3xl text-dark">
            Nuestras veladoras y candelas fabricadas responsablemente, por
            artesanos que mezclan métodos ancestrales y modernos, dando paso a
            productos de alta calidad y precio justo.
          </p>
          <button
            type="button"
            className="bg-tertiary text-white font-bold text-3xl px-16 py-2 rounded-full cursor-pointer"
          >
            Ver más
          </button>
        </div>
      </section>
      <section className="home-month flex items-center w-full bg-light overflow-hidden">
        <div className="home-month__bg w-mid overflow-hidden">
          <img
            className="hover:scale-zoom object-cover ease-in-out duration-300"
            src={monthImg1}
            alt="Fondo de Vela del mes"
          />
        </div>
        <div className="home-month__product w-mid flex flex-col items-center gap-10">
          <h1 className="font-serif text-dark text-7xl font-bold">
            Vela del mes
          </h1>
          <div className="home-month__product-img">
            <img className="w-4" src={monthImg2} alt="Vela del mes" />
          </div>
          <div className="home-month__product-info max-w-5 flex flex-col items-center gap-4">
            <p className="text-3xl text-center">
              Candelas blancas de 17 cm
              <br />
              con y sin caja
            </p>
            <button
              type="button"
              className="text-3xl text-white font-bold bg-tertiary px-16 py-2 rounded-full cursor-pointer"
            >
              Ver más
            </button>
          </div>
        </div>
      </section>
      <section className="home-products flex flex-col items-center gap-8 w-full py-8 bg-secondary-light">
        <h1 className="font-serif text-dark text-7xl font-bold">
          Nuestros productos
        </h1>
        <div className="home-products__img">
          <img src={productsImg} alt="" />
        </div>
        <button
          type="button"
          className="text-white font-bold text-3xl bg-primary py-2 px-16 rounded-full"
        >
          Ver más productos
        </button>
      </section>
    </main>
  )
}

export default Home
