import * as React from "react";
import { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as ReactDOM from "react-dom";

const ChiFarms = (activeTab) => {
  const worker = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js`;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // let [activeTab, setActiveTab] = useState("");
  let [scrollDown, setScrollDown] = useState(0);
  console.log("0 ", activeTab.url);
  // const onButtonClick = (value) => {
  //   if (value !== null && value !== undefined) {
  //     let clickedTab = value.target.id;
  //     setActiveTab({ activeTab: clickedTab });
  //
  //     // const Nav = document.getElementById("nav");
  //     // Nav.scrollIntoView();
  //
  //     // setScrollDown({ scrollDown: scrollDown - 3 });
  //     // window.scrollTo(0, scrollDown);
  //
  //     // const view = document.getElementById("pdfView");
  //     // ReactDOM.hydrate(<App name="Saeloun" />, document.getElementById("root"));
  //     // ReactDOM.hydrate(<div>nav</div>, document.getElementById("pdfView"));
  //   }
  // };
  //hightlighted color: 9B4724

  return (
    <>
      {/*<div className="py-9">*/}
      {/*  <nav*/}
      {/*    id="nav"*/}
      {/*    className="px-12 py-3"*/}
      {/*    style={{ backgroundColor: "#8C9A8C" }}*/}
      {/*  >*/}
      {/*    <ul className="flex list-none justify-end tracking-widest md:text-lg">*/}
      {/*      {tabs.map((tab) => {*/}
      {/*        return (*/}
      {/*          <li*/}
      {/*            key={tab.path}*/}
      {/*            className="pr-8"*/}
      {/*            style={{ color: "#373911" }}*/}
      {/*          >*/}
      {/*            <button*/}
      {/*              id={tab.path}*/}
      {/*              value={tab.path}*/}
      {/*              onClick={onButtonClick}*/}
      {/*            >*/}
      {/*              {tab.title}*/}
      {/*            </button>*/}
      {/*          </li>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </ul>*/}
      {/*  </nav>*/}
      {/*</div>*/}
      <div>chi cmp</div>
      {/*{activeTab !== "" && (*/}
      <Worker workerUrl={worker}>
        <Viewer
          id="pdfView"
          fileUrl={activeTab.url}
          plugins={[defaultLayoutPluginInstance]}
          height="9999px"
        />
      </Worker>
      {/*)}*/}
    </>
  );
};

export default ChiFarms;
