import CustomContainer from "@/components/ui/custom_container/custom_container";

import styles from "./Header.module.scss";
import CoupleLogo from "@/components/common/couple_logo/couple_logo";

const Header = () => {
  return (
    <header className={styles.Header}>
      <CustomContainer>
        <div className={styles.wrap}>
          <CoupleLogo />
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
