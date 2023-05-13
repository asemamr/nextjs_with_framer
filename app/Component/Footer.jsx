"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { textVariants } from "@/lib/motion";
import image from "/public/headset.svg";
import Image from "next/image";
import { socials } from "@/constants";

function Footer() {
  return (
    <footer className="px-4 pb-8 md:pb-0">
      <motion.div variants={textVariants(.5)} initial="hidden" whileInView="show" className="flex flex-col gap-y-8 md:mx-12 lg:mx-36 text-white relative">
        <div className="footer-gradient" />
        <div className="flex flex-col md:flex-row gap-y-8 justify-between items-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">Enter the Metaverse</h2>
          <button className="px-6 py-3 rounded-full bg-[#25618b] flex items-center gap-x-4 uppercase ">
            <Image src={image} alt="image" width={20} height={20} className=""/>
            enter metaverse
          </button>
        </div>
        <div className="md:py-12 relative">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-4 justify-between items-center">
            <h2 className="font-bold text-2xl">METAVERUS</h2>
            <p className="font-thin text-secondary-white">Copyright © 2021 - 2022 Metaversus.<br className="hidden md:block lg:hidden"/> All rights reserved.</p>
            <div className="flex gap-x-6">
              {socials.map((social) => (
                <Image key={social.name} src={social.url} alt={ social.name} width={20} height={20} className="w-5 h-5 object-contain cursor-pointer"/>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;