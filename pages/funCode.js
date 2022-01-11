import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";
import NodeTree from "../public/nodeTree.png";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import DomTraversal from "../components/domTraversal";
import CodeEditor from "../components/codeEditor/editorApp";

const Code = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>Code - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta
          name="description"
          content="Fun components I build in my free time. Ever growing."
          key="desc"
        />
        <meta property="og:title" content="Code - Ayse Site" />
        <meta property="og:url" content="https://www.ayse.site/funCode" />
        <meta
          property="og:description"
          content="Fun components I build in my free time. Ever growing."
          key="desc"
        />
        <meta property="og:image" content="/ayseSite.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ayseimg.s3.amazonaws.com/ayseSite.png"
        />
        <meta name="twitter:site" content="@AyseStinnett" />
      </Head>
      <Layout pageTitle="Fun Code">
        <div className="pb-4 py-2 md:py-6">
          {/*  DOM Traversal */}
          <div className="text-center text-3xl ">DOM Traversal</div>
          <div className="px-6 md:px-0">
            <Image
              src={NodeTree}
              alt="Node Tree"
              layout="intrinsic"
              width={650}
              height={425}
            />
          </div>
          <DomTraversal />
        </div>
        <div className="pb-10 px-4 md:px-0 max-w-2xl lg:max-w-4xl m-auto text-center">
          I created this page to familiarize myself with traversing the dom. All
          of the logic used in this page stems from the DOM. I used a for loop
          to traverse the node tree. For the fun facts, I used
          getElementsByTagName to find the &lt;td&gt; element and an if
          statement to change the text color.
        </div>
        <hr />
        {/*  CSS Trick */}
        <div className="text-center text-3xl py-10">
          Responsive Layout Without Media Queries
        </div>
        <CodeEditor />
        <div className="flex justify-center">
          Window size:&nbsp;
          {windowWidth > 20 && windowWidth < 900 && (
            <div className="pb-6">20px - 900px</div>
          )}
          {windowWidth > 900 && windowWidth < 1300 && (
            <div className="pb-6">900px - 1300px</div>
          )}
          {windowWidth > 1300 && <div className="pb-6">&gt; 1300px</div>}
        </div>
        <div className="pb-10 px-4 md:px-0 max-w-2xl lg:max-w-4xl m-auto text-center">
          I read an article from
          <a
            className="text-gray-400 font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://css-tricks.com/responsive-layouts-fewer-media-queries/"
          >
            &nbsp;*CSS-TRICKS&nbsp;
          </a>
          that talked about responsive layouts without using media queries. I
          use media queries everywhere..what do you mean? Responsive design is
          crucial, and I think this a cool alternative. Try resizing the screen
          to try it out!
          <br />
          <br />
          We&apos;ll take it big screen -&gt; small. When the screen width is
          bigger than W1(1300px), we clamp to 100%/(N + 1) + 0.1%), or N(6)
          items per row. When the screen width is bigger than W2 but smaller
          than W1, we clamp to 100%/(M + 1) + 0.1%), or M(4) items per row. Now
          we&apos;re down to the first clamp that occurs when the screen width
          is smaller than W2(900px), but still larger than W3(20px), where we
          clamp to 100%/(P + 1) + 0.1%), or P(2) items per row. I set W3 to a
          very low pixel (20px) because I never want my rows to break to 1 item
          per.
          <br />
          <br />
          This was a difficult debug for me. I used both localStorage and
          codeMirror for this component, neither of which get along with the
          frameworks I used. I originally built this site in Gatsby. I built out
          this component and it looked / worked exactly as I wanted. I
          pushed..and it failed. I spent many hours trying to get to the bottom
          of it with no luck. My next idea was to rebuild my entire site in
          NextJS, so that&apos;s what I did. It was a fun process to rebuild
          with a slightly different API. The build still didn&apos;t pass. I was
          able to figure it out this time, and honestly I think it was the break
          from fumbling with this component that allowed me to come back with
          fresh eyes and get it solved.
        </div>

        {/*<div className="max-w-2xl lg:max-w-4xl m-auto">*/}
        <hr />
        {/*</div>*/}
        <ProjectsLayout />
      </Layout>
    </>
  );
};

export default Code;
