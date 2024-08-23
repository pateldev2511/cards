"use client";

import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress",
    "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress",
    "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress",
    "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress",
  ];

  const texts = [
    "Step 1: This is the first step of the Scrollama demo. Scroll down to reveal more content.",
    "Step 2: As you scroll, the content changes and the image updates accordingly.",
    "Step 3: Scroll further to see how the text and images are synchronized.",
    "Step 4: This is the final step. You've reached the end of the Scrollama demo."
  ];

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="flex my-[50vh]">
      {/* Left Side - Scrollama Steps */}
      <div className="flex-1 mr-5">
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {texts.map((text, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div
                className={`my-[100vh] border border-gray-300 p-5 text-3xl text-black font-semibold transition-opacity duration-500 ${
                  currentStepIndex === stepIndex
                    ? 'opacity-100'
                    : 'opacity-50'
                }`}
              >
                {text}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>

      {/* Right Side - Sticky Image */}
      <div
        className="flex-1 sticky top-[10vh] self-start"
      >
        <img
          src={images[currentStepIndex]}
          alt={`Image ${currentStepIndex + 1}`}
          className="w-full h-auto border border-purple-300 transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default ScrollamaDemo;