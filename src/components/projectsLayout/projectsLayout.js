import * as React from "react";
import ProjectsContainer from "../projectsContainer/projectsContainer";

const ProjectsLayout = ({ about, platform, checkIt }) => {
  return (
    <>
      <div className="m-auto font-sans text-lg">
        <main className="max-w-4xl m-auto">
          <div className="text-center my-16">{about}</div>
          <hr />
          <div className="flex my-16 w-full">
            <h2 className="flex-1 flex justify-start tracking-widest">
              Platform:
            </h2>
            <div className="flex-1 flex justify-end text-right">{platform}</div>
          </div>
          <a
            className="flex my-16 w-full"
            href={checkIt}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="flex-1 flex justify-start tracking-widest">
              Check it Out:
            </h2>
            <div className="flex-1 flex justify-end text-right">{checkIt}</div>
          </a>
        </main>
        <ProjectsContainer />
      </div>
    </>
  );
};

export default ProjectsLayout;
