import React from "react";
import BannerSection from "./sections/banner/banner";
import ToursSection from "./sections/tours/tours";
import DestinationsSection from "./sections/destinations/destinations";
import WhyChooseUsSection from "./sections/why_choose_us/why_choose_us";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <ToursSection />

      <DestinationsSection />
      <WhyChooseUsSection/>
    </>
  );
};

export default HomeScreen;
