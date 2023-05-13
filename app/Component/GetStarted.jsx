"use client"
import { motion } from "framer-motion"
import {list} from "@/lib/motion"
import { planet } from "@/lib/motion.js";
import Image from "next/image";
import image from "/public/get-started.png"
import {MainTitle, SecondaryTitle} from "./TextHelpers.jsx"
import Section from "./Section.jsx";
import { startingFeatures } from "@/constants";
import ListFeature from "./ListFeature.jsx";


function GetStarted() {
  return (
    <Section >
      <div className="flex flex-col lg:flex-row items-center lg:px-36 justify-center">
        <motion.div variants={planet("left")} initial="hidden" whileInView="show" className="flex-[1.5]">
          <Image src={image} alt="the get started image" width={1000} height={1000} className="w-full max-w-lg"/>
        </motion.div>
        <div className="text-white flex flex-col gap-y-6 flex-[2]">
          <MainTitle title="| how the metaversus works" direction="left"/>
          <SecondaryTitle title={<h2 className="text-3xl md:text-5xl">Get started with just a few clicks</h2> } direction="text-left" />
          <motion.div variants={list} initial="hidden" whileInView="show" className="flex flex-col gap-y-4 mt-4">
            {startingFeatures.map((feature, index) => (
              <ListFeature string={feature} key={feature} {...{index}} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default GetStarted;