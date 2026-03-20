import React from "react";
import styles from "./couple_logo.module.scss";
import FONTS from "@/styles/fonts";
import Link from "next/link";

const CoupleLogo = () => {
  return (
    <Link href="#" className={styles.CoupleLogo}>
      <h1 className={FONTS.font2}>RP</h1>
    </Link>
  );
};

export default CoupleLogo;
