---
title: call by value와 call by reference
description: 자바스크립트의 call by value와 call by reference 동작에 대해서 정리합니다.
thumbnail:
tags: ['JavaScript']
createdAt: 2023-09-05T10:11:42.731Z
---

> ## TL;DR
>
> - **Call by Value**: 함수에 인자로 전달된 값의 복사본이 매개변수로 전달됩니다. 이 방식은 자바스크립트의 기본형 타입(Primitive type)인 숫자, 문자열 등에서 적용됩니다. 예를 들어, 숫자 값 num이 복사되어 함수의 매개변수로 전달되며, 원본 값인 num에는 영향을 미치지 않습니다.
> - **Call by Reference**: 함수에 인자로 전달된 데이터의 주소(참조)가 매개변수로 전달됩니다. 이 방식은 자바스크립트의 참조형 타입(Object, Array, Function 등)에서 적용됩니다. 그러나 자바스크립트에서는 객체의 프로퍼티는 변경할 수 있지만, 객체 자체의 참조를 변경하는 것은 불가능합니다.
> - **자바스크립트의 동작 방식**: 자바스크립트는 기본형 타입에 대해서는 Call by Value로 동작하며, 참조형 타입에 대해서는 Call by Reference로 동작하지만 객체의 참조를 변경할 수 없기 때문에 실제로는 Call by Sharing으로 동작합니다.

## Call by value와 Call by reference

**`Call by value`와 `Call by reference`는 함수의 인자(argument)로 변수가 들어와서 매개변수(parameter)로 전달되는 경우에 어떤 방식으로 전달되는지를 결정하는 방식입니다.** 먼저 본론에 앞서 이자와 매개변수에 대해 정리하겠습니다.

```js
function sum(a, b) {
  // a과 b는 매개변수(parameter)
  return a + b;
}
sum(10, 20); // 10과 20은 인자(argument)
```

## 인자와 매개변수

인자(argument)는 어떤 함수가 호출될 때 전달되는 값을 의미하고 매개변수(parameter)는 전달된 값을 받아들이는 변수를 의미합니다.

## Call by value

**Call by value는 말 그대로 복사된 값을 인자로 넘겨서 매개변수로 전달하는 방식입니다.** 자바스크립트의 기본형 변수 타입(Primitive type)의 경우에는 Call by value 방식으로 전달됩니다.

```js
function foo(param) {
  param = param * 10;
  console.log(param); // 50
}

let num = 5;

foo(num);
console.log(num); // 5
```

- `num` 의 값이 복사되어서 `foo` 함수의 매개변수로 전달됩니다.
- 전달된 매개변수는 함수의 지역변수가 되고 이를 변경해도 원본에 영향을 주지 않습니다.

## Call by Reference

**Call by reference는 실제의 원본 데이터가 위치하는 주소의 값을 인자로 넘겨서 매개변수로 전달하는 방식입니다.** 참조형 변수 타입(Reference type)인 `Object`, `Array`, `Function`... 등이 Call by reference 방식으로 전달됩니다.

**하지만 자바스크립트에서 Call By Reference는 완전하지 않습니다!!!** 다음 예시를 봅시다.

```js
function foo(obj1, obj2) {
  obj1.a = 'Bye';
  obj2 = 'Bye';
}

let obj1 = { a: 'Hello' };
let obj2 = { a: 'Hello' };

foo(obj1, obj2);
console.log(obj1); // { a: 'Bye' }   - Call by Reference로 동작
console.log(obj2); // { a: 'Hello' } - 동작 안함
```

- `obj1` 과 `obj2` 의 주소값을 `foo` 함수의 인자로 넘겨서 매개변수로 전달합니다.
- 전달된 매개변수 `obj1` 의 프로퍼티 값을 변경하면 정상적으로 원본의 프로퍼티 값이 변경됩니다.
- 전달된 매개변수 `obj2` 의 **주소값 자체를 변경하는 것은 불가능**하기 때문에 동작하지 않습니다. 자세히 말하면 자바스크립트의 경우에는 객체의 프로퍼티 값이 아닌 객체 자체의 변경을 허용하지 않는 것입니다. 그 이유는 겉보기에는 주소값을 참조하는 듯이 보이지만 실제로는 주소값의 복사본을 만들어서 전달하기 때문입니다.

## 자바스크립트는 Call by Sharing

위의 예시들을 정리해보자면 다음과 같습니다.

- 기본형 타입의 경우에는 Call by value로 동작합니다.
- 참조형 타입의 경우에는 Call by Reference로 동작하지만 완전하지 않다.
- 혼용해서 사용하기 때문에 자바스크립트는 **Call By Sharing으로 동작**한다고 말합니다.
