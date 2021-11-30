import * as React from "react";
import Layout from "../components/layout";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import AboutPhotos from "../components/aboutPhotos/aboutPhotos";
import Contact from "../components/contact/contact";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Seo from "../components/seo";
import Triangle from "../images/triangle.png";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ayse Site</title>
        <link rel="canonical" href="http://ayse.site" />
        <link rel="icon" href={Triangle} />
      </Helmet>
      <Layout pageTitle="Home">
        <Seo
          title="Home"
          description="Hey, I'm Ayse. I am a frontend engineer based out of Chattanooga, TN."
        />
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
            alt="Ayse"
          />
          <hr className="flex flex-grow md:mx-16 lg:mx-24" />
        </div>

        <div className="w-full text-center text-sm md:text-lg lg:text-2xl tracking-widest px-16 md:px-32 py-6 md:py-16">
          Hey, I'm Ayse.
          <br /> I am a frontend engineer based out of Chattanooga, TN. I enjoy
          taking on new challenges and continuously growing my skill set.
          <br />
          I am a React developer by day. I have built freelance sites with
          WordPress and Duda. I have upcoming projects in Wix and Shopify.
          <br />I developed this website with React in a Gatsby framework and
          Tailwind styling.
          <br />I received my computer science degree from UT Chattanooga.
          <br />
          <br />
          Other than staring at a computer screen, some of the things I enjoy
          include bicycling, paddleboarding, hiking, traveling, and scrabble.
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
      </Layout>
    </>
  );
};

export default IndexPage;
