"use client"
import { motion } from "framer-motion"
import { planet } from "@/lib/motion.js";
import Image from "next/image";
import image from "/public/whats-new.png"
import {MainTitle, SecondaryTitle} from "./TextHelpers.jsx"
import Section from "./Section.jsx";
import { startingFeatures } from "@/constants";
import ListFeature from "./ListFeature.jsx";
import vector1 from "/public/vrpano.svg"
import vector2 from "/public/headset.svg"



function WhatsNew() {
  return (
    <Section >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:px-36">
        <div className="text-white flex flex-col gap-y-6 flex-[2]">
          <MainTitle title="| what is new?" direction="left"/>
          <SecondaryTitle title={<h2 className="text-3xl md:text-6xl">What&apos;s new about Metaversus?</h2> } direction="left" />
          <div className="flex gap-x-4 mt-4">
            <motion.div className="flex flex-col gap-y-3">
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex justify-center items-center">
                <Image src={vector1} alt="vector" width={20} height={20}/>
              </div>
              <h2 className="text-lg font-semibold">A new world</h2>
              <p className="text-secondary-white text-justify">we have the latest update with new world for you to try never mind</p>
            </motion.div>
            <motion.div className="flex flex-col gap-y-3">
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex justify-center items-center">
                <Image src={vector2} alt="vector" width={20} height={20}/>
              </div>
              <h2 className="text-lg font-semibold">More realistic</h2>
              <p className="text-secondary-white text-justify">In the latest update, your eyes are narrow, making the world more realistic than ever</p>
            </motion.div>
          </div>
        </div>
        <motion.div variants={planet("right")} initial="hidden" whileInView="show" className="flex-[1.5]">
          <Image src={image} alt="the get started image" width={1000} height={1000} className="w-full max-w-lg"/>
        </motion.div>
      </div>
    </Section>
  );
}

export default WhatsNew;