"use client"
import { item } from "@/lib/motion";
import { motion } from "framer-motion";


function ListFeature({ string, index }) {
  return ( 
    <motion.div variants={item} className="flex space-x-4 gap-y-10 items-center">
      <div className=" w-[50px] h-[50px] rounded-2xl text-center bg-slate-600 leading-[50px]">0{index + 1}</div>
      <h2 className="text-white text-base md:text-xl flex-1">{string }</h2>
    </motion.div>
   );
}

export default ListFeature;