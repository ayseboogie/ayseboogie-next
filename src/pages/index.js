import * as React from "react";
import Layout from "../components/layout";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import AboutPhotos from "../components/aboutPhotos/aboutPhotos";
import Contact from "../components/contact/contact";

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

      <AboutPhotos />
      <span id="about" />
      <div className="w-full text-center text-2xl tracking-widest px-32 py-16">
        I am a frontend engineer who enjoys taking on new challenges and
        continuously growing my skill set.
        <br />
        I am a React developer by day. I have built freelance sites with
        WordPress and Duda. I have upcoming projects in Wix and Shopify.
        <br />I developed this website with Gatsby and Tailwind styling. <br />I
        received my computer science degree from UT Chattanooga.
      </div>

      <span id="portfolio" />
      <ProjectsContainer />
      <span id="contact" />
      <Contact />

      <div className="py-10">
        <div
          className="w-full text-center text-3xl tracking-widest px-32 py-16"
          style={{ backgroundColor: "#B76E79" }}
        >
          "We are the music makers, And we are the dreamers of dreams, Wandering
          by lone sea-breakers, And sitting by desolate streams; — World-losers
          and world-forsakers, On whom the pale moon gleams: Yet we are the
          movers and shakers Of the world for ever, it seems."
          <br />- Arthur O'Shaugnessy
        </div>
      </div>
      <hr className="pb-16 mx-48" />
    </Layout>
  );
};

export default IndexPage;
