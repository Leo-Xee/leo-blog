'use client';

import React from 'react';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

function Comments() {
  const { resolvedTheme } = useTheme();

  return (
    <div style={{ marginTop: '80px' }}>
      <Giscus
        repo="leo-xee/leo-blog"
        repoId="R_kgDOMet4uQ"
        category="Announcements"
        categoryId="DIC_kwDOMet4uc4Ctyti"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme}
        lang="ko"
      />
    </div>
  );
}

export default Comments;
