'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from './PostTag.css';

type PostTagProps = {
  tagName: string;
};

function PostTag({ tagName }: PostTagProps) {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter((v) => v !== '');
  const parentPath = pathSegments.length > 1 ? `/${pathSegments[0]}` : '/';

  return (
    <Link href={`${parentPath}?tag=${tagName}`}>
      <div className={styles.item}>{tagName}</div>
    </Link>
  );
}

export default PostTag;
