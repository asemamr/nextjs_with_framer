"use client"
import { motion } from "framer-motion"
import { fadeIn, stampVariants } from "@/lib/motion";
import Section from "./Section";
import Image from "next/image";
import image from "/public/planet-09.png"
import stamp from "/public/stamp.png";

function Feedback() {
  return (
    <Section>
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:mx-36 lg:h-[60vh]">
        <motion.div variants={fadeIn("left", "spring", .2, 1)} initial="hidden" whileInView="show" className="gradient-05  border-[1px] border-[#6a6a6a] rounded-2xl flex-1 relative flex justify-end flex-col text-white p-4">
          <div className="feedback-gradient" />
          <h2 className="font-semibold text-xl">Samantha</h2>
          <p className="font-thin text-secondary-white mb-4">Founder Metaverus</p>
          <p className="text-xl leading-8 text-justify">“With the development of today&apos;s technology, metaverse is very useful for today&apos;s work,
            or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </motion.div>
        <motion.div variants={ fadeIn("right", "spring", .2, 1)} initial="hidden" whileInView="show" className="flex-[2] relative">
          <Image src={image} alt="image" height={4000} width={4000} className="rounded-2xl w-full h-72 lg:h-full object-cover " />
          <motion.div variants={stampVariants} initial="hidden" whileInView="show" className="absolute left-[70%] lg:-left-16 top-[92%] lg:top-6 lg:top-10">
            <Image src={stamp} alt="stamp" height={110} width={110} className="w-16 md:w-24 h-16 lg:w-28 md:h-24 lg:h-28"/>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

export default Feedback;