import React from "react";
import styles from "./destinations.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const DestinationsSection = () => {
  const POPULAR_DESTINATIONS = [
    {
      name: "Almaty",
      images: ["Almaty (1).webp"],
    },
    {
      name: "Andhaman",
      images: ["Andhaman (1).jpg"],
    },
    {
      name: "Australia",
      images: ["Australia (1).jpg"],
    },
    {
      name: "Azerbaijan",
      images: ["Azerbaijan (1).jpg"],
    },
    {
      name: "Bali",
      images: ["Bali (1).jpg"],
    },
    {
      name: "Dubai",
      images: ["Dubai (1).jpg"],
    },
  ];

  return (
    <div className={styles.DestinationsSection}>
      <CustomContainer>
        <div className={styles.cont}>xx</div>
      </CustomContainer>
    </div>
  );
};

export default DestinationsSection;
