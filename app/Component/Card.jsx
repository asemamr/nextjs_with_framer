"use client"
import { fadeIn } from "@/lib/motion";
import image from "/public/headset.svg";
import {motion} from "framer-motion"
import Image from "next/image";
function Card({data, index,active, setActive}) {
  return (
    <motion.div
      onClick={() => setActive(data.id)}
      className={`${data.id === active ? "flex-[3]" : "flex-[1]"} transition-all duration-700 ease-out relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl`}
      variants={fadeIn("left", "spring", index * 0.5, 1)}
      initial="hidden"
      whileInView="show">
      <Image
        src={data.imgUrl}
        alt={data.id}
        width={2000}
        height={2000}
        className={`w-full h-full object-cover `}/>
      <div
        className={`absolute ${
          data.id === active && "bg-[rgba(0,0,0,0.5)] rounded-t-2xl pl-6"} 
          ${data.id !== active && "pb-8 pl-6 lg:pl-0 lg:pb-14"}  w-full z-10  h-[55%] lg:h-[45%] left-0 bottom-0 transition-colors flex flex-col justify-center`}>
        {data.id === active && (
          <>
            <div className="w-8 h-8 rounded-xl bg-gray-500 flex justify-center items-center">
            <Image
              src={image}
              alt="sticker"
              width={20}
              height={20}
            /></div>
            <h2 className="uppercase text-xs mt-2 lg:mt-3 mb-2 lg:mb-4 text-gray-300">enter  the  metaverse</h2>
          </>
        )}
        <h2
          className={`text-white text-2xl md:text-3xl font-extrabold 
          ${data.id !== active && "lg:-rotate-90"} transition-all duration-200 origin-center`}>
          {data.title}
        </h2>
      </div>
    </motion.div>
  );
}

export default Card;