'use client'

// components/DesignB.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'tailwindcss/tailwind.css';
import { useToast } from '@/components/ui/use-toast';

const DesignB = () => {
  const [activeTab, setActiveTab] = useState('preview');
  const { toast } = useToast();

  useEffect(() => {
    // Highlight code using Prism.js
    Prism.highlightAll();
  }, [activeTab]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: 'Copied to clipboard!',
        description: 'Your code has been copied successfully.',
        status: 'success',
        duration: 3000,
      });
    });
  };

  const htmlCodeSnippet = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FullPage.js Horizontal Scroll Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css">
  <style>
    .section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      font-size: 3em;
      color: white;
      position: relative;
    }
    .section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); /* Dark grey tint */
      z-index: 1;
    }
    .section > * {
      position: relative;
      z-index: 2;
    }
    .bg-image1 { background: url('https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover; }
    .bg-image2 { background: url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover; }
    .bg-image3 { background: url('https://images.pexels.com/photos/3573603/pexels-photo-3573603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover; }
    .bg-image4 { background: url('https://images.pexels.com/photos/552788/pexels-photo-552788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover; }
  </style>
</head>
<body>
  <div id="fullpage">
    <div class="section bg-image1">Page 1</div>
    <div class="section">
      <div class="slide bg-image2">Slide 1</div>
      <div class="slide bg-image3">Slide 2</div>
    </div>
    <div class="section bg-image4">Page 3</div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
  <script>
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      slidesNavigation: true,
    });
  </script>
</body>
</html>
  `;

  const reactCodeSnippet = `
// Install fullpage.js with the following command:
// npm install fullpage.js

import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

const FullPageDemo = () => {
  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      slidesNavigation: true,
    });

    return () => {
      fullpage.destroy('all');
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section bg-image1 flex items-center justify-center h-screen">
        <h1 className="text-white text-3xl">Page 1</h1>
      </div>
      <div className="section">
        <div className="slide bg-image2 flex items-center justify-center h-screen">
          <h1 className="text-white text-3xl">Slide 1</h1>
        </div>
        <div className="slide bg-image3 flex items-center justify-center h-screen">
          <h1 className="text-white text-3xl">Slide 2</h1>
        </div>
      </div>
      <div className="section bg-image4 flex items-center justify-center h-screen">
        <h1 className="text-white text-3xl">Page 3</h1>
      </div>
    </div>
  );
};

export default FullPageDemo;
  `;

  return (
    <div className="h-screen flex flex-col">
  <div className="flex justify-center space-x-4 py-4 bg-gradient-to-r from-gray-100 to-gray-300">
    <Link
      href="#_"
      className={`relative rounded px-5 py-2.5 overflow-hidden group ${
        activeTab === 'preview' ? 'bg-blue-500' : 'bg-gray-100 text-black'
      } relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300`}
      onClick={() => setActiveTab('preview')}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">Preview</span>
    </Link>

    <Link
      href="#_"
      className={`relative rounded px-5 py-2.5 overflow-hidden group ${
        activeTab === 'html' ? 'bg-orange-500' : 'bg-gray-100 text-black'
      } relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300`}
      onClick={() => setActiveTab('html')}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">HTML Code</span>
    </Link>

    <Link
      href="#_"
      className={`relative rounded px-5 py-2.5 overflow-hidden group ${
        activeTab === 'react' ? 'bg-purple-500' : 'bg-gray-100 text-black'
      } relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300`}
      onClick={() => setActiveTab('react')}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">React Code</span>
    </Link>
  </div>
  <div className="flex-grow">
    {activeTab === 'preview' && (
      <div className="h-full">
        <iframe
          src="/fullpage-demo-2.html"
          title="FullPage.js Demo"
          className="w-full h-full border-none"
          style={{ pointerEvents: 'auto' }}
        />
      </div>
    )}
    {activeTab === 'html' && (
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <div className="w-5/6 lg:w-1/2 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">HTML Code for FullPage.js Horizontal Scroll Demo</h2>
          <pre className='rounded-md'>
            <code className="language-html">
              {htmlCodeSnippet}
            </code>
          </pre>
          <button 
                className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
                onClick={() => handleCopy(reactCodeSnippet)}>
                Copy Code</button>
        </div>
      </div>
    )}
    {activeTab === 'react' && (
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <div className="w-5/6 lg:w-1/2 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">React Code for FullPage.js Horizontal Scroll Demo</h2>
          <pre className='rounded-md'>
            <code className="language-jsx">
              {reactCodeSnippet}
            </code>
          </pre>
          <button 
                className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
                onClick={() => handleCopy(reactCodeSnippet)}>
                Copy Code</button>
        </div>
      </div>
    )}
  </div>
</div>
);
};

export default DesignB;