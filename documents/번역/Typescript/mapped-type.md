---
date: '2022-10-13'
title: 'Mastering mapped types in TypeScript'
subTitle: 'mapped type 마스터하기'
grandParent: ''
parent: 'Typescript'
slug: '/typescript/mapped-type'
---

## 📌 타입스크립트에서 Mapped Type은 왜 사용될까요?

mapped type은 어떤 타입을 기반으로 타입을 선언해야 할때 유용합니다.

```javascript
// 현재 유저의 설정 값
type AppConfig = {
  username: string,
  layout: string,
}

// 현재 유저가 설정 값 변경을 허용 했는지 여부
type AppPermissions = {
  changeUsername: boolean,
  changeLayout: boolean,
}
```

위 예제의 문제는 AppConfig와 AppPermissions간에는 AppConfig에 새로운 필드가 추가되면, AppPermissions에도 새로운 필드가 추가돼야하는 암묵적인 관계가 형성되어 있습니다. 이 둘의 관계를 프로그래머가 숙지하고 있으면서 필드가 추가될 때 양쪽을 직접 업데이트 하는 것 보다, 타입 시스템이 이 관계를 알고 있어서 알아서 업데이트 해주는 방향이 더 낫습니다.

mapped type의 구체적인 개념에 대해서는 아래에서 더 알아보기로 하고, 위 예제를 mapped type을 이용해서 수정하면 아래와 같아집니다.

```javascript
type AppConfig = {
  username: string,
  layout: string,
}

type AppPermissions = {
    [Property in keyof AppConfig as `change${Capicalize<Property>}`]: boolean;
}
```

우리는 Property와 keyof 연산자 사이의 in을 통해 mapped type이 사용되었음을 알수 있습니다. 위 코드에서는 타입 시스템이 AppConfig와 AppPermissions의 관계를 관리하기 때문에, AppConfig에 새로운 필드가 추가될 때마다 개발자가 직접 AppPermissions에 추가해줄 필요가 없어졌습니다.

## 📌 Mapped Type의 코어 개념

mapped type의 코어 개념에는, map, indexed access type, index signature, union type, keyof type operator 등이 있습니다. 해당 내용을 따로 기술하진 않겠습니다.

## 📌 Mapped Type의 사용 예제와 해석

사용 예제를 이해하기 전에 mapped type의 기본 구조에 대해서 한가지만 알고 갑시다.

```javascript
[P in keyof T]: T[P];
```

위 코드에서 P는 유니온 타입 keyof T를 구성하는 string literal type을 나타냅니다. 그리고 string literal type P는 T[P] 타입을 갖습니다. 이러한 이해를 바탕으로

다음과 같이 전자기기의 manufacturer와 price에 대한 정보를 갖는 타입이 있다고 가정합시다.

```javascript
type Device = {
  manufacturer: string,
  price: string,
}
```

그리고 각 Device의 프로퍼티는 인간이 읽을 수 있는 데이터의 형태로 변환돼야 한다고 가정해봅시다. 그리고 당연히 그에 따른 타입 역시도 필요하게 되는데, 이때 mapped type을 이용할 수 있습니다.

```javascript
type DeviceFormatter = {
    [key in keyof Device as `format${Capitalize<Key>}`]: (value: Device[key]) => string;
}
```

참고로, 문서에 설명은 안되어 있지만 `Capitalize<Key>`의 타입 정의는 다음과 같지 않을까 싶습니다.

```javascript
type Capitalize<Key> = (word: Key) => string
```

어찌됐건 앞선 DeviceFormatter의 코드를 쪼개어 해석해 봅시다.

Key in keyof Device는 keyof 타입 연산자를 이용해서 Device 타입의 키들로 구성된 union 타입을 만들어냅니다. 그리고 이를 index signature 안에 넣어서 Device의 모든 프로퍼티를 순회하며 DeviceFormatter의 프로퍼티에 매핑시킵니다(Device 프로퍼티 타입을 이용해서 DeviceFormatter의 프로퍼티 타입을 만드는 것 입니다). `format${Capitalize<key>}`는 프로퍼티 이름을 x에서 formatX로 변경하기 위해서 key remapping과 template literal type을 사용한 것입니다.

여기서 [key remapping](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)은 mapped type을 사용할 때, as를 이용해서 키를 다시 매핑시키는 것을 의미합니다. [template literal type](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)은 자바스크립트에서 사용하던 [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)과 동일합니다. 기존의 문자열과 데이터를 이용해서 새로운 문자열을 만드는 것인데, 이를 타입을 위해서 사용할 뿐입니다.

결과적으로 DeviceFormatter가 만들어내는 타입은 다음과 같습니다.

```javascript
type Device = {
  manufacturer: string,
  price: string,
}

type DeviceFormatter = {
  formatManufacturer: (value: string) => string,
  formatPrice: (value: number) => string,
}
```

만약 Device에 releaseYear 필드를 개발자가 추가한다면, DeviceFormatter 필드는 타입 시스템이 추가할 것입니다.

```javascript
type Device = {
  manufacturer: string,
  price: number,
  releaseYear: number,
}

type DeviceFormatter = {
  formatManufacturer: (value: string) => string,
  formatPrice: (value: number) => string,
  formatReleaseYear: (value: number) => string,
}
```

## 📌 제네릭 타입을 이용해서 재사용 가능한 mapped type 만들기

앞선 Device에 이어서 다음과 같은 Accessory에 대한 타입 정보도 만들어야 한다고 가정해 봅시다.

```javascript
type Accessory = {
  color: string,
  size: number,
}
```

그리고 앞선 Device처럼 Accessory의 프로퍼티를 기반으로 한 새로운 객체를 만들어야 한다고하면, 다음과 같이 구현할 수 있을 것 입니다.

```javascript
type AccessoryFormatter = {
  [Key in keyof Accessory as `format${Capitalize<Key>}`]: (value: Accessory[Key]) => string;
};
```

앞선 DeviceFormatter와의 차이점은 오직 참조 대상이 Device에서 Accessory로 바뀌었다는 것 입니다. 우리는 DeviceFormatter와 AccessoryFormatter라는 중복된 코드를 작성하는 것이 아닌, 제네릭 타입을 이용해서 DRY한 코드를 작성할 수 있습니다.

```javascript
type Formatter<T> = {
  [Key in keyof T as `format${Capitalize<Key & string>}`]: (value: T[Key]) => string;
}
```

그리고 DeviceFormatter와 AccessoryFormater는 다음과 같이 정의할 수 있습니다.

```javascript
type DeviceFormatter = Formatter<Device>
type AccessoryFormatter = Formatter<Accessory>
```

---

## 📚 참고문헌

**[Mastering mapped types in TypeScript](https://blog.logrocket.com/mastering-mapped-types-typescript/)**

**[Mapped Types in TypeScript](https://mariusschulz.com/blog/mapped-types-in-typescript)**

