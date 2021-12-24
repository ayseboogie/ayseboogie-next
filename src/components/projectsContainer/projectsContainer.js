import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import * as style from "./projectsContainer.module.css";

const ProjectsContainer = () => {
  return (
    <div className="w-full bg-gray-800 text-2xl tracking-widest pb-10 py-8 md:py-16">
      <div className="flex flex-wrap justify-center text-center lg:px-32">
        {/* 0 */}
        <div
          className={cn(
            "relative w-3/4 md:w-1/3 mx-3 lg:py-2",
            style.projectsContainer
          )}
        >
          <Link to="/chiFarms" className="text-white lg:hidden text-sm">
            Chi Farms
          </Link>
          <StaticImage
            src="../../images/chiFarms.png"
            alt="Ecommerce Site"
            className={cn("w-full opacity-100 block rounded-md", style.image)}
            style={{
              transition: ".5s ease",
              backfaceVisibility: "hidden",
            }}
          />
          <Link
            to="/chiFarms"
            className={cn("opacity-0 absolute text-center", style.projectsText)}
            style={{
              transition: ".5 ease",
              top: "27%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-white text-sm invisible lg:visible md:text-lg lg:text-2xl md:my-16">
              Chi Farms
            </div>
            <div className="text-white text-sm md:text-base lg:text-xl underline">
              details
            </div>
          </Link>
        </div>

        {/* 1 */}
        <div
          className={cn(
            "relative w-3/4 md:w-1/3 mx-3 lg:py-2",
            style.projectsContainer
          )}
        >
          <Link
            to="/experiences"
            className="text-white whitespace-nowrap lg:hidden text-sm"
          >
            Lonely Planet Experiences
          </Link>
          <StaticImage
            src="../../images/lpExperiences.png"
            alt="LP Experiences"
            className={cn("w-full opacity-100 block rounded-md", style.image)}
            style={{
              transition: ".5s ease",
              backfaceVisibility: "hidden",
            }}
          />
          <Link
            to="/experiences"
            className={cn("opacity-0 absolute text-center", style.projectsText)}
            style={{
              transition: ".5 ease",
              top: "27%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-white text-sm invisible lg:visible md:text-lg lg:text-2xl md:my-16">
              Lonely Planet Experiences
            </div>
            <div className="text-white text-sm md:text-base lg:text-xl underline">
              details
            </div>
          </Link>
        </div>

        {/* 2 */}
        <div
          className={cn(
            "relative w-3/4 md:w-1/3 mx-3 lg:py-2",
            style.projectsContainer
          )}
        >
          <Link
            to="/experiences"
            className="text-white whitespace-nowrap lg:hidden text-sm"
          >
            Nifty Code
          </Link>
          <StaticImage
            src="../../images/dom.png"
            alt="Nifty Code"
            className={cn("w-full opacity-100 block rounded-md", style.image)}
            style={{
              transition: ".5s ease",
              backfaceVisibility: "hidden",
            }}
          />
          <Link
            to="/code"
            className={cn("opacity-0 absolute text-center", style.projectsText)}
            style={{
              transition: ".5 ease",
              top: "27%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-white text-sm invisible lg:visible md:text-lg lg:text-2xl md:my-16">
              Nifty Code
            </div>
            <div className="text-white text-sm md:text-base lg:text-xl underline">
              details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
