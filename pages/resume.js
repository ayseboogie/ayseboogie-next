import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// const { Viewer, Worker } = dynamic(import("@react-pdf-viewer/core"), {
//   ssr: false,
// });
const { defaultLayoutPlugin } = dynamic(
  import("@react-pdf-viewer/default-layout"),
  {
    ssr: false,
  }
);
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import useWindowDimensions from "../utils/hooks/useWindowDimension.ts";

const PdfViewer = dynamic(() => import("../components/pdfViewer"), {
  ssr: false,
});

const Viewer1 = dynamic(() => import("../components/viewer"), {
  ssr: false,
});

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // console.log("0 ", Viewer);
  console.log("1");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const work = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div className="w-full md:pr-8 pt-6 md:bg-gray-800">
        <div className="md:text-white tracking-widest flex justify-end">
          <Link href="/">back home</Link>
        </div>
      </div>
      <Viewer1 url="/resume.pdf" />
      <PdfViewer url="/resume.pdf" pageNumber={1} />
      {/*{windowWidth < 640 && (*/}
      {/*<Worker workerUrl={work}>*/}
      <div className="w-full md:w-3/4 py-6 ">
        {/*<Viewer fileUrl="/resume.pdf" defaultScale={0.6} />*/}
      </div>
      {/*</Worker>*/}
      {/*)}*/}
      <div className="w-full md:flex items-center justify-center py-9">
        <Document
          className="md:border-gray-800 md:border-2"
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </>
  );
}

export default Resume;
