import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import EnquiryModal from "../common/enquiry_modal/enquiry_modal";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header setShowModal={setShow} />
      {children}
      <Footer />
      <EnquiryModal show={show} setShow={setShow} />
    </div>
  );
};

export default Layout;
