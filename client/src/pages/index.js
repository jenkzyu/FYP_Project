import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RaceSection from "../components/RaceSection";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Drivers from "../components/Drivers";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <RaceSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Drivers />
      <Drivers />
    </>
  );
};

export default Home;
