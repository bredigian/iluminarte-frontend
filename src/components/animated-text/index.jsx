import React, { useState } from "react"
import { delay, motion } from "framer-motion"

const AnimatedText = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: -160 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.7 }}
      className="font-serif absolute w-full text-center"
    >
      <motion.p className="lg:p-8 xs:text-sm sm:text-3xl lg:text-5xl text-fff">
        <b className="font-serif">Iluminando</b> cada momento de tu vida
      </motion.p>
    </motion.div>
  )
  // return (
  //   <div
  //     className={`xs:-translate-y-1xs lg:-translate-y-1 absolute w-full text-center animated-text ${
  //       isVisible ? "fade-out" : "fade-in"
  //     }`}
  //   >
  //     <p className="lg:p-8 xs:text-sm sm:text-3xl lg:text-5xl text-white">
  //       <b className="font-serif">Iluminando</b> cada momento de tu vida
  //     </p>
  //   </div>
  // )
}

export default AnimatedText
