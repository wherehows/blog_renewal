---
date: '2022-09-11'
title: 'tsconfig --downlevelIteration'
subTitle: 'DownlevelIteration'
grandParent: ''
parent: 'Study'
slug: '/study/downlevel-iteration'
---

본 글은 [Downlevel Iteration for ES3/ES5 in TypeScript](https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript)의 일부를 번역해놓은 글 입니다.

TypeScript 2.3 버전에는 tsconfig의 target이 es3와 es5일때, es6의 이터레이션 프로토콜 지원을 위한 downlevelIteration 플래그가 도입되었습니다.

본 내용에 들어가기에 앞서서 tsconfig.json compilerOptions의 target과 lib 옵션에 대해서 먼저 알아야 합니다.

---

## 📌 compilerOptions --- target

모던 브라우저의 경우 es6 문법을 대부분 지원하지만, 더 옛날 환경에서의 동작이나, 더 최신 환경에서의 동작을 보장해야 할때도 있습니다. target에 ES 버전을 설정함으로써 타입스크립트 코드를 해당 버전의 자바스크립트 코드로 트랜스파일 가능합니다. 예를들면 es6 문법 중 하나인 화살표 함수를 function 키워드를 사용한 es5 이하의 문법으로 변환할 수 있습니다. 참고로 target의 기본값은 es3입니다.

target을 바꾸면 다음에 설명할 lib 설정의 기본값이 바뀝니다. target을 es5로 설정하면 lib에는 ‘dom’과 ‘es5’가 기본으로 설정됩니다. target과 lib을 동시에 설정함으로서 디테일한 설정이 가능하지만, 편의상 target만 설정해도 좋습니다.

node 개발자의 경우, [관련된 커뮤니티](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)에서 특정 플랫폼과 버전에 따른 tsconfig 설정을 미리 만들어 놓았습니다.

target의 설정값중 하나인 ESNext의 경우, 현재 설치된 타입스크립트 버전에서 지원할 수 있는 가장 최신 버전의 ES를 의미합니다. 이 설정은 타입스크립트 버전에 의존하기 때문에 유의해야 합니다.

---

## 📌 compilerOptions --- lib

타입스크립트는 기본적으로 빌트인 객체(Math) 혹은 호스트 객체(document)에 대한 타입 정의들을 포함하고 있습니다. 또한 target에 매칭되는 비교적 최신 기능들, 가령 target이 es6 이상이면 Map등에 대한 타입 정의 역시도 갖고 있습니다. 이러한 선언들은 d.ts 선언 파일들에 담겨있는데, lib을 설정하므로써 필요한 타입 정의 파일들을 선택적으로 고를 수 있습니다. 선택적으로 골라야 하는 상황은 아래와 같습니다.

1. 프로젝트가 브라우저에서 동작하지 않기 때문에 DOM 타입이 필요 없을 수 있습니다.

2. 특정 버전의 문법 중 일부가 필요하지만, 해당 버전의 문법 전체가 필요하지 않을 수 있습니다.

3. 높은 버전의 문법 중 일부에 대해서 폴리필이 존재할 수 있습니다.

---

## 📌 target과 lib의 차이점

