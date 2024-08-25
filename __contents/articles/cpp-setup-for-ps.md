---
title: 코딩 테스트를 위한 C++ 환경 구축하기
description: MacOS에 C++로 알고리즘 문제를 풀기 위한 환경을 구축하는 방법을 정리합니다.
thumbnail:
tags: ['Algorithm']
createdAt: 2023-01-21T10:54:09.418Z
---

> ## TL;DR
>
> - **GCC 설치**: Homebrew로 GCC를 설치한 후, C++ 파일을 컴파일할 수 있도록 기본적인 디렉토리와 파일을 설정합니다.
> - **bits/stdc++.h 설정**: bits/stdc++.h 헤더 파일을 수동으로 생성하여 모든 표준 라이브러리를 포함시킵니다. 이는 표준 라이브러리가 아니므로 별도의 설정이 필요합니다.
> - **컴파일 및 실행**: 설정 완료 후, C++ 파일을 컴파일하고 실행하여 "Hello World"를 출력하는 것을 확인합니다.

## GCC 설치

Homebrew로 gcc를 설치합니다.
**gcc는 GNU Compiler Collection의 약자**이며 C와 C++등의 언어를 지원하는 **컴파일러들 중에 하나**입니다.

```sh
brew update
brew install gcc
```

설치를 완료한 후, 원하는 디렉토리를 하나 만들고 해당 디렉토리로 이동합니다.
저는 PS라는 디렉토리를 만들고 여기에서 문제들을 푼 소스코드를 관리할 예정입니다.

```sh
mkdir PS
cd PS
```

PS 디렉토리에 vi 편집기로 컴파일러의 동작을 확인해볼 `test.cpp` 파일을 생성합니다.

```sh
vi test.cpp
```

아래의 소스코드를 입력한 후에 `:wq`로 저장하고 종료합니다.

```cpp title="test.cpp"
#include <bits/stdc++.h>
using namespace std; int main() {
  cout << "Hello World" << "\n";
    return 0;
}
```

저장한 `test.cpp` 파일을 아래의 명령어로 컴파일합니다.

```sh
g++ -std=c++14 -Wall test.cpp
```

- `g++` : gcc로 C++을 컴파일( C를 컴파일 하기위해서는 gcc를 사용)
- `-std=c++14` : C++14 버전으로 컴파일
- `-Wall` : 엄격한 규칙으로 컴파일

## bits/stdc++.h 헤더 파일 사용

위의 에러를 해결하기 전에 간략히 설명하자면 **`bits/stdc++.h`는 모든 표준 라이브러리의 선언을 포함하는 헤더파일입니다.** 이를 사용하면 알고리즘을 풀 때 자주 사용하는 라이브러리들을 미리 컴파일 해주기 때문에 일일이 추가해줄 필요는 없어집니다.

하지만 전체 소프트웨어공학적으로 보면 사용하지 않는 라이브러리도 모두 컴파일하기 때문에 시간이나 공간을 낭비하게 된다는 단점이 있습니다. 하지만 우리는 각각의 알고리즘 문제를 풀기 위함이기 때문에 큰 문제는 없습니다.

`bits/stdc++.h`는 아래과 같이 사용합니다.

```cpp
#include <bits/stdc++.h>
```

`bits/stdc++.h`는 표준 라이브러리가 아니기 때문에 따로 작업을 해줘야합니다.
이를 위해서 다음 명령어로 `/usr/local/include`로 이동한 후에 `bits`라는 디렉토리를 생성합니다.

```sh
cd /usr/local/include
mkdir bits
```

vi 편집기로 `bits` 안에 `stdc++.h` 파일을 생성하고

```sh
vi stdc++.h
```

해당 파일에 아래의 소스코드를 붙여 넣은 다음 `:wq`로 저장하고 종료합니다.

```cpp title="/usr/local/include/stdc++.h"
#ifndef _GLIBCXX_NO_ASSERT
#include <cassert>
#endif

#include <cctype>
#include <cerrno>
#include <cfloat>
#include <ciso646>
#include <climits>
#include <clocale>
#include <cmath>
#include <csetjmp>
#include <csignal>
#include <cstdarg>
#include <cstddef>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <ctime>

#if __cplusplus >= 201103L
#include <ccomplex>
#include <cfenv>
#include <cinttypes>
#include <cstdbool>
#include <cstdint>
#include <ctgmath>
#include <cwchar>
#include <cwctype>
#endif

// C++
#include <algorithm>
#include <bitset>
#include <complex>
#include <deque>
#include <exception>
#include <fstream>
#include <functional>
#include <iomanip>
#include <ios>
#include <iosfwd>
#include <iostream>
#include <istream>
#include <iterator>
#include <limits>
#include <list>
#include <locale>
#include <map>
#include <memory>
#include <new>
#include <numeric>
#include <ostream>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <stdexcept>
#include <streambuf>
#include <string>
#include <typeinfo>
#include <utility>
#include <valarray>
#include <vector>

#if __cplusplus >= 201103L
#include <array>
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <forward_list>
#include <future>
#include <initializer_list>
#include <mutex>
#include <random>
#include <ratio>
#include <regex>
#include <scoped_allocator>
#include <system_error>
#include <thread>
#include <tuple>
#include <typeindex>
#include <type_traits>
#include <unordered_map>
#include <unordered_set>
#endif
```

## 동작 확인하기

이제 모든 설치 및 세팅을 완료했으니 PS 디렉토리 내의 `test.cpp` 파일을 아래의 명령어로 컴파일 해봅시다.

```sh
g++ -std=c++14 -Wall test.cpp -o test.out
```

그럼 `test.out` 이라는 컴파일된 파일을 생성됩니다.

```sh
.
├── test.cpp
└── test.out
```

다음 명령어로 컴파일된 `test.out`을 실행하면 정상적으로 `Hello Wolrd`가 출력되는 것을 확인 할 수 있습니다.

```sh
./test.out
```
