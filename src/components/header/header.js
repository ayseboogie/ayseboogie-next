import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as style from "./header.module.css";

const Header = ({ pageTitle, children }) => {
  console.log("pt ", pageTitle);
  // const tb = style.textBanner;
  return (
    <div className="w-full" style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          maxHeight: "375px",
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../../images/bermuda.jpeg"}
        formats={["auto", "webp", "avif"]}
      />

      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          // placeItems: "center",
          placeItems: "start",
          display: "grid",
          paddingTop: "17px",
        }}
      >
        <div className={cn("w-full text-center text-white", style.textBanner)}>
          <nav>
            <ul className="flex list-none justify-end tracking-widest text-black">
              <li className="pr-8">
                {/*<Link to="/">Home</Link>*/}
                <AnchorLink to="/" title="Home">
                  <span>Home</span>
                </AnchorLink>
              </li>
              <li className="pr-8">
                {/*<Link to="/about">About</Link>*/}
                <AnchorLink to="/#about" title="About">
                  <span>About</span>
                </AnchorLink>
              </li>
              <li className="pr-8">
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={cn(
            "w-full text-center text-white text-3xl tracking-widest",
            style.textBanner
          )}
        >
          <h1>{pageTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
