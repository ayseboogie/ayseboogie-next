import * as React from "react";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";
import Layout from "../components/layout";
import CodeEditor from "../components/codeEditorPlay/editorApp";

const Code = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      <Layout pageTitle="Editor">
        {/*  CSS Trick */}
        <div className="text-center text-3xl py-10">Code Editor</div>
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
      </Layout>
    </>
  );
};

export default Code;
