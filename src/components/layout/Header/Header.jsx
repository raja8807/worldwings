import { useEffect, useState } from "react";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./Header.module.scss";
import Logo from "@/components/common/couple_logo/couple_logo";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";
import RightMenu from "./menu_button/menu_button";

const NavItem = ({ item }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  if (item.dropdown) {
    return (
      <li
        onMouseEnter={() => {
          setShowDropDown(true);
        }}
        onMouseLeave={() => {
          setShowDropDown(false);
        }}
      >
        <Link href={"#"}>
          {item.title}
          &nbsp;
          <ChevronDown />
        </Link>

        {showDropDown && (
         <div className={styles.dropdownWrap}>
           <div className={`${styles.dropdown}`}>
            {
              item.dropdown.map((dd)=>{
                return <Link href={"/"} key={dd.title}>{dd.title}</Link>
              })
            }
          </div>
         </div>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link href={"/"}>{item.title}</Link>
    </li>
  );
};

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const PAGES = [
    { title: "About Us" },
    {
      title: "Tours",
      dropdown: [
        {
          title:"Domestic Tours",
        },
        {
          title:"International Tours",
        },
        {
          title:"Inbound  Tours",
        }
      ],
    },
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
                  return <NavItem key={page.title} item={page} />;
                })}
              </ul>
            </nav>
          </div>

          <RightMenu pages={PAGES}/>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
