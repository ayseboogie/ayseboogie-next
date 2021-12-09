import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import cn from "classnames";
import * as style from "./header.module.css";

const Header = ({ pageTitle }) => {
  return (
    <div className="w-full" style={{ display: "grid" }}>
      <StaticImage
        loading="eager"
        style={{
          gridArea: "1/1",
          maxHeight: "425px",
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
        alt=""
        src={"../../images/weaversBend.jpeg"}
        formats={["auto", "webp", "avif"]}
      />

      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          justifyContent: "flex-end",
          display: "grid",
          paddingTop: "17px",
        }}
      >
        <div className=" text-center text-white">
          <nav className={style.textBanner}>
            <ul className="flex list-none justify-end tracking-widest text-white md:text-lg">
              <li className="pr-8">
                <AnchorLink to="/" title="Home">
                  <span>Home</span>
                </AnchorLink>
              </li>
              <li className="pr-8">
                <AnchorLink to="/#about" title="About">
                  <span>About</span>
                </AnchorLink>
              </li>
              <li className="pr-8">
                <AnchorLink to="/#portfolio" title="Portfolio">
                  <span>Portfolio</span>
                </AnchorLink>
              </li>
              <li className="pr-8">
                <AnchorLink to="/#contact" title="Contact">
                  <span>Contact</span>
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={cn("opacity-100 absolute text-center", style.textTop)}
        style={{
          transition: ".5 ease",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "text-white text-xl md:text-2xl lg:text-4xl px-2 md:px-4",
            style.textBanner
          )}
        >
          {pageTitle}
        </div>
      </div>
    </div>
  );
};

export default Header;
