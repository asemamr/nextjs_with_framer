"use client";
import { MainTitle, SecondaryTitle } from "./TextHelpers"
import { insights } from "@/constants";
import Section from "./Section";
import InsightCard from "./InsightCard";
import { motion } from "framer-motion";
import { list, item } from "/lib/motion.js";

function Insights() {
  return (
    <Section>
      <div className="lg:px-36">
      <MainTitle title="| Insight" direction="text-center" />
        <SecondaryTitle title={<h2 className="text-center my-6 text-3xl md:text-5xl">Insight about metaverse</h2>} />
      <motion.div variants={list} initial="hidden" whileInView="show" className="flex flex-col gap-y-4  mt-12">
        {insights.map((insight, index) => (
          <InsightCard {...{insight}} {...{index}} key={index} />
        ))}
        </motion.div>
        </div>
    </Section>
  );
}

export default Insights;