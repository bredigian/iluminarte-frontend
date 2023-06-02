import React, { useState } from "react"

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(true)
  const hanldeAnimationEnd = () => {
    setIsVisible(false)
  }
  return (
    <div
      className={`-translate-y-1 w-full text-center animated-text ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      //   onAnimationEnd={hanldeAnimationEnd}
    >
      <p className="p-9 text-5xl text-white">
        <b className="font-serif text-6xl">Iluminando</b> cada momento de tu
        vida
      </p>
    </div>
  )
}

export default AnimatedText
