import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import ChiFarms from "../../public/chiFarms.png";
import Experiences from "../../public/lpExperiences.png";
import Dom from "../../public/dom.png";
import cn from "classnames";
import * as style from "./projectsContainer.module.css";

const ProjectsContainer = () => {
  return (
    <div className="w-full bg-gray-800 text-2xl tracking-widest pb-10 py-8 md:py-16">
      <div className={cn("gap-x-8 gap-y-8", style.container)}>
        {/* 0 */}
        <div className="relative w-full mx-1 md:mx-3">
          <Image
            src={ChiFarms}
            alt="Chi Farms"
            layout="fill"
            objectFit="contain"
            className={cn(
              "h-full w-auto opacity-100 block rounded-md",
              style.image
            )}
            style={{
              transition: ".5s ease",
              backfaceVisibility: "hidden",
            }}
          />
          <div
            href=""
            className="opacity-100 absolute text-center"
            style={{
              transition: ".5 ease",
              left: "50%",
              transform: "translate(-50%, -80%)",
            }}
          >
            <div
              href=""
              className="text-white text-center whitespace-nowrap text-sm"
            >
              Chi Farms
            </div>
          </div>
        </div>

        {/* 1 */}
        <div className="relative w-full mx-1 md:mx-3">
          <Image
            src={Experiences}
            alt="LP Experiences"
            layout="fill"
            objectFit="contain"
            className={cn(
              "h-full w-auto opacity-100 block rounded-md",
              style.image
            )}
            style={{
              transition: ".5s ease",
              backfaceVisibility: "hidden",
            }}
          />
          <div
            href=""
            className="opacity-100 absolute text-center"
            style={{
              transition: ".5 ease",
              // top: "27%",
              left: "50%",
              transform: "translate(-50%, -80%)",
            }}
          >
            <div
              href=""
              className="text-white text-center whitespace-nowrap text-sm"
            >
              Lonely Planet Experiences
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="relative w-full mx-1 md:mx-3">
          <Image
            src={Dom}
            alt="Fun Code"
            layout="fill"
            objectFit="contain"
            className={cn(
              "h-full w-auto opacity-100 block rounded-md",
              style.image
            )}
            style={{
              transition: ".5s ease",
              backfaceVisibility: "hidden",
            }}
          />
          <div
            href=""
            className="opacity-100 absolute text-center"
            style={{
              transition: ".5 ease",
              // top: "27%",
              left: "50%",
              transform: "translate(-50%, -80%)",
            }}
          >
            <div
              href=""
              className="text-white text-center whitespace-nowrap text-sm"
            >
              Fun Code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
