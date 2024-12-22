import React, { PropsWithChildren } from 'react';
import * as styles from './Blockquote.css';

type BlockquoteProps = PropsWithChildren<{
  type: 'info' | 'warn' | 'error' | 'success';
}>;

function Blockquote({ type = 'info', children }: BlockquoteProps) {
  let className;

  switch (type) {
    case 'warn':
      className = styles.warning;
      break;
    case 'error':
      className = styles.error;
      break;
    case 'success':
      className = styles.success;
      break;
    default:
      className = styles.info;
      break;
  }

  return <blockquote className={className}>{children}</blockquote>;
}

export default Blockquote;
