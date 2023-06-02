import React, { useState } from "react"

const AnimatedText = ({ isVisible }) => {
  return (
    <div
      className={`xs:-translate-y-1xs lg:-translate-y-1 absolute w-full text-center animated-text ${
        isVisible ? "fade-out" : "fade-in"
      }`}
    >
      <p className="lg:p-9 xs:text-sm sm:text-3xl lg:text-5xl text-white">
        <b className="font-serif">Iluminando</b> cada momento de tu vida
      </p>
    </div>
  )
}

export default AnimatedText
