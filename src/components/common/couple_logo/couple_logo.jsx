import React from "react";
import styles from "./couple_logo.module.scss";
import FONTS from "@/styles/fonts";
import Link from "next/link";
import { Image } from "react-bootstrap";

const CoupleLogo = () => {
  return (
    <Link href="#" className={styles.CoupleLogo}>
      <Image src="/logo/white logo.png" width={200} alt="logo" />
    </Link>
  );
};

export default CoupleLogo;
