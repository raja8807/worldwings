import React, { useState } from "react";
import { ChevronDown, List } from "react-bootstrap-icons";
import styles from "./menu_button.module.scss";
import { Offcanvas } from "react-bootstrap";
import Logo from "@/components/common/couple_logo/couple_logo";
import Link from "next/link";

const NavItem = ({ item, setShowDrawer }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  if (item.dropdown) {
    return (
      <div>
        <p
          onClick={() => {
            setShowDropDown((prev) => !prev);
          }}
        >
          {item.title} <ChevronDown />
        </p>

        {showDropDown && (
          <div className={styles.dropdown}>
            {item.dropdown.map((dd) => {
              return (
                <Link
                  href={"/"}
                  key={dd.title}
                  onClick={() => {
                    setShowDrawer(false);
                  }}
                >
                  {dd.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Link href={"/"}
        onClick={() => {
                    setShowDrawer(false);
                  }}
      >{item.title}</Link>
    </div>
  );
};

const RightMenu = ({ pages }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={styles.RightMenu}>
      <div className={styles.MenuButton}>
        <List
          onClick={() => {
            setShowDrawer(true);
          }}
        />

        <Offcanvas
          show={showDrawer}
          onHide={() => {
            setShowDrawer(false);
          }}
        >
          <Offcanvas.Header closeButton>
            <Logo isWhite={false} />
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div>
              <nav className={styles.navSm}>
                <ul>
                  {pages.map((page) => {
                    return (
                      <NavItem
                        key={page.title}
                        item={page}
                        setShowDrawer={setShowDrawer}
                      />
                    );
                  })}
                </ul>
              </nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default RightMenu;
