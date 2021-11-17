import * as React from "react";
import cn from "classnames";
import * as style from "../../pages/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const ProjectsLayout = ({ about, platform, checkIt }) => {
  return (
    <>
      <div className="m-auto font-sans text-lg">
        <main className="max-w-4xl m-auto">
          <div className="text-center my-16">{about}</div>
          <hr />
          <div className="flex my-16 w-full">
            <h2 className="flex-1 flex justify-start tracking-widest">
              Platform:
            </h2>
            <div className="flex-1 flex justify-end text-right">{platform}</div>
          </div>
          <a className="flex my-16 w-full" href={checkIt}>
            <h2 className="flex-1 flex justify-start tracking-widest">
              Check it Out:
            </h2>
            <div className="flex-1 flex justify-end text-right">{checkIt}</div>
          </a>
        </main>
        <div className="w-full bg-gray-800 text-center text-2xl tracking-widest px-32 py-16">
          <div className="flex">
            <div className={cn("relative w-1/3 mx-3", style.projectsContainer)}>
              <StaticImage
                src="../images/chiFarms.png"
                alt="ecommerce site"
                className={cn(
                  "w-full opacity-100 block rounded-md",
                  style.image
                )}
                style={{
                  transition: ".5s ease",
                  backfaceVisibility: "hidden",
                }}
              />
              <Link
                to="/chiFarms"
                className={cn(
                  "opacity-0 absolute text-center",
                  style.projectsText
                )}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsLayout;
