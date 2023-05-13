"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import search from "/public/search.svg";
import hamburger from "/public/menu.svg"
import { navbarVariants } from "@/lib/motion";


function Navbar() {
  return ( 
    <motion.nav className="px-4 md:px-20 py-8 relative h-[100px]" variants={navbarVariants} initial="hidden" whileInView="show">
      <div className="gradient-01 absolute w-1/2 inset-0"/>
        <div className="flex justify-between">
        <Image src={search} alt="search" width={30} height={30} className="object-contain" />
        <h2 className="text-white font-extrabold leading-8 text-2xl">METAVERSUS</h2>
        <Image src={hamburger} alt="menu" width={30} height={30} className="object-contain"/>
        </div>
    </motion.nav>
   );
}

export default Navbar;