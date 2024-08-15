'use client';

import React from 'react';
import 'prismjs/themes/prism.css';
import DesignComponent from '../components/PrivewTemplate';
import {snippetData} from '@/lib/data/SnippetData'
import GoBackLink from '../components/GoBackLink';

const Design2 = () => {
  const { previewPath, htmlCodeSnippet, reactCodeSnippet } = snippetData.design2;

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

export default Design2;