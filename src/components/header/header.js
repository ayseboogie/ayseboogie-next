import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as style from "./header.module.css";

const Header = ({ pageTitle }) => {
  return (
    <div className="w-full" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}

      <StaticImage
        loading="eager"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: "425px",
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../../images/rr.jpeg"}
        formats={["auto", "webp", "avif"]}
      />

      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          // placeItems: "center",
          // placeItems: "start",
          justifyContent: "flex-end",
          display: "grid",
          paddingTop: "17px",
        }}
      >
        <div
          className=" text-center text-white"
          // className={cn("w-full text-center text-white", style.textBanner)}
        >
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
        className="opacity-100 absolute text-center"
        style={{
          transition: ".5 ease",
          top: "13%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={cn(
            "text-white md:text-2xl px-2 md:px-4",
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
