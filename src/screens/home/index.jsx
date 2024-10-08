import {
  AnimatedText,
  Categories,
  HeaderSlider,
  HomeBlog,
  HomeProducts,
  VelaMonth,
} from "../../components"

import { Parallax } from "react-parallax"
import React from "react"
import aboutImg from "../../assets/images/home/about/nosotros.png"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <main className="home flex flex-col w-full gap-20">
      <section className="home-slider">
        <HeaderSlider />
        <AnimatedText />
      </section>
      <Categories />
      <Parallax
        bgImage={aboutImg}
        bgImageAlt="Nosotros"
        strength={500}
        bgClassName="xs:object-cover"
      >
        <div className="home_about__info flex xs:flex-col xs:p-8 lg:p-[125px] lg:flex-row items-center justify-center gap-8 w-full">
          <div className="home_about__info-title flex flex-col xs:items-center lg:items-start gap-4 max-w-7">
            <h1 className="text-white font-serif font-bold xs:text-3xl sm:text-4xl lg:text-6xl">
              Nuestra historia
            </h1>
            <p className="text-white xs:text-center xs:text-lg sm:text-2xl lg:text-4xl lg:text-start font-bold lg:max-w-[550px]">
              Sabias que nuestro negocio inició en el patio de una casa
            </p>
          </div>
          <button
            onClick={() => navigate("/about")}
            type="button"
            className="bg-secondary xs:text-xs sm:text-1xl lg:text-2xl text-white font-bold px-10 py-2 rounded-full"
          >
            Conocer más
          </button>
        </div>
      </Parallax>
      <HomeBlog navigate={navigate} />
      <VelaMonth navigate={navigate} />
      <HomeProducts navigate={navigate} />
    </main>
  )
}

export default Home
