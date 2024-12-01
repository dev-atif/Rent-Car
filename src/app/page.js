import HeroSection from "@/Components/Home/HeroSection";
import React from "react";
import SupportSection from "@/Components/Home/SupportSection";
import CardSection from "@/Components/Cards/CardSection";


const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <CardSection />
    </div>
  );
};

export default Home;
