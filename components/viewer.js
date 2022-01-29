import { pdfjs } from "react-pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";

const pViewer = ({ url, width, pageNumber }) => {
  const work = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js`;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl={work}>
      <div className="w-full md:w-3/4 py-6 ">
        <Viewer
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={0.6}
        />
      </div>
    </Worker>
    // <Document file={url}>
    //   <Page pageNumber={pageNumber} width={width} />
    // </Document>
  );
};

export default pViewer;
