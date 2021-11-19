import * as React from "react";
import Layout from "../components/layout";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import AboutPhotos from "../components/aboutPhotos/aboutPhotos";
import Contact from "../components/contact/contact";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexPage = () => {
  return (
    <>
      <div id="top" />
      <Layout pageTitle="Home">
        <div id="home" />
        <div className="py-6 md:py-10">
          <div
            className="w-full text-center tracking-widest px-16 md:px-32 py-8 md:py-16 text-sm md:text-lg lg:text-2xl"
            style={{ backgroundColor: "#B76E79" }}
          >
            "It was a musical thing and you were supposed to sing or to dance
            while the music was being played"
            <br />- Alan Watts
          </div>
        </div>

        <AboutPhotos />
        <span id="about" />
        <div className="flex items-center justify-center mt-6">
          <hr className="flex-1 flex-grow md:mx-16 lg:mx-24" />
          <StaticImage
            className="max-w-xs flex flex-1"
            imgClassName="rounded-full"
            src="../images/me.jpg"
          />
          <hr className="flex flex-grow md:mx-16 lg:mx-24" />
        </div>

        <div className="w-full text-center text-sm md:text-lg lg:text-2xl tracking-widest px-16 md:px-32 py-6 md:py-16">
          I am a frontend engineer who enjoys taking on new challenges and
          continuously growing my skill set.
          <br />
          I am a React developer by day. I have built freelance sites with
          WordPress and Duda. I have upcoming projects in Wix and Shopify.
          <br />I developed this website with Gatsby and Tailwind styling.{" "}
          <br />I received my computer science degree from UT Chattanooga.
        </div>

        <span id="portfolio" />
        <ProjectsContainer />
        <span id="contact" />
        <Contact />

        <div className="pb-10 md:py-10">
          <div
            className="w-full text-center tracking-widest px-16 md:px-32 py-8 md:py-16 text-sm md:text-lg lg:text-2xl"
            style={{ backgroundColor: "#B76E79" }}
          >
            "We are the music makers, And we are the dreamers of dreams,
            Wandering by lone sea-breakers, And sitting by desolate streams; —
            World-losers and world-forsakers, On whom the pale moon gleams: Yet
            we are the movers and shakers Of the world for ever, it seems."
            <br />- Arthur O'Shaugnessy
          </div>
        </div>
        <hr className="pb-8 md:pb-12 mx-20 md:mx-48" />

        <div className="flex w-full" id="scroll">
          <button
            className="flex-1 flex text-base text-white fixed right-0 bottom-0 w-12 h-12 mr-5 mb-5"
            style={{
              borderRadius: "50%",
              backgroundColor: "#B76E79",
              paddingLeft: "1.2rem",
              paddingTop: "1rem",
            }}
            onClick={() => scrollTo("#top")}
          >
            <FontAwesomeIcon className="text-white" icon={faAngleUp} />
          </button>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
