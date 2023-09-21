import TopBar from "@/component/core/pages/dashboard/topBar/topBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="mt-2 lg:mt-10">{children}</div>
    </>
  );
};

export default layout;
