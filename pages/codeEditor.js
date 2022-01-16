import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";

const CodeEditor = () => {
  return (
    <>
      <Head>
        <title>Code Editor - Ayse Site</title>
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
      <Layout pageTitle="Code Editor">
        <ProjectsLayout
          about={
            <span>
              As mentioned on the
              <span className="text-gray-800 font-bold">
                &nbsp;
                <Link href="/funCode" className="cursor-pointer">
                  Fun Code
                </Link>
                &nbsp;
              </span>
              page, I ran into some issues creating a code editor in SSR
              frameworks. I could not find any solutions online, so I decided to
              write a
              <a href="" className="text-gray-800 font-bold">
                post
              </a>
              about it after I figured it out
            </span>
          }
          platform="Wordpress Woocommerce, hosted through GoDaddy"
          checkIt="https://chifarms.org/"
        />
      </Layout>
    </>
  );
};

export default CodeEditor;
