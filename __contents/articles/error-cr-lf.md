---
title: Prettier 에러를 발생시키는 CR과 LF의 차이
description: 이 글에서는 최근에 회사에서 지급 받은 M1 MacBook Pro를 초기 세팅하면서 겪었던 병목을 다시 겪지 않고자 세팅 내용을 간단히 정리합니다.
thumbnail:
tags: ['Trouble Shooting']
createdAt: 2022-08-22T18:14:42.919Z
---

> ## TL;DR
>
> - **줄바꿈 방식 차이로 인한 에러 발생**:
>   - 원인: Windows와 Linux의 줄바꿈 방식 차이(CR vs LF)로 인해 발생하는 문제입니다.
> - **CR과 LF의 의미**:
>   - CR(Carriage Return): 아스키코드 13 (2진수 00001101), 줄의 시작으로 이동합니다.
>   - LF(Line Feed): 아스키코드 10 (2진수 00001010), 줄을 아래로 이동합니다.
> - **해결 방법**:
>   - VSC 설정 변경: Visual Studio Code에서 줄바꿈 방식을 LF로 설정합니다.
>   - Prettier 설정 변경: .eslintrc.json 파일에서 endOfLine 옵션을 "auto"로 설정합니다.

## 에러 내용

최근에 팀 프로젝트를 진행하면서 제가 ESLint와 Prettier를 포함한 초기 개발 환경 세팅을 담당하게 되었습니다. 이를 pull 받은 팀원 중 일부의 VSC 상에서 다음과 같은 에러가 발생한다는 피드백을 받았습니다.

![](/assets/contents/error-cr-lf/1.png)

## 에러 원인

이 에러가 발생하는 원인은 줄바꿈에 대해 **Windows는 CR 방식을, Linux는 LF 방식을 기본 설정하고 있기 때문입니다.**

**CR은 Carriage Return을 의미하며 아스키 코드로는 13이고 2진수로는 00001101을 나타냅니다.** **LF는 Line Feed를 의미하며 아스키 코드로는 10이고 2진수로는 00001010을 나타냅니다.** 이 두 가지 방식 모두 줄바꿈이라는 동일한 기능을 수행합니다. 하지만 컴퓨터의 입장에서는 각각의 바이트 값이 다르기 때문에 동일하게 인식하지 못하는 것입니다.

추가로 이 방식들에 대한 유래는 옛날 다큐멘터리에서 많이 볼 수 있는 타자 기계에서 시작됩니다. 하지만 이에 대한 내용은 생략하겠습니다.

## 해결 방법

해결 방법은 크게 두 가지가 있습니다.

### VSC의 줄바꿈(newLine) 방식을 변경

![](/assets/contents/error-cr-lf/2.png)

### Prettier의 endOfLine에 대한 규칙 옵션 수정

```json title=".eslintrc.json"
{
  // ...
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
  }
}
```

## 참조

- https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
- https://velog.io/@jakeseo_me/LF%EC%99%80-CRLF%EC%9D%98-%EC%B0%A8%EC%9D%B4-Feat.-Prettier
