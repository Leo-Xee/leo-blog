---
title: TOC 구현하기
description: 스크롤 이벤트를 활용해서 TOC(Table Of Content) 기능을 구현한 과정을 정리합니다.
thumbnail:
tags: ['Frontend']
createdAt: 2024-12-01T08:27:19.144Z
---

책이나 어떤 글을 읽을 때 저는 목차를 먼저 파악한 뒤 본문을 읽는 편입니다. 목차를 통해 전체 흐름이 파악 안된 채로 글을 읽게되면 뭔가 지도 없이 지식의 미로를 탐험하는 느낌이랄까요? 최근까지 블로그 프로젝트의 백로그에 쌓아 두었던 책의 목차와 동일한 기능을 하는 TOC 기능을 추가하게 되었는데 이 글에서는 이 TOC 기능의 구현 과정을 정리해 보려고 합니다.

> ## TL;DR
>
> - **TOC란?**: heading 태그를 기반으로 특정 섹션으로 스크롤 이동하거나 현재 섹션을 감지해서 하이라이팅되는 등의 기능을 제공하는 목차 UI 입니다.
> - **구현 과정**: `rehype-slug`와 `github-slugger`를 사용해 TOC 데이터를 생성하고, 스크롤 이벤트를 활용해 활성 섹션을 감지하며 스타일을 동적으로 적용했습니다.
> - **중요 개념**: 스크롤 이벤트를 통한 섹션 위치 계산, TOC 데이터 추출 및 컴포넌트 렌더링, 섹션 활성화 상태를 관리하는 로직이 핵심입니다.

## TOC란?

TOC는 **Table Of Contents**의 약자이며 **인덱스나 목차를 의미**합니다.

일반적으로 웹 개발에서의 TOC 기능은 TOC 아이템 클릭 시 해당 영역으로 스크롤 이동을 하거나 TOC 아이템이 현재 보고 있는 영역에 해당하는 아이템을 하이라이팅되는 기능이 포함됩니다.

## 요구사항 정리

먼저, 기능 구현을 진행하기 전에 요구사항을 정리하겠습니다.

1. TOC 리스트에는 `h1` 태그를 제외한 `h2 ~ h6` 태그가 포함되어야 한다.
2. 사용자가 특정 TOC 리스트의 제목을 클릭하면 해당 제목의 영역으로 스크롤되어야 한다.
3. 사용자가 스크롤할 때 현재 보고 있는 제목의 영역에 해당하는 TOC 아이템이 하이라이트되어야 한다.
4. TOC를 노출할 수 있는 충분한 공간이 있을 경우에만 TOC를 노출한다.

## 구현

### Scroll to Anchor 동작 이해

HTML5부터 `anchor(a)` 태그 요소의 `href` 속성 값으로 특정 식별자를 추가하면 해당 페이지 내에 동일한 식별자를 `id`로 가지는 요소로 스크롤을 이동시키도록 하는 동작이 표준이 되었습니다.

이 동작을 **Scroll to Fragment/Anchor**라고 하고 아래와 같이 간단하게 구현할 수 있습니다.

```html title="Scroll to Fragment/Anchor 예시"
<!doctype html>
<html lang="en">
  <body>
    <a href="#target">Scroll to Target</a>
    <!-- ... -->
    <div id="target">Target</div>
  </body>
</html>
```

그렇다면 위 동작을 활용해서 TOC 리스트 아이템 내 `a` 태그 요소의 `href` 속성 값과 포스트 내 `heading` 요소의 `id` 속성 값을 동일하게 맵핑시키면 쉽게 2번 요구사항을 만족시킬 수 있습니다.

### 포스트 내 heading 태그에 id 추가

