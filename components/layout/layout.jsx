import React from "react";
import Navbar from "../layout/main-header";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
