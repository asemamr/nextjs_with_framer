"use client";
import { motion } from "framer-motion";
import { item } from "@/lib/motion";
import Image from "next/image";
import arrow from "/public/arrow.svg";

function InsightCard({ insight, index }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 items-center border-[1px] border-white p-3 rounded-2xl md:border-none"
      // variants={textVariants(0.5 * index)}
      // initial="hidden"
      // whileInView="show"
      variants={item}
    >
      <div>
        <Image
          src={insight.imgUrl}
          alt={insight.title}
          width={500}
          height={500}
          className="md:w-36 h-40  md:h-36 object-cover rounded-2xl md:rounded-3xl"
        />
      </div>
      <div className="flex-1 lg:pr-24 text-center md:text-left">
        <h2 className="text-white mb-4 text-2xl">{insight.title}</h2>
        <p className="text-secondary-white">{insight.subtitle}</p>
      </div>
      <div className="w-full md:w-16 h-16 border-white border-2 rounded-2xl md:rounded-full flex justify-center items-center">
        <Image
          src={arrow}
          alt="arrow"
          width={100}
          height={100}
          className="w-8"
        />
      </div>
    </motion.div>
  );
}

export default InsightCard;
