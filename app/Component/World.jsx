"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import map from "/public/map.png"
import people1 from "/public/people-01.png"
import people2 from "/public/people-02.png"
import people3 from "/public/people-03.png"
import people4 from "/public/people-04.jpg"
import { MainTitle, SecondaryTitle } from "./TextHelpers";
import Section from "./Section";
import { fadeIn, mapVariants } from "@/lib/motion";

function World() {
  return (
  <Section>
      <div className="flex flex-col gap-y-4">
        <MainTitle title="| People on the World "direction="text-center" />
        <SecondaryTitle title={<h2 className="lg:px-40 text-2xl md:text-4xl lg:text-5xl">Track friends around you and invite them to play together in the same world</h2>} direction="text-left md:text-center" />
        <div className="mx-auto lg:px-36 mt-10 relative">
          <Image src={map} alt="the map of the world" width={1000} height={1000} className="w-full h-full" />
          <motion.div className="w-6 md:w-14 h-6 md:h-14 rounded-full rounded-bl-2xl -rotate-45 p-1  absolute  bg-[rgba(255,255,255,0.4)] backdrop-blur-sm shadow-md  shadow-black bottom-[22%] right-[10%] lg:right-[18%] " variants={mapVariants(.8)} initial="hidden" whileInView="show">
            <Image src={people1} alt="people 1" width={100} height={100} className="rotate-45"></Image>
          </motion.div>
          <motion.div className="w-6 md:w-14 h-6 md:h-14 rounded-full rounded-bl-2xl -rotate-45 p-1  absolute  bg-[rgba(255,255,255,0.4)] backdrop-blur-sm shadow-md  shadow-black top-[26%] md:top-[22%] lg:top-[32%] right-[42%] lg:right-[44%]" variants={mapVariants(1.4)} initial="hidden" whileInView="show">
            <Image src={people2} alt="people 2" width={100} height={100} className="rotate-45"></Image>
          </motion.div>
          <motion.div className="w-6 md:w-14 h-6 md:h-14 rounded-full rounded-bl-2xl -rotate-45 p-1  absolute bg-[rgba(255,255,255,0.4)] backdrop-blur-sm shadow-md  shadow-black  bottom-1/2 left-[40%] lg:left-[38%]" variants={mapVariants(1.2)} initial="hidden" whileInView="show">
            <Image src={people3} alt="people 3" width={100} height={100} className="rotate-45"></Image>
          </motion.div>
          <motion.div className="w-6 md:w-14 h-6 md:h-14 rounded-full rounded-bl-2xl -rotate-45 p-1  absolute  bg-[rgba(255,255,255,0.4)] backdrop-blur-sm shadow-md  shadow-black top-[12%] lg:top-[16%] left-[8%] lg:left-[20%]" variants={mapVariants(1)} initial="hidden" whileInView="show">
            <Image src={people4} alt="people 4" width={100} height={100} className="rotate-45 rounded-full"></Image>
          </motion.div>
        </div>
      </div>
  </Section>
  );
}

export default World;