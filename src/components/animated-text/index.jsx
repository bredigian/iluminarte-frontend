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
      <motion.p className="xs:text-sm xs:translate-y-24 sm:translate-y-16 lg:translate-y-0 sm:text-3xl lg:text-5xl lg:p-8 text-white">
        <b className="font-serif">Iluminando</b> cada momento de tu vida
      </motion.p>
    </motion.div>
  )
}

export default AnimatedText
