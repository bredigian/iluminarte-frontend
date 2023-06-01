import React from "react"
import { Slider } from "../../components"

const Home = () => {
  return (
    <main className="home">
      <section className="home-slider">
        <Slider />
        <div className="-translate-y-1 w-full text-center">
          <p className="p-9 text-5xl text-white">
            <b className="font-serif text-6xl">Iluminando</b> cada momento de tu
            vida
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
