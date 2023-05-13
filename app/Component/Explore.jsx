"use client";
import Section from "./Section";
import { MainTitle, SecondaryTitle } from "./TextHelpers";
import { exploreWorlds } from "@/constants";
import { useState } from "react";
import Card from "./Card";

function Explore() {
  const [active, setActive] = useState("world-2");

  function clickHandler(value) {
    setActive(value);
  }
  return (
    <Section id="explore">
      <MainTitle title="| the world" direction="text-center" />
      <SecondaryTitle
        title={
          <h2 className="mt-4 text-3xl md:text-5xl">
            Choose the world you want <br className="hidden md:block" />
            to explore
          </h2>
        }
        direction="text-center"
      />
      <div className="flex flex-col lg:flex-row h-[75vh] lg:h-[60vh] w-full mt-8 gap-4 ">
        {exploreWorlds.map((data, index) => (
          <Card key={data.id} index={index} data={data} active={active} setActive={clickHandler} />
        ))}
      </div>
    </Section>
  );
}

export default Explore;
