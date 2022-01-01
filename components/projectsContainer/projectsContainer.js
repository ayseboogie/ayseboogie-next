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
    <div className="w-full bg-gray-800 text-2xl tracking-widest pb-10 py-8 md:py-16 px-6">
      <div className={style.container}>
        {/* 0 */}
        <div className="relative w-full">
          <Link href="/chiFarms" className="cursor-pointer">
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
          </Link>
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/chiFarms">Chi Farms</Link>
            </div>
          </div>
        </div>

        {/* 1 */}
        <div className="relative w-full">
          <Link href="/experiences">
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
          </Link>
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/experiences">Lonely Planet Experiences</Link>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="relative w-full">
          <Link href="/funCode">
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
          </Link>
          <div
            className={cn(
              "opacity-100 absolute text-center",
              style.translateDiv
            )}
            style={{
              transition: ".5 ease",
              left: "50%",
            }}
          >
            <div className="text-white text-center whitespace-nowrap text-sm">
              <Link href="/funCode">Fun Code</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
