import * as React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import NodeTree from "../public/nodeTree.png";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import DomTraversal from "../components/domTraversal";

import CodeEditor from "../components/codeEditor/editorApp";

const Code = () => {
  return (
    <>
      <NextSeo title="Fun Code" description="Fun code exercises." />
      <Layout pageTitle="Nifty Code">
        <div className="pb-4 md:py-6">
          {/*  DOM Traversal */}
          <div className="text-center text-3xl pb-6">DOM Traversal</div>
          <div className="flex justify-center align-middle px-56">
            <Image
              // className="max-w-sm
              // md:max-w-xl"
              src={NodeTree}
              alt="Node Tree"
              // objectPosition="center
              // center"
              height="400%"
              width="500%"
            />
          </div>
          <DomTraversal />
        </div>
        <div className="pb-10 max-w-2xl lg:max-w-4xl m-auto text-center">
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

        <div className="pb-10 max-w-2xl lg:max-w-4xl m-auto text-center">
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
          vastly necessary and I think this a cool alternative. Try resizing the
          screen to try it out!
          <br />
          <br />
          We&apos;ll take it big screen &gt; small. When the screen width is
          bigger than W1(1300px), we clamp to 100%/(N + 1) + 0.1%), or N(6)
          items per row. When the screen width is bigger than W2 but smaller
          than W1, we clamp to 100%/(M + 1) + 0.1%), or M(4) items per row. Now
          we&apos;re down to the first clamp that occurs when the screen width
          is smaller than W2(900px), but still larger than W3(20px), where we
          clamp to 100%/(P + 1) + 0.1%), or P(2) items per row. I set W3 to such
          a low pixel because I never want my rows to break to 1 item per.
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
