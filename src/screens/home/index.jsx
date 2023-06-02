import { AnimatedText, Categories, HeaderSlider } from "../../components"

import React from "react"

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
    </main>
  )
}

export default Home
