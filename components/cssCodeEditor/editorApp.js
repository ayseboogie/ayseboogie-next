import Editor from "./editor";
import * as style from "./editorApp.module.css";
import cn from "classnames";

const EditorApp = () => {
  const html = `<div class="container">
      <div class="slate">slate</div>
      <div class="red">red</div>
      <div class="orange"> orange</div>
      <div class="yellow">yellow</div>
      <div class="green">green</div>
      <div class="blue">blue</div>
      <div class="indigo">indigo</div>
      <div class="violet"> violet</div>
      <div class="grey">grey</div>
  </div>`;
  const css = `.container {
       /* first breakpoint*/
    --w1: 1300px;
    --n: 6;
    /* second breakpoint*/
    --w2: 900px;
    --m: 4;
    /* third breakpoint*/
    --w3: 20px;
    --p: 2;
    display: grid;
    grid-template-columns:
    repeat(auto-fill,
        minmax(clamp(clamp(clamp(
            100% / (var(--n) + 1) + 0.1%,
            (var(--w1) - 100vw) * 1000,
    100% / (var(--m) + 1) + 0.1%),
    (var(--w2) - 100vw) * 1000,
    100% / (var(--p) + 1) + 0.1%),
    (var(--w3) - 100vw) * 1000,
    100%), 1fr));
    gap: 10px;
  }
.slate {
    color: rgb(30, 41, 59);
    background-color: rgb(241, 245, 249);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.red {
    color: rgb(185 28 28);
    background-color: rgb(254 226 226);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.orange {
    color: rgb(194 65 12);
    background-color: rgb(255 237 213);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.yellow {
    color: rgb(234 179 8);
    background-color: rgb(254 249 195);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.green {
    color: rgb(21 128 61);
    background-color: rgb(220 252 231);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.blue {
    color: rgb(29 78 216);
    background-color: rgb(219 234 254);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.indigo {
    color: rgb(67 56 202);
    background-color: rgb(224 231 255);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.violet {
    color: rgb(109 40 217);
    background-color: rgb(237 233 254);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
.grey {
    color: rgb(55 65 81);
    background-color: rgb(243 244 246);
    height: 80px;
    line-height: 80px;
    text-align: center;
  }`;

  const srcDoc = `
        <html lang="en">
          <body>${html}</body>
          <style>${css}</style>
        </html>
      `;

  return (
    <>
      <div className={cn("bg-zinc-500", style.topPane)}>
        <Editor
          className="px-2 py-3 md:w-1/2 md:pl-4 md:pr-2"
          language="xml"
          editorTitle="HTML"
          value={html}
        />
        <Editor
          className="px-2 py-3 md:w-1/2 md:pl-2 pr-4"
          language="css"
          editorTitle="CSS"
          value={css}
        />
      </div>
      <div style={{ height: "60vh" }}>
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