target과 lib에 대한 공식 문서 설명이 빈약한 것 같아 [TypeScript lib vs target: What’s the difference?](https://www.claritician.com/typescript-lib-vs-target-what-s-the-difference) 를 추가적으로 번역했습니다.

target 옵션에 ‘es5’를 설정한다는 것은 다음 두가지 의미를 갖습니다.

첫번째로, 타입스크립트 코드에 es5에서 지원되지 않는 자바스크립트 문법이 존재한다면, 컴파일시 이를 es5의 자바스크립트 문법으로 트랜스파일링 한다는 것입니다. 가령, 다음과 같은 화살표 함수는

```typescript
const add = (a: number, b: number) => a + b
```

컴파일시 다음과 같이 트랜스파일 됩니다.

```typescript
var add = function (a, b) {
  return a + b
}
```

두번째로, es5에서 지원되지 않는 API 사용이 불가능해집니다. 타입스크립트는 폴리필을 제공하지 않기 때문에, es6 이상에서만 지원되는 Promise 사용이 불가능합니다.

아래 코드에 대해서는

```typescript
return Promise.resolve(value)
```

다음과 같은 에러를 발생합니다.

```typescript
// 'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later.
```

타입스크립트는 트랜스파일 기능은 존재하지만, Promise나 Map, array.find에 대한 폴리필을 제공하지 않습니다. 바벨과는 다르게요

그러므로 Promise를 es5에서 사용하기 위해서 개발자는 Promise 폴리필을 추가해야 합니다. 하지만 폴리필을 추가해도 타입스크립트는 이를 알지 못해서 계속 에러를 발생시킵니다. 그렇기 때문에 lib 옵션이 도입되었습니다. lib 옵션 설정을 통해서 타입스크립트에게 런타임에 사용할 자바스크립트 API를 알려줄 수 있습니다.

여기서는 Promise API를 사용하기 때문에, lib을 [’dom’, ‘es5’, ‘es2015.promise’]를 추가하여 관련한 타입 선언을 포함시킬 수 있습니다.

downlevelIteration에 대해서 알아보기 전에 알아야 할 내용은 전부 다루었습니다. 이제부터 downlevelIteration에 대해서 알아봅시다.

---

## 📌 for...of 문을 이용해서 배열 순회하기

tsconfig를 다음과 같이 설정해 놓았습니다.

```typescript
{
	compilerOptions: {
		target: 'es5',
	}
}
```

그리고 index.ts파일에 다음과 같이 es6 문법인 for... of 문으로 배열을 순회하며 로깅하는 코드가 존재합니다.

```typescript
const numbers = [4, 8, 15, 16, 23, 42]

for (const number of numbers) {
  console.log(number)
}
```

이 코드를 컴파일 없이 바로 실행했을 때 다음과 같이 출력되는 것을 확인할 수 있습니다.

```typescript
$ node index.ts

4
8
15
16
23
42
```

그러면 이제 index.ts를 index.js로 컴파일해봅니다.

```typescript
$ tsc -p .
```

만들어진 자바스크립트 코드를 보면, for...of 문이 index 기반의 for 문으로 바뀐 것을 확인할 수 있습니다.

```typescript
var numbers = [4, 8, 15, 16, 23, 42]
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
  var number = numbers_1[_i]
  console.log(number)
}
```

이 코드를 실행하면 아래와 같이 잘 동작하는 것을 확인할 수 있습니다.

```typescript
$ node index.js

4
8
15
16
23
42
```

node index.ts나 node index.js나 실행 결과가 동일합니다. 이는 타입스크립트 컴파일이 코드의 동작에 아무런 영향도 끼치지 않는다는 것을 의미합니다.

---

## 📌 for...of 문을 이용해서 문자열 순회하기

이번에는 배열이 아닌 문자열을 순회해봅시다.

```typescript
const text = 'Booh! 👻'

for (const char of text) {
  console.log(char)
}
```

컴파일 없이 바로 코드를 실행해보면 아래와 같은 결과가 나오는 것을 알수 있습니다.

```typescript
$ node index.ts

B
o
o
h
!

👻
```

이제 index.ts를 index.js로 컴파일하면 아래와 같이 코드가 만들어지는 것을 알수 있습니다.

```typescript
var text = 'Booh! 👻'
for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
  var char = text_1[_i]
  console.log(char)
}
```

하지만 이를 실행했을 때 코드 동작은 전혀 달라집니다.

```typescript
$ node index.js

B
o
o
h
!

�
�
```

유령 이모지의 code point 는 U+1F47B 입니다. 좀 더 정확히 말하면, U+D83D와 U+DC7B의 두개의 code unit으로 구성되어 있습니다. 문자열의 특정 index에 접근하면 code point가 아닌 code unit을 return 받게 됩니다. (이 부분에 대한 내용은 별도 문서에서 다루겠습니다.)

index.ts와 index.js의 동작이 다른 이유는, 문자열 이터레이션 프로토콜의 경우, code point를 순회하지만, for 문은 ghost 이모지를 code unit으로 쪼개어 순회하기 때문입니다. 이는 단순히 문자열 length 프로퍼티에 접근하는 것과 문자열 스프레딩 결과물에 의해 생성된 값을 담은 배열의 length 프로퍼티에 접근한 결과를 보면 납득할 수 있습니다.

```typescript
const ghostEmoji = '\u{1F47B}'

console.log(ghostEmoji.length) // 2
console.log([...ghostEmoji].length) // 1
```

요약하자면, for...of 문이 ES3 혹은 ES5를 타게팅할 때 항상 올바르게 동작하는 것은 아닙니다. 이것이 —downlevelIteration 등장한 이유입니다.

---

## 📌 downlevelIteration의 등장

이번에는 tsconfig의 compilerOptions에 downlevelIteration을 추가하여, 앞선 index.ts를 index.js로 다시 컴파일 해봅시다.

```typescript
var __values =
  (this && this.__values) ||
  function (o) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator],
      i = 0
    if (m) return m.call(o)
    return {
      next: function () {
        if (o && i >= o.length) o = void 0
        return { value: o && o[i++], done: !o }
      },
    }
  }
var text = 'Booh! 👻'
try {
  for (
    var text_1 = __values(text), text_1_1 = text_1.next();
    !text_1_1.done;
    text_1_1 = text_1.next()
  ) {
    var char = text_1_1.value
    console.log(char)
  }
} catch (e_1_1) {
  e_1 = { error: e_1_1 }
} finally {
  try {
    if (text_1_1 && !text_1_1.done && (_a = text_1.return)) _a.call(text_1)
  } finally {
    if (e_1) throw e_1.error
  }
}
var e_1, _a
```

보시다시피, index 기반의 for 문이 아닌, 이터레이션 프로토콜을 좀더 알맞게 구현한, 훨씬 더 정교한 코드가 만들어졌습니다. 만들어진 코드를 조금 살펴보면,

- \_\_values 보조 함수는 [Symbol.iterator] 메서드를 호출하고, 찾을 수 없다면 이터레이터를 직접 만듭니다.
- for 문은 code unit을 순회하는 것이 아닌, done이 true가 될때까지 next 메서드를 호출합니다.
- ECMAScript 스펙에 맞게 이터레이션 프로토콜을 구현하기 위해 try / catch / finally 문도 추가됩니다.

이 코드를 실행하게 되면 코드가 정상적으로 동작하는 것을 알수 있습니다.

```typescript
$ node index.js

B
o
o
h
!

👻
```

---

## 📌 es6 Collection을 downlevelIteration 하기

ES6에서 Map과 Set의 새로운 컬렉션이 추가되었습니다. 여기서는 for of 문법으로 어떻게 Map을 순회하는지 보려고 합니다.

```typescript
const digits = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
])

for (const [digit, name] of digits) {
  console.log(`${digit} -> ${name}`)
}
```

위 코드는 아래와 같이 정상적으로 작동합니다.

```typescript
$ node index.ts

0 -> zero
1 -> one
2 -> two
3 -> three
4 -> four
5 -> five
6 -> six
7 -> seven
8 -> eight
9 -> nine
```

하지만 타입스크립트 컴파일러는 Map을 찾을 수 없다는 에러를 발생합니다. Map 컬렉션을 지원하지 않는 es5를 타게팅하기 때문입니다. 만약 Map에 대한 폴리필을 제공한다고 할때, 이 코드가 정상적으로 컴파일되게 하려면 어떻게 해야할까요?

해결책은 lib 옵션에 ‘es2015.collection’와 ‘es2015.iterable’ 값을 넣어주는 것 입니다. 이는 타입스크립트에게 ES5로 타게팅을 하되, es6의 컬렉션과 이터러블을 지원할 것임을 설정하는 것 입니다. lib 옵션을 설정하는 순간, 타게팅을 es5로 설정했을 때 lib의 기본값은 적용되지 않기때문에, ‘dom’과 ‘es5’ 역시도 추가해주어야 합니다.

결과적으로 tsconfig.json은 아래와 같이 설정됩니다.

```typescript
{
  "compilerOptions": {
    "target": "es5",
    "downlevelIteration": true,
    "lib": [
      "dom",
      "es5",
      "es2015.collection",
      "es2015.iterable"
    ]
  }
}
```

컴파일을 하면 다음과 같은 코드가 만들어집니다.

```typescript
var __values =
  (this && this.__values) ||
  function (o) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator],
      i = 0
    if (m) return m.call(o)
    return {
      next: function () {
        if (o && i >= o.length) o = void 0
        return { value: o && o[i++], done: !o }
      },
    }
  }
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
var digits = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
])
try {
  for (
    var digits_1 = __values(digits), digits_1_1 = digits_1.next();
    !digits_1_1.done;
    digits_1_1 = digits_1.next()
  ) {
    var _a = __read(digits_1_1.value, 2),
      digit = _a[0],
      name_1 = _a[1]
    console.log(digit + ' -> ' + name_1)
  }
} catch (e_1_1) {
  e_1 = { error: e_1_1 }
} finally {
  try {
    if (digits_1_1 && !digits_1_1.done && (_b = digits_1.return))
      _b.call(digits_1)
  } finally {
    if (e_1) throw e_1.error
  }
}
var e_1, _b
```

한가지 주목해야 하는 것은, 이번에는 \_\_read 변수까지 생성되어, 코드 사이즈가 크게 증가한다는 것입니다.

---

## 📌 —importHelpers와 tslib npm 패키지로 코드 사이즈 줄이기

위를 보면 알겠지만 \_\_values, \_\_read 보조 함수가 추가되는 것을 알수있습니다. 타입스크립트 프로젝트에서 만약 여러 파일들을 컴파일하는 경우, 코드 사이즈는 더욱 더 방대하게 늘어날 것입니다.

보통 프로젝트에서 번들러를 사용하는데, 번들 결과물 역시도 이러한 보조 함수때문에 불필요하게 커지게됩니다.

이 문제에 대한 해결법은 —importHelpers 컴파일러 옵션과 tslib npm 패키지를 사용하는 것입니다. —importHelpers는 타입스크립트 컴파일러가 모든 보조함수를 tslib에서 가져오도록 합니다. 웹팩은 단순히 npm 패키지를 한번만 기술하므로서, 코드 중복을 방지할 수 있게 됩니다. 지금까지 설명한 내용을 코드로 보면 아래와 같습니다.

우선 테스트할 코드를 다음과 같이 작성해줍니다.

```typescript
const digits = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
])

export function printDigits() {
  for (const [digit, name] of digits) {
    console.log(`${digit} -> ${name}`)
  }
}
```

컴파일러 옵션을 다음과 같이 수정해줍니다.

```typescript
{
  "compilerOptions": {
    "target": "es5",
    "downlevelIteration": true,
    "importHelpers": true,
    "lib": [
      "dom",
      "es5",
      "es2015.collection",
      "es2015.iterable"
    ]
  }
}
```

컴파일을 했을 때 결과물은 다음과 같이 만들어집니다.

```typescript
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
var digits = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
])
function printDigits() {
  try {
    for (
      var digits_1 = tslib_1.__values(digits), digits_1_1 = digits_1.next();
      !digits_1_1.done;
      digits_1_1 = digits_1.next()
    ) {
      var _a = tslib_1.__read(digits_1_1.value, 2),
        digit = _a[0],
        name_1 = _a[1]
      console.log(digit + ' -> ' + name_1)
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 }
  } finally {
    try {
      if (digits_1_1 && !digits_1_1.done && (_b = digits_1.return))
        _b.call(digits_1)
    } finally {
      if (e_1) throw e_1.error
    }
  }
  var e_1, _b
}
exports.printDigits = printDigits
```

같은 파일 안에 보조 함수들이 정의되지 않고, 대신 코드 시작부터 tslib 패키지를 가져오는 것을 알수 있습니다.

---

## 📌 결론

타입스크립트의 downlevelIteration 프로토콜은 es6의 이터레이션 프로토콜이 이용된 문법을 es5로 트랜스파일링할때 조금 더 정확하게 트랜스파일링 할수 있도록 하는 옵션입니다. 옵션을 키게되면 코드 사이즈가 전체적으로 커지게 되지만, --ImportHelpers와 tslib npm 패키지를 이용해서 코드 사이즈를 줄여줄 수 있습니다.

---

## 📚 참고문헌

[타입 스크립트 공식문서, downlevelIteraton](https://www.typescriptlang.org/tsconfig#downlevelIteration)
[타입 스크립트 공식문서, tsconfig 설정](https://www.typescriptlang.org/tsconfig)

