import * as React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full justify-center items-center text-3xl tracking-widest py-16 bg-gray-800 flex ">
      <a
        href="https://github.com/ayseboogie"
        target="_blank"
        rel="noreferrer"
        className="px-6"
      >
        <FontAwesomeIcon className="text-white w-8" icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/ayse-stinnett-41a100140/"
        target="_blank"
        rel="noreferrer"
        className="px-6"
      >
        <FontAwesomeIcon className="text-white w-8" icon={faLinkedin} />
      </a>
      <a
        href="https://twitter.com/aysestinnett"
        target="_blank"
        rel="noreferrer"
        className="px-6"
      >
        <FontAwesomeIcon className="text-white w-8" icon={faTwitter} />
      </a>
      <div
        target="_blank"
        rel="noreferrer"
        className="px-6 text-white tracking-widest text-sm md:text-lg lg:text-xl"
      >
        <Link href="/resume">Resume</Link>
      </div>
      <br />
    </div>
  );
}

export default Footer;
