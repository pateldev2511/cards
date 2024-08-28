"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../../../sunburst.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; // Import the line numbers CSS
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react"; // Import the Clipboard icon from Lucide

const DesignComponent = ({
  previewPath,
  htmlCodeSnippet,
  reactCodeSnippet,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const { toast } = useToast();

  useEffect(() => {
    // Highlight code using Prism.js
    Prism.highlightAll();
  }, [activeTab]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Your code has been copied successfully.",
        status: "success",
        duration: 3000,
      });
    });
  };

  const renderCodeBlock = (codeSnippet, language) => (
    <div className="relative h-full">
      <pre className="line-numbers rounded-md shadow-lg h-full overflow-auto">
        <code
          className={`language-${language} text-xs sm:text-sm md:text-base lg:text-lg`}
        >
          {codeSnippet}
        </code>
      </pre>
      <button
        className="absolute top-2 right-2 text-white bg-zinc-800 rounded-full p-2 hover:bg-zinc-700"
        onClick={() => handleCopy(codeSnippet)}
        aria-label="Copy code"
      >
        <Copy className="w-6 h-6 text-zinc-500" />
      </button>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex justify-center space-x-2 sm:space-x-4 py-4">
        <Link
          href="#_"
          className={`relative rounded px-3 sm:px-4 md:px-5 py-2.5 overflow-hidden group ${
            activeTab === "preview"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-black"
          } relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 text-xs sm:text-sm md:text-base lg:text-lg`}
          onClick={() => setActiveTab("preview")}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Preview</span>
        </Link>

        <Link
          href="#_"
          className={`relative rounded px-3 sm:px-4 md:px-5 py-2.5 overflow-hidden group ${
            activeTab === "html"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-black"
          } relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300 text-xs sm:text-sm md:text-base lg:text-lg`}
          onClick={() => setActiveTab("html")}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">HTML Code</span>
        </Link>

        <Link
          href="#_"
          className={`relative rounded px-3 sm:px-4 md:px-5 py-2.5 overflow-hidden group ${
            activeTab === "react"
              ? "bg-purple-500 text-white"
              : "bg-gray-100 text-black"
          } relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300 text-xs sm:text-sm md:text-base lg:text-lg`}
          onClick={() => setActiveTab("react")}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">React Code</span>
        </Link>
      </div>
      <div className="flex-auto h-full">
        {activeTab === "preview" && (
          <div className="h-full w-full">
            <iframe
              src={previewPath}
              title="Preview"
              className="w-full h-full border-none"
              style={{ pointerEvents: "auto" }}
            />
          </div>
        )}
        {activeTab === "html" && (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="w-full h-full p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl bg-zinc-800">
              {renderCodeBlock(htmlCodeSnippet, "html")}
            </div>
          </div>
        )}
        {activeTab === "react" && (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="w-full h-full p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl bg-zinc-800">
              {renderCodeBlock(reactCodeSnippet, "js")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignComponent;
