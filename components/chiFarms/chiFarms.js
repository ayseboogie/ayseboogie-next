import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ChiFarms = (activeTab, mobile) => {
  const worker = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js`;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl={worker}>
      <Viewer
        id="pdfView"
        fileUrl={activeTab.url}
        plugins={!mobile ? [defaultLayoutPluginInstance] : []}
        height="9999px"
      />
    </Worker>
  );
};

export default ChiFarms;
