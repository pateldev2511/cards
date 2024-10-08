"use client";

import React from "react";
import "prismjs/themes/prism.css";
import DesignComponent from "../components/PrivewTemplate";
import { snippetData } from "@/lib/data/SnippetData";
import GoBackLink from "../components/GoBackLink";

const Design1 = () => {
  const { previewPath, htmlCodeSnippet, reactCodeSnippet } =
    snippetData.design1;

  console.log("Design 1 Data: " + snippetData.design1);

  return (
    <>
      <GoBackLink />

      <DesignComponent
        previewPath={previewPath}
        htmlCodeSnippet={htmlCodeSnippet}
        reactCodeSnippet={reactCodeSnippet}
      />
    </>
  );
};

export default Design1;
