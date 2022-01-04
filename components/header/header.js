import * as React from "react";
import Image from "next/image";
import WeaversBend from "../../public/weaversBend.jpeg";
import { Anchor } from "nextjs-anchor";
import cn from "classnames";
import * as style from "./header.module.css";

const Header = ({ pageTitle }) => {
  return (
    <div className="w-full h-auto" style={{ display: "grid" }}>
      <Image
        loading="eager"
        style={{
          gridArea: "1/1",
          maxHeight: "425px",
        }}
        alt="Weavers Bend"
        src={WeaversBend}
      />
      <div
        className={cn("opacity-100 absolute w-full text-right top-3")}
        style={{
          transition: ".5 ease",
        }}
      >
        <div className={cn("text-white", style.textBanner)}>
          <nav className={style.textBanner}>
            <ul className="flex list-none justify-end tracking-widest text-white md:text-lg">
              <li className="pr-8">
                <Anchor href="/" title="Home">
                  <span>Home</span>
                </Anchor>
              </li>
              <li className="pr-8">
                <Anchor href="/#about" title="About">
                  <span>About</span>
                </Anchor>
              </li>
              <li className="pr-8">
                <Anchor href="/#portfolio" title="Portfolio">
                  <span>Portfolio</span>
                </Anchor>
              </li>
              <li className="pr-8">
                <Anchor href="/#contact" title="Contact">
                  <span>Contact</span>
                </Anchor>
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
