import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as style from "./projectsContainer.module.css";
import cn from "classnames";

const ProjectsContainer = () => {
  return (
    <div className="w-full bg-gray-800 text-center text-2xl tracking-widest px-32 py-16">
      <div className="flex">
        <div className={cn("relative w-1/3 mx-3", style.projectsContainer)}>
          <StaticImage
            src="../../images/chiFarms.png"
            alt="ecommerce site"
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
            <div className="text-white text-2xl my-16">Chi Farms</div>
            <div className="text-white text-xl underline">details</div>
          </Link>
        </div>

        <div className={cn("relative w-1/3 mx-3", style.projectsContainer)}>
          <StaticImage
            src="../../images/lpExperiences.png"
            alt="ecommerce site"
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
            <div className="text-white text-2xl my-16">
              Lonely Planet Experiences
            </div>
            <div className="text-white text-xl underline">details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
