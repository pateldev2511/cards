
export const snippetData = {
    design1: {
      previewPath: "/designs/design_1/fullpage-demo-1.html",
      htmlCodeSnippet: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FullPage.js Demo</title>
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
      }
      .bg-blue-500 { background-color: #3b82f6; }
      .bg-orange-500 { background-color: #f97316; }
      .bg-purple-500 { background-color: #a855f7; }
    </style>
  </head>
  <body>
    <div id="fullpage">
      <div class="section bg-blue-500">Page 1</div>
      <div class="section bg-orange-500">Page 2</div>
      <div class="section bg-purple-500">Page 3</div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
    <script>
      new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
      });
    </script>
  </body>
  </html>
      `,
      reactCodeSnippet: `
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
      });
  
      return () => {
        fullpage.destroy('all');
      };
    }, []);
  
    return (
      <div id="fullpage">
        <div className="section bg-blue-500 flex items-center justify-center h-screen">
          <h1 className="text-white text-3xl">Page 1</h1>
        </div>
        <div className="section bg-orange-500 flex items-center justify-center h-screen">
          <h1 className="text-white text-3xl">Page 2</h1>
        </div>
        <div className="section bg-purple-500 flex items-center justify-center h-screen">
          <h1 className="text-white text-3xl">Page 3</h1>
        </div>
      </div>
    );
  };
  export default FullPageDemo;
      `,
    },
    design2: {
      previewPath: "/designs/design_2/fullpage-demo-2.html",
      htmlCodeSnippet: `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FullPage.js Demo</title>
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
    }
    .bg-blue-500 { background-color: #3b82f6; }
    .bg-orange-500 { background-color: #f97316; }
    .bg-purple-500 { background-color: #a855f7; }
  </style>
</head>
<body>
  <div id="fullpage">
    <div class="section bg-blue-500">Page 1</div>
    <div class="section bg-orange-500">Page 2</div>
    <div class="section bg-purple-500">Page 3</div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
  <script>
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
    });
  </script>
</body>
</html>
      `,
      reactCodeSnippet: `
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
    });

    return () => {
      fullpage.destroy('all');
    };
  }, []);

  return (
    <div id="fullpage">
      <div className="section bg-blue-500 flex items-center justify-center h-screen">
        <h1 className="text-white text-3xl">Page 1</h1>
      </div>
      <div className="section bg-orange-500 flex items-center justify-center h-screen">
        <h1 className="text-white text-3xl">Page 2</h1>
      </div>
      <div className="section bg-purple-500 flex items-center justify-center h-screen">
        <h1 className="text-white text-3xl">Page 3</h1>
      </div>
    </div>
  );
};
export default FullPageDemo;
      `,
    },
    // Add more designs...
  };