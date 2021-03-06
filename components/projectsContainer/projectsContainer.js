import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
              src="/chiFarms.png"
              alt="Chi Farms"
              layout="fill"
              objectFit="contain"
              className={cn(
                "h-full w-auto opacity-100 block rounded-md",
                style.image
              )}
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
              src="/lpExperiences.png"
              alt="LP Experiences"
              layout="fill"
              objectFit="contain"
              className={cn(
                "h-full w-auto opacity-100 block rounded-md",
                style.image
              )}
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
          <Link href="/gatsbySite">
            <Image
              src="/gatsbySite.png"
              alt="Gatsby Site"
              layout="fill"
              objectFit="contain"
              className={cn(
                "h-full w-auto opacity-100 block rounded-md",
                style.image
              )}
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
              <Link href="/gatsbySite">Gatsby Site</Link>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="relative w-full">
          <Link href="/domTraversal">
            <Image
              src="/dom.png"
              alt="Dom Traversal"
              layout="fill"
              objectFit="contain"
              className={cn(
                "h-full w-auto opacity-100 block rounded-md",
                style.image
              )}
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
              <Link href="/domTraversal">Dom Traversal</Link>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="relative w-full">
          <Link href="/responsiveLayout">
            <Image
              src="/responsiveLayout.png"
              alt="Responsive Layout"
              layout="fill"
              objectFit="contain"
              className={cn(
                "h-full w-auto opacity-100 block rounded-md",
                style.image
              )}
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
              <Link href="/responsiveLayout">Responsive Layout</Link>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="relative w-full">
          <Link href="/codeEditor">
            <Image
              src="/nextjsCodeEditor.jpeg"
              alt="Code Editor"
              layout="fill"
              objectFit="contain"
              className={cn(
                "h-full w-auto opacity-100 block rounded-md",
                style.image
              )}
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
              <Link href="/codeEditor">Code Editor</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
