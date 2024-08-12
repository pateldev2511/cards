import React from 'react';
import { useNode } from '@craftjs/core';

export const Container = ({ children, background, padding }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{ background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};