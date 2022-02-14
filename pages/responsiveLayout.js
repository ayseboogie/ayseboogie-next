import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import CodeEditor from "../components/cssCodeEditor/editorApp";

const ResponsiveLayout = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>Responsive Layout - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta
          name="description"
          content="Responsive Layout without using media queries"
          key="desc"
        />
        <meta property="og:title" content="Responsive Layout - Ayse Site" />
        <meta
          property="og:url"
          content="https://www.ayse.site/responsiveLayout"
        />
        <meta
          property="og:description"
          content="Responsive Layout without using media queries"
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
      <Layout pageTitle="Responsive Layout without Media Queries">
        <div className="tracking-widest mt-12 px-4 md:px-0 max-w-2xl lg:max-w-4xl m-auto text-center">
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
          The code editor I wanted to use for this was a challenge for me. I
          used both localStorage and codeMirror for the component, neither of
          which get along with SSR frameworks. I originally built this site in
          Gatsby. I built out the editor, and it looked / worked exactly as I
          wanted. I pushed..and it failed. My next idea was to rebuild my entire
          site in NextJS, so that&apos;s what I did. It was a fun process to
          rebuild with a slightly different API. The build still didn&apos;t
          pass. I was able to figure it out this time, and honestly, I think it
          was the break from fumbling with the component that allowed me to come
          back with fresh eyes and get it solved.
          <br />
          <br />
          After my aha moment, I decided to make the
          <span className="text-gray-800 font-bold cursor-pointer">
            &nbsp;<Link href="/codeEditor">editor</Link>&nbsp;
          </span>
          a component of its own. I then made the editor on this page static due
          to localStorage being used on the code editor page.
        </div>
        <hr className="md:mt-8 pb-6 md:pb-8 mx-20 md:mx-48" />
        <div className="flex justify-center tracking-widest pt-6">
          Window size:&nbsp;
          {windowWidth > 20 && windowWidth < 900 && (
            <div className="pb-6">20px - 900px</div>
          )}
          {windowWidth > 900 && windowWidth < 1300 && (
            <div className="pb-6">900px - 1300px</div>
          )}
          {windowWidth > 1300 && <div className="pb-6">&gt; 1300px</div>}
        </div>
        <CodeEditor />

        <ProjectsLayout />
      </Layout>
    </>
  );
};

export default ResponsiveLayout;
