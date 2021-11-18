import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as style from "./aboutPhotos.module.css";
import cn from "classnames";

const AboutPhotos = () => {
  return (
    <div className="flex mx-3 pb-10">
      <div className={cn("relative w-full mx-3", style.container)}>
        <StaticImage
          src="../../images/atPups.jpg"
          alt="Appalachian Trail Puppies"
          className={cn("opacity-100 block w-full h-full", style.image)}
          style={{
            transition: ".5s ease",
            backfaceVisibility: "hidden",
            filter: "brightness(.5)",
          }}
        />
        <div
          className="opacity-100 absolute text-center"
          style={{
            transition: ".5 ease",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white text-2xl">Motivated</div>
        </div>
      </div>

      <div className={cn("relative w-full mx-3", style.container)}>
        <StaticImage
          src="../../images/starMtn.jpg"
          alt="Star Mountain Hike"
          className={cn("opacity-100 block w-full h-full", style.image)}
          style={{
            transition: ".5s ease",
            backfaceVisibility: "hidden",
            filter: "brightness(.5)",
          }}
        />
        <div
          className="opacity-100 absolute text-center"
          style={{
            transition: ".5 ease",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white text-2xl">Passionate</div>
        </div>
      </div>

      <div className={cn("relative w-full mx-3", style.container)}>
        <StaticImage
          src="../../images/weaversBend.jpg"
          alt="Weavers Bend Horse Ride"
          className={cn("opacity-100 block w-full h-full", style.image)}
          style={{
            transition: ".5s ease",
            backfaceVisibility: "hidden",
            filter: "brightness(.5)",
          }}
        />
        <div
          className="opacity-100 absolute text-center"
          style={{
            transition: ".5 ease",
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white text-2xl">Innovative</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhotos;
