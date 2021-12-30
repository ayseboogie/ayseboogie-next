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
            <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
                <Image
                    src={ATPups}
                    alt="Appalachian Trail Puppies"
                    layout="fill"
                    objectFit="cover"
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
                    <div className="text-white md:text-2xl">Motivated</div>
                </div>
            </div>

            <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
                <Image
                    src={StarMtn}
                    alt="Star Mountain Hike"
                    layout="fill"
                    objectFit="cover"
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
                    <div className="text-white md:text-2xl">Passionate</div>
                </div>
            </div>

            <div className={cn("relative w-full mx-1 md:mx-3", style.container)}>
                <Image
                    src={WeaversBend}
                    alt="Weavers Bend Horse Ride"
                    // height="100%"
                    // width="100%"
                    // layout="responsive"
                    // objectFit="contain"
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
                    <div className="text-white md:text-2xl">Dedicated</div>
                </div>
            </div>
        </div>
    );
};

export default AboutPhotos;
