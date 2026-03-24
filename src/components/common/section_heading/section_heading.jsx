import React from "react";
import styles from "./section_heading.module.scss";

const SectionHeading = ({ title, head, caption }) => {
  const text = head || "";

  return (
    <div className={styles.SectionHeading}>
      {title && <p data-aos="fade-up">{title}</p>}

      <h2 className={styles.charWrap}>
        {text.split("").map((c, idx) => {
          return (
            <span
              key={`${text}_char_${idx}`}
              data-aos="fade-left"
              data-aos-delay={idx * 50}
              className={styles.char}
            >
              {c === " " ? "\u00A0" : c}
            </span>
          );
        })}
      </h2>

      {caption && <small
      data-aos="fade-in"
      >{caption}</small>}
    </div>
  );
};

export default SectionHeading;
