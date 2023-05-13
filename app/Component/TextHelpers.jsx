import { motion } from "framer-motion";
import { textContainer, letterVariants, textVariants } from "@/lib/motion";

export function MainTitle({ title, direction }) {
  
  
  return (
    <motion.h2 variants={textContainer} initial="hidden" whileInView="show" className={`text-secondary-white capitalize text-normal ${direction}`}>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={letterVariants}   key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  )
}


export function SecondaryTitle({ title, direction }) {
  return (
    <motion.div className={`${direction} font-bold text-white text-5xl`} variants={textVariants(0)} initial="hidden" whileInView="show">
      {title}
    </motion.div>
  )
}