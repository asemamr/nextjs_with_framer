import About from "./Component/About";
import Explore from "./Component/Explore";
import Feedback from "./Component/Feedback";
import Footer from "./Component/Footer";
import GetStarted from "./Component/GetStarted";
import Hero from "./Component/Hero";
import Insights from "./Component/Insights";
import Navbar from "./Component/Navbar";
import WhatsNew from "./Component/WhatsNew";
import World from "./Component/World";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
