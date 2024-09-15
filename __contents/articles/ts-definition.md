---
title: 프로젝트에서 타입 관리하기
description: 프로젝트에서 타입스크립트의 타입 파일을 관리하는 방법을 정리합니다.
thumbnail:
tags: ['TypeScript']
createdAt: 2023-01-05T18:05:11.661Z
---

> ## TL;DR
>
> - **타입 파일 분리**: 타입 관리를 위해 프로젝트의 src 디렉토리 내부에 @types 폴더를 생성하고, 컴포넌트 Props 타입을 제외한 모든 타입을 이 폴더에서 관리하도록 설정합니다.
> - **.ts와 .d.ts의 차이**: `.ts`는 일반적인 타입스크립트 파일로 자바스크립트로 컴파일되지만, `.d.ts`는 선언만 존재하며 컴파일되지 않습니다. `.d.ts` 파일을 사용하면 절대 경로로 타입을 import할 수 있습니다.
> - **예시와 적용**: `.d.ts` 파일을 사용하여 타입을 정의하고, 이를 프로젝트 내에서 사용하여 타입을 관리하는 방식을 일관되게 유지할 수 있습니다.

## 문제

React와 Next.js 같은 프로젝트에서 Typescript를 일반적으로 사용하기 시작하면서, 컴포넌트 파일 및 다른 파일들 내부에 커스텀 타입 정의들이 중구난방으로 생겨나기 시작했습니다. 물론 `export`만 잘해준다면 IDE가 잘 찾아주겠지만, 저는 타입 파일들을 타입대로 하나의 폴더에서 관리해서 사용하고 싶었습니다.

## 타입 관련 파일 분리하기

타입 관련된 파일을 분리하기 위해서는 프로젝트 루트 위치의 `src` 디렉토리 내부에 `@types`라는 디렉토리를 생성합니다. 이제부터 컴포넌트의 `Props`의 타입을 제외한 모든 타입을 `@types` 디렉토리에서 관리할 것입니다.

이를 위해서는 Typescript 컴파일러가 인식할 수 있도록, 다음과 같이 `@types`를 포함해주어야 합니다.

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true
    // ...
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "./src/@types"], // 추가
  "exclude": ["node_modules"]
}
```

## .ts 와 .d.ts

Typescript에서는 타입을 정의할 때, 파일의 확장자로 `.ts`와 `.d.ts`를 사용할 수 있습니다. **`.ts`는 Javascript로 컴파일되는 일반적인 타입스크립트 파일이고, `.d.ts`는 선언한 내용이 Typescript 컴파일 시의 문맥에 자동으로 추가되지만, 자바스크립트로 컴파일되지는 않는 파일입니다. 참고로 `.d.ts`로 정의된 선언을 Ambient라고 부르며, 이는 구현을 정의하지 않은 선언을 의미합니다.** 이에 대한 자세한 내용은 [여기](https://stackoverflow.com/questions/29196657/what-is-the-difference-between-d-ts-vs-ts-in-typescript)를 참고하시면 됩니다.

`.ts`나 `.d.ts`를 사용하든지 큰 차이는 없지만, `.d.ts`를 사용하면 `module` 키워드를 사용하여 절대 경로로 `import`할 수 있는 장점이 있습니다. 그래서 저는 아래와 같이 `.d.ts` 파일을 사용해서 타입 정의를 했습니다.

```tsx title="src/@types/<something>.d.ts"

declare module "<something>" {
	export type Leo: string;
	interface Ryan : {
		name: string
	}
}

```

```tsx
import { Leo } from '<something>';

const friend: Leo = "leo's friend";
```

## 참고

- [https://typescript-kr.github.io/pages/modules.html](https://typescript-kr.github.io/pages/modules.html)
