import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./why_choose_us.module.scss";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { CheckCircle } from "react-bootstrap-icons";

const WhyChooseUsSection = () => {
  const cards = [
    {
      head: "Established & Trusted ",
      caption: "Serving travelers since 1995 in Trichy and expanding to Chennai in 2009.",
    },
    {
      head: "Expert Leadership",
      caption: "Guided by seasoned professionals with a shared vision for service excellence.",
    },
    {
      head: "Tailored Travel Solutions",
      caption: "Customized itineraries crafted to match your preferences, schedules, and budget."
    },
    {
      head: "Customer-Centric Values",
      caption: "– Committed to making every journey safe, seamless, and memorable.",
    },
  ];

  return (
    <section className={styles.WhyChooseUsSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <div className={styles.mainImg} />
            <div className={styles.subImg} />
          </div>
          <div className={styles.right}>
            <SectionHeading
              title={"Why Choose Us"}
              head="Trusted thousands of travelers worldwide"
              caption="At World Wings Tours and Travels, we believe that travel is more than movement—it's about experiences, memories, and connections. Let us take care of your journey with professionalism, passion, and a personal touch that sets us apart."
            />
            <div className={styles.cards}>
              {cards.map((card, idx) => {
                return (
                  <div
                    className={styles.card}
                    key={`card_${idx}`}
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}
                  >
                    <CheckCircle />
                    <div>
                      <h3>{card.head}</h3>
                      <p>{card.caption}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WhyChooseUsSection;
