import React from "react";
import styles from "./banner.module.scss";
import { Carousel } from "react-bootstrap";
import FONTS from "@/styles/fonts";

const BannerSection = () => {
  const bgImages = [
    {
      id: "1",
      src: "/images/hero/bg-01.webp",
    },
    {
      id: "2",
      src: "/images/hero/bg-02.webp",
    },
    {
      id: "3",
      src: "/images/hero/bg-03.webp",
    },
  ];

  return (
    <div className={styles.BannerSection}>
      <Carousel fade indicators={false} controls={false} draggable={false}>
        {bgImages.map((bg) => {
          return (
            <Carousel.Item key={bg.id}>
              <div className={styles.Banner}>
                <div
                  className={styles.bgWrap}
                  style={{
                    backgroundImage: `url('${bg.src}')`,
                  }}
                ></div>

                <div className={styles.cont}>
                  <p className={FONTS.font2}>Travel Smarter, Travel Better</p>
                  <h1 className={FONTS.font2}>
                    Find your{" "}
                    <span>
                      next <span>stay</span>
                    </span>
                  </h1>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BannerSection;
