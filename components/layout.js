import * as React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Header from "./header/header";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="top" />
      <Header pageTitle={pageTitle} />
      <div className="m-auto font-sans">
        <title>{pageTitle}</title>
        <main>{children}</main>
      </div>
      {showButton && (
        <div className="flex w-full" id="scroll">
          <button
            className="flex-1 flex text-base text-white fixed right-0 bottom-0 w-12 h-12 mr-5 mb-5"
            style={{
              borderRadius: "50%",
              backgroundColor: "#B76E79",
              paddingLeft: "1.2rem",
              paddingTop: "1rem",
            }}
            onClick={scrollToTop}
          >
            <FontAwesomeIcon className="text-white" icon={faAngleUp} />
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
