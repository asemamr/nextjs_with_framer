"use client"
import Section from "./Section";
import { motion } from "framer-motion";
import { MainTitle } from "./TextHelpers";
import { fadeIn, infinityDown } from "@/lib/motion";
import arrow from "/public/arrow-down.png"
import Image from "next/image";

function About() {
  return (
    <Section>
      <div className="relative lg:mx-36 ">
        <div className="gradient-02 z-0 absolute "/>
        <MainTitle title="| About Metaverus" direction="text-center" />
        <motion.p variants={fadeIn("down", "tween", 0.2, 1)} initial="hidden" whileInView="show" className="text-secondary-white text-justify text-xl md:text-2xl lg:text-4xl leading-8 md:leading-10 lg:leading-[55px] mt-8 text-clip font-thin">
          <span className="white font-bold">Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it&apos;s really real, you can feel what you feel in this metaverse world, because this is really the <span className="white font-bold">madness of the metaverse</span> of today, using only <span className="white font-bold">VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let&apos;s <span className="white font-bold">explore</span> the madness of the metaverse by scrolling down
        </motion.p>
        <motion.a href="#" variants={infinityDown} initial="hidden" whileInView="show" className="block cursor-pointer">
          <Image src={arrow} alt="the arrow down" width={25} height={25}  className="w-4 md:w-5 lg:w-7 h-6 md:h-auto mx-auto mt-4 md:mt-8 relative z-10" />
        </motion.a>
      </div>
    </Section>
  );
}



export default About;
