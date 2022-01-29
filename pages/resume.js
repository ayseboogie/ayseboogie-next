import Link from "next/link";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="w-full md:pr-8 pt-6 md:bg-gray-800">
        <div className="md:text-white tracking-widest flex justify-end">
          <Link href="/">back home</Link>
        </div>
      </div>
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
