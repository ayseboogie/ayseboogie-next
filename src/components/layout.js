import * as React from "react";
import Header from "./header/header";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className="m-auto font-sans">
        <title>{pageTitle}</title>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
