import { AnimatedText, Categories, HeaderSlider } from "../../components"

import React from "react"
import aboutImg from "../../assets/images/about/nosotros.png"
import blogImg from "../../assets/images/blog/fabricadasVelas.png"

const Home = () => {
  return (
    <main className="home">
      <section className="home-slider">
        <HeaderSlider />
        <AnimatedText />
      </section>
      <section className="home-categories p-8">
        <Categories />
      </section>
      <section className="home-about w-full py-8">
        <div className="home_about__info absolute flex items-center justify-center gap-8 h-about w-full">
          <div className="home_about__info-title flex flex-col items-start gap-4 max-w-7">
            <h1 className="text-white font-serif font-bold text-8xl">
              Sabías que...
            </h1>
            <p className="text-white text-6xl">
              Nuestro negocio inició en el patio de una casa
            </p>
          </div>
          <h3 className="bg-tertiary text-4xl text-white font-bold px-10 py-3 rounded-full">
            Conocer más
          </h3>
        </div>
        <div className="home-about__img h-about w-full">
          <img
            className="h-full w-full object-cover"
            src={aboutImg}
            alt="Acerca de nosotros"
          />
        </div>
      </section>
      <section className="home-blog p-8 flex items-start justify-center w-full">
        <div className="home-blog__img">
          <img className="w-7.5" src={blogImg} alt="Creacion de velas" />
        </div>
        <div className="home-blog__info flex flex-col items-start gap-20 p-4 max-w-7">
          <h1 className="font-serif font-bold text-8xl text-dark -translate-x-1">
            Fabricadas Responsablemente
          </h1>
          <p className="text-3xl">
            Nuestras veladoras y candelas fabricadas responsablemente, por
            artesanos que mezclan métodos ancestrales y modernos, dando paso a
            productos de alta calidad y precio justo.
          </p>
          <h3 className="bg-tertiary text-white font-bold text-3xl px-16 py-3 rounded-full">
            Ver más
          </h3>
        </div>
      </section>
    </main>
  )
}

export default Home
