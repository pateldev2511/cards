import React from "react";
import { useEditor } from "@craftjs/core";

const DownloadCodeButton = () => {
  const { actions } = useEditor();

  const downloadCode = () => {
    const json = actions.serialize();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design.json";
    a.click();
  };

  return <button onClick={downloadCode}>Download Code</button>;
};

export default DownloadCodeButton;
