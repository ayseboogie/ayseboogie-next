import * as React from "react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="w-full text-white tracking-widest pr-8 lg:px-80 pt-6 bg-gray-800 flex items-center justify-end">
        <Link href="/">back home</Link>
      </div>
      <div className="w-full text-center text-3xl tracking-widest lg:px-80 py-16 bg-gray-800 flex items-center justify-center">
        <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
          {/*<Page pageNumber={1}/>*/}
        </Document>
      </div>
    </>
  );
}

export default Resume;
