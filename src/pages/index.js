import * as React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as style from "./index.module.css";
import cn from "classnames";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div id="home" />
      <div className="py-10">
        <div
          className="w-full text-center text-3xl tracking-widest px-32 py-16"
          style={{ backgroundColor: "#B76E79" }}
        >
          "It was a musical thing and you were supposed to sing or to dance
          while the music was being played"
          <br />- Alan Watts
        </div>
      </div>

      <div className="flex mx-3 pb-10">
        <div className={cn("relative w-full mx-3", style.container)}>
          <StaticImage
            src="../images/atPups.jpg"
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
            src="../images/starMtn.jpg"
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
            src="../images/weaversBend.jpg"
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

      <div className="w-full text-center text-2xl tracking-widest px-32 py-16">
        I am a frontend engineer who enjoys taking on new challenges and
        continuously growing my skill set.
        <br />
        I am a React developer by day. I have built freelance sites with
        WordPress and Duda. I have upcoming projects in Wix and Shopify.
        <br />I developed this website with Gatsby and Tailwind styling. <br />I
        received my computer science degree from UT Chattanooga.
      </div>

      <div className="w-full bg-gray-800 text-center text-2xl tracking-widest px-32 py-16">
        <div className="flex">
          <div className={cn("relative w-1/3 mx-3", style.projectsContainer)}>
            <StaticImage
              src="../images/chiFarms.png"
              alt="ecommerce site"
              className={cn("w-full opacity-100 block rounded-md", style.image)}
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

      <div className="bg-pink-700 w-full">pink</div>
      <div id="about">About anchor</div>
    </Layout>
  );
};

export default IndexPage;
