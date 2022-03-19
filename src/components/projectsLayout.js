import * as React from "react";
import ProjectsContainer from "./projectsContainer/projectsContainer";

const ProjectsLayout = ({ about, platform, checkIt, children }) => {
  return (
    <>
      <div className="m-auto font-sans text-lg">
        <main className="max-w-2xl lg:max-w-4xl m-auto">
          <div className="text-center my-8 md:my-16 px-4 md:px-0 text-sm md:text-base lg:text-lg">
            {about}
          </div>
          <hr />
          {platform && (
            <div className="flex my-8 md:my-16 w-full px-4 md:px-0">
              <h2 className="flex-1 flex justify-start tracking-widest text-base md:text-lg">
                Platform:
              </h2>
              <div className="flex-1 flex justify-end text-right text-sm md:text-lg">
                {platform}
              </div>
            </div>
          )}
          {checkIt && (
            <a
              className="flex my-8 md:my-16 w-full px-4 md:px-0"
              href={checkIt}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="flex-1 flex justify-start tracking-widest text-base md:text-lg">
                Check it Out:
              </h2>
              <div className="flex-1 flex flex-wrap justify-end text-right text-sm md:text-lg">
                {checkIt}
              </div>
            </a>
          )}
        </main>
        {children}
        <ProjectsContainer />
        <div className="py-10 md:py-20 px-20 md:px-48">
          <hr />
        </div>
      </div>
    </>
  );
};

export default ProjectsLayout;
