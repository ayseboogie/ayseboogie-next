import * as React from "react";
import Image from "next/image";
import cn from "classnames";
import * as style from "./aboutPhotos.module.css";
import ATPups from "../../public/atPups.jpg";
import StarMtn from "../../public/starMtn.jpg";
import WeaversBend from "../../public/weaversBend.jpg";

const AboutPhotos = () => {
  return (
    <div className="flex mx-2 md:mx-3 md:pb-10">
      {/*0*/}
      <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
        <Image
          src={ATPups}
          alt="Appalachian Trail Puppies"
          width={1000}
          height={1200}
          objectFit="cover"
          className={style.image}
        />
        <div
          className="absolute text-center"
          style={{
            top: "27%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-white tracking-widest text-sm md:text-2xl">
            Dedication
          </div>
        </div>
      </div>

      {/*1*/}
      <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
        <Image
          src={StarMtn}
          alt="Star Mountain Hike"
          width={1000}
          height={1200}
          objectFit="cover"
          className={style.image}
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
          <div className="text-white tracking-widest text-sm md:text-2xl">
            Persistence
          </div>
        </div>
      </div>

      {/*2*/}
      <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
        <Image
          src={WeaversBend}
          alt="Weavers Bend Horse Ride"
          objectFit="cover"
          width={1000}
          height={1200}
          className={style.image}
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
          <div className="text-white tracking-widest text-sm md:text-2xl">
            Determination
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhotos;
