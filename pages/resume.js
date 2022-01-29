import Link from "next/link";
import { pdfjs } from "react-pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { windowWidth } = useWindowDimensions();

  return (
    <>
      <div className="w-full md:pr-8 pt-6 bg-gray-800">
        <div className="text-white tracking-widest flex justify-end">
          <Link href="/">back home</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {windowWidth < 640 && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
            <div className="w-full md:w-3/4 py-6 ">
              <Viewer fileUrl="/resume.pdf" defaultScale={0.6} />
            </div>
          </Worker>
        )}
        {windowWidth > 640 && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
            <div className="w-full md:w-3/4 py-6 ">
              <Viewer
                fileUrl="/resume.pdf"
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1}
              />
            </div>
          </Worker>
        )}
      </div>
    </>
  );
}

export default Resume;
