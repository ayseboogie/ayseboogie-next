import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";

const ChiFarmsCmp = dynamic(() => import("../components/chiFarms"), {
  ssr: false,
});

const tabs = [
  {
    title: "Home",
    path: "/chiHome.pdf",
  },
  {
    title: "About Us",
    path: "/aboutUs.pdf",
  },
  {
    title: "Shop",
    path: "/shop.pdf",
  },
  {
    title: "Vendor StoreFront",
    path: "/vendorStore.pdf",
  },
  {
    title: "Gallery",
    path: "/gallery.pdf",
  },
  {
    title: "My Account",
    path: "/myAccount.pdf",
  },
  {
    title: "My Account(Logged In)",
    path: "/myAccountLoggedIn.pdf",
  },
  {
    title: "Contact Us",
    path: "/contactUs.pdf",
  },
  {
    title: "Shopping Cart",
    path: "/cart.pdf",
  },
  {
    title: "Search",
    path: "/search.pdf",
  },
];

const ChiFarms = () => {
  const { windowWidth } = useWindowDimensions();
  let [activeTab, setActiveTab] = useState("");

  const onButtonClick = (value) => {
    if (value !== null && value !== undefined) {
      let clickedTab = value.target.id;
      setActiveTab({ activeTab: clickedTab });
    }
    const Viewer = document.getElementById("viewer");
    Viewer.scrollIntoView();
  };
  return (
    <>
      <Head>
        <title>Chi Farms - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta
          name="description"
          content="Chi Farms is an ecommerce site I made for my friends at my local market.
          This is a multivendor shop that offers various products from CSA boxes to pottery,
          all locally made by vendors in Chattanooga."
          key="desc"
        />
        <meta property="og:title" content="Chi Farms - Ayse Site" />
        <meta property="og:url" content="https://www.ayse.site/chiFarms" />
        <meta
          property="og:description"
          content="Chi Farms is an ecommerce site I made for my friends at my local market.
          This is a multivendor shop that offers various products from CSA boxes to pottery,
          all locally made by vendors in Chattanooga."
          key="desc"
        />
        <meta property="og:image" content="/ayseSite.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ayseimg.s3.amazonaws.com/ayseSite.png"
        />
        <meta name="twitter:site" content="@AyseStinnett" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1933632198679662"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout pageTitle="Chi Farms">
        <ProjectsLayout
          about={
            <span>
              Chi Farms is an ecommerce site I made for my friends at my local
              market. This is a multivendor shop that offers various products
              from CSA boxes to pottery, all locally made by vendors in
              Chattanooga.
              <br />
              This project was my first wordpress site, but surely not my last.
              <br />
              There is a high turnover rate at Chi Farms, and I was unable to
              keep up with all of the users who had access to make changes on
              this site. I took screenshots of the website for posterity. They
              are navigable by the navigation bar below. Obviously the link to
              the site is still on this page, but I cannot gurantee that is my
              work anymore. I have since taken myself off this project and wish
              Chi Farms the best of luck in their future!
            </span>
          }
          platform={
            <span>
              A Woocommerce site on Wordpress,
              <br /> hosted through GoDaddy
            </span>
          }
          checkIt="https://chifarms.org/"
        >
          <div className="py-9">
            <nav className="px-12 py-3" style={{ backgroundColor: "#8C9A8C" }}>
              <ul className="flex flex-col md:flex-row list-none justify-between tracking-widest md:text-lg">
                {tabs.map((tab) => {
                  return (
                    <li
                      key={tab.path}
                      className="pr-8 pb-4 md:pb-0"
                      style={{ color: "#373911" }}
                    >
                      <button
                        id={tab.path}
                        value={tab.path}
                        onClick={onButtonClick}
                      >
                        {tab.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div id="viewer" />
          {activeTab !== "" && (
            <ChiFarmsCmp url={activeTab.activeTab} mobile={windowWidth < 640} />
          )}
          <hr className="md:mt-6 pb-8 md:pb-12 mx-20 md:mx-48" />
        </ProjectsLayout>
      </Layout>
    </>
  );
};

export default ChiFarms;
