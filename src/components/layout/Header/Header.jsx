import { useEffect, useState } from "react";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./Header.module.scss";
import Logo from "@/components/common/couple_logo/couple_logo";
import Link from "next/link";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const PAGES = [
    { title: "About Us" },
    { title: "Tours" },
    { title: "Services" },
    { title: "Gallery" },
    { title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.Header} ${showHeader ? styles.show : styles.hide}
      ${scrolled ? styles.scrolled : ""}
      `}
    >
      <CustomContainer lg>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <Logo />
            <nav className={styles.navLg}>
              <ul>
                {PAGES.map((page) => {
                  return (
                    <li key={page.title}>
                      <Link href={"/"}>{page.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
