import React from "react";
import Gnb from "$/src/components/Gnb/Gnb";
// import Footer from "@/components/Footer";
import { Children } from "$/types";

const DefaultLayout = ({ children }: Children) => {
  return (
    <div>
      <Gnb />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;