import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import NodeTree from "../public/nodeTree.png";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import DomTraversalCmp from "../components/domTraversal";

const DomTraversal = () => {
  return (
    <>
      <Head>
        <title>Code - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta name="description" content="Dom Traversal exercises" key="desc" />
        <meta property="og:title" content="Dom Traversal - Ayse Site" />
        <meta property="og:url" content="https://www.ayse.site/domTraversal" />
        <meta
          property="og:description"
          content="Dom Traversal exercises"
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
      <Layout pageTitle="Dom Traversal">
        <div className="pb-4 py-2 md:py-6">
          {/*  DOM Traversal */}
          <div className="text-center text-3xl ">DOM Traversal</div>
          <div className="flex justify-center px-6 md:px-0  ">
            <Image
              src={NodeTree}
              alt="Node Tree"
              layout="intrinsic"
              width={650}
              height={425}
            />
          </div>
          <DomTraversalCmp />
        </div>
        <div className="pb-10 px-4 md:px-0 max-w-2xl lg:max-w-4xl m-auto text-center">
          I created this page to familiarize myself with traversing the dom. All
          of the logic used in this page stems from the DOM. I used a for loop
          to traverse the node tree. For the fun facts, I used
          getElementsByTagName to find the &lt;td&gt; element and an if
          statement to change the text color.
        </div>
        <ProjectsLayout />
      </Layout>
    </>
  );
};

export default DomTraversal;
