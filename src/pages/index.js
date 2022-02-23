import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Mint from "../components/Mint";
import Origins from "../components/Origins";
import RoadMap from "../components/RoadMap";
import Team from "../components/Team";
import About from "../components/About";
import OurVision from "../components/OurVision";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Mint />
      <Origins />
      <OurVision />
      <RoadMap />
      <Team />
    </>
  );
}

export default Home;
