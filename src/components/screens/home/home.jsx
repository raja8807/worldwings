"use client";

import { useEffect, useRef, useState } from "react";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./home.module.scss";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";

const HomeScreen = () => {
  const targetDate = new Date("2026-04-10T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    let interval;
    if (isMounted) {
      interval = setInterval(() => {
        setTimeLeft(getTimeLeft());
      }, 1000);
    } else {
      setIsMounted(true);
    }

    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <div className={styles.HomeScreen}>
      <CustomContainer>
        <div className={styles.cont}>
          <Image
            src="/images/logo.png"
            width={300}
            alt="logo.png"
            data-aos="fade-right"
          />

          <h1
            className={FONTS.font1}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            We are
            <br />
            Coming Soon
          </h1>

          {isMounted && (
            <div className={styles.count}>
              <div data-aos="fade-up" data-aos-delay={"210"}>
                <h2>{timeLeft.days}</h2>
                <p>Days</p>
              </div>
              <div data-aos="fade-up" data-aos-delay={"240"}>
                <h2>{timeLeft.hours}</h2>
                <p>Hours</p>
              </div>
              <div data-aos="fade-up" data-aos-delay={"270"}>
                <h2>{timeLeft.minutes}</h2>
                <p>Minutes</p>
              </div>
              <div data-aos="fade-up" data-aos-delay={"280"}>
                <h2>{timeLeft.seconds}</h2>
                <p>Seconds</p>
              </div>
            </div>
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default HomeScreen;
