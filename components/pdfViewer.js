import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const pViewer = ({ url, mobile }) => {
  const worker = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js`;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl={worker}>
      <div className="w-11/12 md:w-3/4 py-6">
        <Viewer
          fileUrl={url}
          plugins={!mobile ? [defaultLayoutPluginInstance] : []}
          defaultScale={mobile ? 0.55 : 1}
        />
      </div>
    </Worker>
  );
};

export default pViewer;
