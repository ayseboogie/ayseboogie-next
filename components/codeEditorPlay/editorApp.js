import * as React from "react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Editor from "./editor";
import * as style from "./editorApp.module.css";

const EditorApp = () => {
  const [html, setHtml] = useLocalStorage(
    "html",
    `<div class="foo">Foo Bar</div>`
  );
  const [css, setCss] = useLocalStorage(
    "css",
    `.foo {
    color: rgb(30, 41, 59);
    background-color: rgb(241, 245, 249);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }`
  );
  const [js, setJs] = useLocalStorage(
    "js",
    `document.body.style.background = "purple";`
  );
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <>
      <div className={style.topPane}>
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className={style.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default EditorApp;
