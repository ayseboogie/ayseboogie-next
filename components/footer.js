import * as React from "react";
// import dynamic from "next/dynamic";
import { Document, Page } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Component, useState } from "react";
// import Resume from "../public/resume.pdf";

// const Footer = () => {
export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  render() {
    function setNumPages({ numPages }) {
      this.numPages = numPages;
    }

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(1);
    }

    return (
      <div className="w-full text-center text-3xl tracking-widest lg:px-80 py-16 bg-gray-800 flex items-center justify-center">
        <a
          href="https://github.com/ayseboogie"
          target="_blank"
          rel="noreferrer"
          className="px-6"
        >
          <FontAwesomeIcon className="text-white" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayse-stinnett-41a100140/"
          target="_blank"
          rel="noreferrer"
          className="px-6"
        >
          <FontAwesomeIcon className="text-white" icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/aysestinnett"
          target="_blank"
          rel="noreferrer"
          className="px-6"
        >
          <FontAwesomeIcon className="text-white" icon={faTwitter} />
        </a>
        <div>
          <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={this.pageNumber} />
            {/*<Page pageNumber={1}/>*/}
          </Document>
          <p>
            Page {this.pageNumber} of {this.numPages}
          </p>
        </div>
        <a
          // href={Resume}
          target="_blank"
          rel="noreferrer"
          className="px-6 text-white tracking-widest text-sm md:text-lg lg:text-xl"
        >
          Resume
        </a>
        <br />
      </div>
    );
  }
}

export default Footer;
