import React from "react";
import styles from "./section_heading.module.scss";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";

const SectionHeading = ({
  title,
  head,
  caption,
  variant = 1,
  noDivider = false,
}) => {
  const variantData = {
    variant1: {
      star: "/assets/star_Icon_1.svg",
    },
    variant2: {
      star: "/assets/star_icon_3.svg",
    },
    variant3: {
      star: "/assets/star_Icon_3.svg",
    },
  };

  const currentVariant = variantData[`variant${variant}`];

  return (
    <div className={`${styles.SectionHeading} ${styles[`v${variant}`]}`}>
      {title && (
        <p className={FONTS.font3} data-aos="fade-down">
          {title}
        </p>
      )}
      {head && (
        <h2 className={FONTS.font4} data-aos="zoom-in">
          {head}
        </h2>
      )}

      {!noDivider && (
        <div className={styles.divider}>
          <hr data-aos="fade-right" />
          <Image
            src={currentVariant.star}
            alt="star_Icon_1.svg"
            height={24}
            width={24}
            data-aos="zoom-out"
          />
          <hr data-aos="fade-left" />
        </div>
      )}
      {caption && (
        <i className={FONTS.font4} data-aos="fade-up">
          {caption}
        </i>
      )}
    </div>
  );
};

export default SectionHeading;