먼저 프로젝트의 구조를 간단히 설명하자면, 현재 블로그 프로젝트는 Markdown 파일을 [unified(remark, rehype)](https://www.npmjs.com/package/unified#what-is-this) 패키지를 사용해서 파싱한 뒤 HTML로 변환하는 구조를 가지고 있습니다.

여기서 unified 패키지는 [다양한 플러그인](https://unifiedjs.com/explore)을 지원하고 있는데요. 그 중에서 [rehype-slug](https://www.npmjs.com/package/rehype-slug) 플러그인을 활용하면 아래와 같이 포스트 내 모든 `heading` 태그 요소들에 `id`를 추가할 수 있습니다.

```ts title="rehype-slug 플러그인 추가"
// ...
import addHeadingSlug from 'rehype-slug';
import autoLinkHeading from 'rehype-autolink-headings';

const markdownToHtml = async (markdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(addHeadingSlug)
    .use(autoLinkHeading, { behavior: 'wrap' })
    // ...
    .process(markdown);
  return String(result);
};

export default markdownToHtml;
```

![그림1. heading 태그 요소에 추가된 id](/assets/contents/blog-toc/1.png)

> 참고로 [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings) 플러그인을 사용하면 `heading` 태그 요소에 `a` 태그 요소를 원하는 위치에 추가할 수 있습니다. 그럼 현재 블로그에 적용된 것처럼 해당 `heading` 태그 요소를 클릭하면 그에 맞게 스크롤이 조정되도록 구현할 수 있습니다.

### 포스트에서 TOC에서 사용할 데이터 추출

이제 TOC 컴포넌트 내에서 사용할 아래와 같은 종류의 데이터를 포스트에서 추출해야 합니다.

- TOC 리스트 아이템별
  - 텍스트(text): `heading`의 텍스트
  - 레벨(level): `heading`의 레벨(h2 ~ h6)
  - `a` 태그 요소의 `href` 속성 값(slug): `heading`의 `id`값

여기서 유심히 봐야할 데이터는 **`a` 태그 요소의 `href` 속성 값**입니다.

해당 속성 값이 포스트 내 `heading`의 `id`값과 완전하게 일치해야 정상적인 동작을 보장할 수 있습니다. 그렇기 때문에 rehype-slug 플러그인에서 사용하고 있는 로직을 동일하게 적용하기 위해서 [내부 코드](https://github.com/rehypejs/rehype-slug/blob/main/lib/index.js)를 확인해보니 `id` 생성을 위해 `github-slugger`를 사용하는 것을 확인할 수 있습니다.

그럼 `href`값을 생성하기 위해 `github-slugger` 패키지를 그대로 사용해서 필요한 데이터를 추출하는 함수를 구현한다면 아래와 같이 작성할 수 있습니다.

```ts title="포스트에서 TOC에서 사용할 데이터 추출 함수" hl={9,10,12,18}
type Heading = {
  id: number;
  level: number;
  text: string;
  slug: string;
};

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^*>?\s*(#{2,6})\s+(.+)$/gm;
  const matches = Array.from(content.matchAll(headingRegex));

  const slugger = new GithubSlugger();

  return matches.map((match, index) => ({
    id: index,
    level: match[1].length,
    text: match[2],
    slug: slugger.slug(match[2]),
  }));
}
```

- 9번 라인
  - `^>?`: 줄 시작 시에 `>`가 선택적으로 위치 (`blockquote` 내에서 사용하는 케이스 대응)
  - `\s*`: 공백이 0개 이상 위치.
  - `(#{2,6})`: `#` 기호가 2개 이상 6개 이하 연속으로 나타나는 부분을 매칭 (`h1` 제외)
  - `\s+`: 공백이 0개 이상 위치.
  - `(.+)$`: 하나 이상의 문자 매칭하고 종료
  - `gm`: 문자열 전체, 여러 줄 모드로 동작
- 10번 라인
  - 정규식표현식과 일치하는 모든 결과의 Iterator 객체를 반환하고 이를 배열로 변환
- 12, 18번 라인

  - `github-slugger` 클래스의 인스턴스 생성 후 포스트 내 제목에 적용

위 함수를 활용하면 1번과 2번 요구사항을 만족시키는 TOC 컴포넌트를 아래와 같이 구현할 수 있습니다.

```tsx title="TOC.tsx"
'use client';

import React, { useState } from 'react';
import { Post } from '@/types/post';
import Link from 'next/link';
import GithubSlugger from 'github-slugger';
import * as styles from './TOC.css';

type TOCProps = {
  post: Post;
};

function TOC({ post }: TOCProps) {
  const headings = extractHeadings(post.content);

  return (
    <ul className={styles.list}>
      {headings.map(({ id, level, text, slug }) => {
        return (
          <li
            key={id}
            className={`${styles.listItem}`}
            style={{ paddingLeft: `${(level - 1) * 10}px` }}
          >
            <Link href={`#${slug}`}>
              <span>{text}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TOC;
```

### 스크롤 위치 감지하기

마지막으로 3번 요구사항을 만족시키기 위해서는 현재 뷰포트 내에 어떤 `heading` 태그 요소가 위치하고 있는지를 알아야 합니다. 이를 구현하기 위해서는 보통 아래의 2가지의 방법을 사용하는데 여기에서는 **Scroll Event를 활용해서 구현**해보려고 합니다.

1. Intersection Observe 활용
2. **Scroll Event 활용** (✅)

스크롤 이벤트가 발생할 때마다 아래와 같은 동작이 순차적으로 실행되는 과정을 통해서 구현할 수 있습니다.

1. 포스트 내 `heading` 태그 요소들의 `top`값 계산한 다음 해당 값을 포함한 배열로 관리
2. 기존 배열의 순서를 거꾸로 변경(`reverse`) - ⭐
3. 현재 뷰포트 위치보다 배열 요소의 `top`값보다 적거나 같은 요소를 `setState` 처리
4. `state`로 관리되는 요소의 경우 TOC 리스트 아이템에 스타일 적용

참고로 HTML 문서 상에서 특정 요소의 Y축 좌표값(HTML 최상단에서 Y축으로 떨어져있는 수치값)을 구하기 위해서 필요한 값은 아래 그림과 같습니다.

![그림2. 특정 요소의 scrollTop 계산식](/assets/contents/blog-toc/2.png)

위 과정을 추가 구현한 전체 코드는 아래와 같습니다.

```tsx title="TOC.tsx (nextjs, vanilla-extract 기반 전체 코드)" hl={43-54,56-61}
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Post } from '@/types/post';
import Link from 'next/link';
import GithubSlugger from 'github-slugger';
import { APP_BAR_HEIGHT } from '@/constants';
import * as styles from './TOC.css';

type Heading = {
  id: number;
  level: number;
  text: string;
  slug: string;
};

type TOCProps = {
  post: Post;
};

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^\s*>?\s*(#{2,6})\s+(.+)$/gm;
  const matches = Array.from(content.matchAll(headingRegex));

  const slugger = new GithubSlugger();

  return matches.map((match, index) => ({
    id: index,
    level: match[1].length,
    text: match[2],
    slug: slugger.slug(match[2]),
  }));
}

const OFFSET = 20;

function TOC({ post }: TOCProps) {
  const [activeHeading, setActiveHeading] = useState<Heading | null>(null);

  const headings = useMemo(() => extractHeadings(post.content), [post.content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingsWithPosition = headings.map((heading) => {
        const element = document.getElementById(heading.slug);

        return {
          ...heading,
          top: element
            ? document.documentElement.scrollTop +
              element.getBoundingClientRect().top
            : 0,
        };
      });

      const currentHeading = headingsWithPosition
        .reverse()
        .find(
          ({ top }) =>
            top <= document.documentElement.scrollTop + APP_BAR_HEIGHT + OFFSET
        );

      if (currentHeading) {
        setActiveHeading(currentHeading);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeHeading?.id, headings]);

  return (
    <ul className={styles.list}>
      {headings.map(({ id, level, text, slug }) => {
        const isActive = activeHeading?.id === id;

        return (
          <li
            key={id}
            className={`${styles.listItem} ${isActive ? styles.activeListItem : ''}`}
            style={{ paddingLeft: `${(level - 1) * 10}px` }}
          >
            <Link href={`#${slug}`}>
              <span className={isActive ? styles.activeListItemText : ''}>
                {text}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TOC;
```

## 참조

- https://medium.com/@ndbeladiya720/what-is-a-url-example-structure-of-url-92cda07a9dcc
- https://github.com/rehypejs/rehype-slug
- https://github.com/Flet/github-slugger
