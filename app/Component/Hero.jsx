"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import cover from "/public/cover.png"
import stamp from "/public/stamp.png"
import { textVariants, slideIn, stampVariants } from "@/lib/motion";



function Hero() {
  return ( 
    <section className="pl-4 md:pl-24">
      <div className="h-[calc(100vh-100px)] overflow-hidden">
        <div className="relative z-10 flex flex-col space-y-4 h-full pt-20">
          <div className="md:pr-24">
            <motion.h1 className="uppercase font-bold text-center text-5xl md:text-8xl text-white" variants={textVariants(1.1)} initial="hidden" whileInView="show">metaverse</motion.h1>
            <motion.div className="flex justify-center relative z-10 text-5xl md:text-8xl" variants={textVariants(1.2)} initial="hidden" whileInView="show">
            <h1 className="uppercase font-bold text-center text-white">ma</h1>
            <h1 className=" border-white border-[7px] md:border-[15px] w-16 md:w-48 h-9 md:h-[70px] border-r-[7px] md:border-r-[15px] rounded-r-full mt-2 md:mt-4"></h1>
            <h1 className="uppercase font-bold text-center text-white">ness</h1>
            </motion.div>
          </div>
          <motion.div variants={slideIn("right", "tween", 0.2, 1)} initial="hidden" whileInView="show" className="relative -mt-4 h-full">
            <div className=" -top-14 rounded-tl-[140px] hero-gradient absolute z-0" />
            <Image src={cover} width={5000} height={5000} alt="cover" className="object-cover w-full h-[111%] md:h-full  relative z-10 rounded-tl-[140px] -top-10 "/>
            
          </motion.div>
          </div>
      </div>
      <motion.a href="#explore">
        <motion.div className="w-fit justify-end relative z-10  -mt-28 md:-mt-36 origin-center float-right mr-6 md:mr-12" variants={stampVariants} initial="hidden" whileInView="show">
          <Image src={stamp} alt="stamp" width={120} height={120} className="w-20 md:w-28 h-20 md:h-28 object-contain" />
        </motion.div>
      </motion.a>
    </section>
   );
}

export default Hero;