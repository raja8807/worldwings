import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./home.module.scss";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";

const HomeScreen = () => {
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
        </div>
      </CustomContainer>
    </div>
  );
};

export default HomeScreen;
