import React, { PropsWithChildren } from 'react';
import { container, content } from './Container.css';

function Container({ children }: PropsWithChildren) {
  return (
    <div className={container}>
      <div className={content}>{children}</div>
    </div>
  );
}

export default Container;
