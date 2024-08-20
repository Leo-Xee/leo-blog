---
title: '마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트'
description: '테스트 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트 마크다운 테스트'
thumbnail: '/assets/blog/dynamic-routing/cover.jpg'
tags: ['test1', 'test2']
createdAt: '2024-03-19T05:35:07.322Z'
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

HELLO WORLD
_HELLO WORLD_
**HELLO WORLD**
~~HELLO WORLD~~
**_HELLO WORLD_**

---

> LEO is a King.
>
> > LEO is a King.

---

1. ordered list
   1. list 1
   2. list 2
   3. list 3

---

- unordered list

  - list 1
  - list 2
  - list 3

---

- [x] unordered list

  - [ ] list 1
  - [ ] list 2
  - [ ] list 3

---

| Alpha | Bravo   |
| ----- | ------- |
| 中文  | Charlie |
| 👩‍❤️‍👩    | Delta   |

---

![테스트](/assets/posts/test2.png)

[![ALT](/assets/posts/test.JPG)](https://github.com/leo-xee)

---

```cpp title="재귀를 활용한 순열" {1-3,4}
int a[3] = {1, 2, 3};
int n = 3, r = 2; // (n개 중에 r개를 뽑음)

void print() {
  for (int i = 0; i < r; i++) {
    cout << a[i] << " ";
  }
  cout << "\n";
}

void makePermutation(int n, int r, int depth) {
  if (r == depth) {
    return print();
  }

  for (int i = depth; i < n; i++) {
    swap(a[i], a[depth]);
    makePermutation(n, r, depth + 1);
    swap(a[i], a[depth]);
  }

  return;
}

int main() {
  makePermutation(n, r, 0);
  return 0;
}
```
