import * as React from "react";
import Image from "next/image";
import Me from "../public/me.jpg";
import Card from "../public/ayseSite.png";
import Card2 from "../public/ayseSite1.png";
import Layout from "../components/layout";
import AboutPhotos from "../components/aboutPhotos/aboutPhotos";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import Contact from "../components/contact";
import { NextSeo } from "next-seo";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";

const IndexPage = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      <NextSeo
        title="Ayse Site"
        description="I am a frontend engineer with a passion for web development."
        canonical="https://www.ayse.site/"
        openGraph={{
          url: "https://www.ayse.site/",
          title: "Ayse Site",
          description:
            "I am a frontend engineer with a passion for web development.",
          images: [
            {
              url: { Card },
              width: 2330,
              height: 1374,
              alt: "Ayse Site Card",
              type: "image/png",
            },
            {
              url: { Card2 },
              width: 1200,
              height: 630,
              alt: "Ayse Site Card",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@AyseStinnett",
          // site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Layout pageTitle="Home">
        <div id="home" />

        <div className="py-6 md:py-10">
          <div
            className="w-full text-center tracking-widest px-16 md:px-32 py-8 md:py-16 text-sm md:text-lg lg:text-2xl"
            style={{ backgroundColor: "#B76E79" }}
          >
            &quot;It was a musical thing and you were supposed to sing or to
            dance while the music was being played&quot;
            <br />- Alan Watts
          </div>
        </div>

        <AboutPhotos />

        <span id="about" />
        <div className="flex items-center justify-center mt-6">
          <hr className="flex-1 flex-grow md:mx-16 lg:mx-24" />
          <Image
            className="max-w-full rounded-full"
            width={windowWidth > 900 ? "240px" : "170px"}
            height={windowWidth > 900 ? "288px" : "195px"}
            src={Me}
            alt="Ayse"
          />
          <hr className="flex flex-grow md:mx-16 lg:mx-24" />
        </div>

        <div className="w-full text-center text-sm md:text-lg lg:text-2xl tracking-widest px-16 md:px-32 py-6 md:py-16">
          <h1>Hey, I&apos;m Ayse.</h1>
          <p>I am a frontend engineer with a passion for web development.</p>
          I enjoy taking on new challenges and continuously growing my skill
          set.
          <br />
          I am a React developer by day. I have built freelance sites with
          WordPress and Duda. I have upcoming projects in Wix and Shopify.
          <br />I developed this website with React in a Gatsby framework using
          Tailwind styling.
          <br />I received my computer science degree, with a business
          administration minor, from UT Chattanooga.
          <br />
          <br />
          Other than staring at a computer screen, a few of the things I enjoy
          include bicycling, paddleboarding, hiking, snowboarding, traveling,
          and scrabble.
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
            &quot;We are the music makers, And we are the dreamers of dreams,
            Wandering by lone sea-breakers, And sitting by desolate streams; —
            World-losers and world-forsakers, On whom the pale moon gleams: Yet
            we are the movers and shakers Of the world for ever, it seems.&quot;
            <br />- Arthur O&apos;Shaugnessy
          </div>
        </div>
        <hr className="pb-8 md:pb-12 mx-20 md:mx-48" />
      </Layout>
    </>
  );
};

export default IndexPage;
