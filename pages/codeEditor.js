import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import CodeEditorCmp from "../components/codeEditor/editorApp";

const CodeEditor = () => {
  return (
    <>
      <Head>
        <title>Code Editor - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta
          name="description"
          content="This is a component that uses CSR packages on SSR to create a code editor."
          key="desc"
        />
        <meta property="og:title" content="Code Editor - Ayse Site" />
        <meta property="og:url" content="https://www.ayse.site/codeEditor" />
        <meta
          property="og:description"
          content="This is a component that uses CSR packages on SSR to create a code editor."
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
        <div className="text-center text-3xl py-10">Code Editor</div>
        <CodeEditorCmp />
        <ProjectsLayout
          about={
            <span>
              Click the card to pop out the backside. <br />
              As mentioned on the
              <span className="text-gray-800 font-bold">
                &nbsp;
                <Link href="/responsiveLayout" className="cursor-pointer">
                  Responsive Layout
                </Link>
                &nbsp;
              </span>
              page, I ran into some issues creating a functional html, css, and
              javascript code editor in a SSR framework. I could not find any
              solutions online, so I decided to write a &nbsp;
              <a href="" className="text-gray-800 font-bold cursor-pointer">
                post
              </a>
              &nbsp; about it after I figured it out.
            </span>
          }
          platform="React in a NextJS framework with Tailwind styling"
          checkIt="https://dev.to/ayseboogie/building-a-code-editor-within-nextjs-3nnc"
        />
      </Layout>
    </>
  );
};

export default CodeEditor;
