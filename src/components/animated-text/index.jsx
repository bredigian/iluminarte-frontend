import React, { useState } from "react"
import { delay, motion } from "framer-motion"

const AnimatedText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: -160 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.7 }}
      className="font-serif absolute w-full text-center"
    >
      <motion.p className="lg:p-8 xs:text-sm sm:text-3xl lg:text-5xl text-white">
        <b className="font-serif">Iluminando</b> cada momento de tu vida
      </motion.p>
    </motion.div>
  )
}

export default AnimatedText
