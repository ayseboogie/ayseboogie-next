import * as React from "react";
import Header from "../header/header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className="m-auto max-w-lg font-sans">
        <title>{pageTitle}</title>
        <main>
          <h1 className="text-purple-400">{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
