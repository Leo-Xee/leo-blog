---
title: '백준 16968 - 차량 번호판 1'
description: '테스트 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트'
thumbnail: '/assets/blog/dynamic-routing/cover.jpg'
tags: ['test1', 'test2']
createdAt: '2024-03-19T05:35:07.322Z'
---

# 백준 16968 - 차량 번호판 1

## 문제 링크

boj.kr/16968

## 문제 설명

상도시의 차량 번호판 형식이 주어졌을 때, 가능한 차량 번호판의 개수를 구해보자.

- 번호판에 사용할 수 있는 숫자는 0, 1, 2, ..., 8, 9이다.
- 사용할 수 있는 문자는 a, b, c, d, ..., y, z이다.
- 차량 번호판의 형식은 최대 4글자이고, c와 d로 이루어진 문자열로 나타낼 수 있다.
- c는 문자가 위치하는 자리, d는 숫자가 위치하는 자리이다.
- 같은 문자 또는 숫자가 연속해서 2번 나타나면 안 된다.

첫째 줄에 차량 번호판의 형식이 주어진다. 형식은 길이가 4보다 작거나 같으며, c와 d로만 이루어져 있다.

## 문제 풀이

차량 번호판으로 사용할 수 있는 숫자는 0 - 9까지 총 10개이고 문자는 a - z까지 총 26개이다. 하지만 동일한 숫자나 동일한 문자가 연속으로 나열되면 안되기 때문에 경우의 수가 1만큼 적어진다. 예를 들어, `ccc`의 경우에 `26 * 26 * 26` 이 아닌 `26 * 25 * 25`의 경우의 수를 가질 수 있다. 그렇기 때문에 `d`와 `c`를 각각 처리하되 이전 값과 형식이 같을 경우에 경우의 수를 `-1`해서 `cnt`에 곱해주는 방식으로 풀었다.

## 소스 코드

```js
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

function solution(str) {
  let cnt = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'd') {
      if (str[i] === str[i - 1]) {
        cnt *= 9;
      } else {
        cnt *= 10;
      }
    }

    if (str[i] === 'c') {
      if (str[i] === str[i - 1]) {
        cnt *= 25;
      } else {
        cnt *= 26;
      }
    }
  }

  return cnt;
}

console.log(solution(input));
```
