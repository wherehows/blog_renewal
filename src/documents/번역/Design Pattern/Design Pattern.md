---
date: '2022-09-11'
title: 'Design pattern'
subTitle: 'Design Pattern'
parent: 'Study'
slug: '/study/design-pattern'
---

본 글은 전반적으로 [refactoring.guru](https://refactoring.guru/)와 [Design Patterns In Typescript](https://sbcode.net/typescript/)의 내용을 참고, 번역했습니다.

## 📌 Facade Pattern

### 1. Intent

structural pattern에 속하며, 라이브러리나 프레임워크에 대한 간단하고 편리한 인터페이스를 제공합니다.

### 2. Problem

매우 복잡한 라이브러리나 프레임워크에 속한 광범위한 객체 집합들과 함께 동작해야하는 코드를 작성한다고 상상해보세요. 보통 이러한 객체들은 초기 내용을 설정하고, 의존성을 추적하고, 올바른 순서대로 메서드가 실행돼도록 해야합니다. 결과적으로는 당신의 클래스 내 비지니스 로직이 라이브러리 클래스의 구현 내용들과 강하게 결합되면서 이해하기 어렵고 유지보수하기 힘들게 됩니다.

### 3. Solution

facade는 라이브러리가 갖고 있는 수많은 기능을 제공하는 것이 아니라 몇몇의 필수적인 기능만 제공하며, 복잡한 라이브러리에 대한 간단한 인터페이스를 제공하는 클래스입니다.

### 4. Real-World Analogy

현실 세계에서 전화 주문을 생각하면 쉽습니다.

![](./place-order.png)

주문을 위해서는 주문, 지불, 배달에 대한 과정을 직접 밟아야 하지만, 전화 상담원을 통해서 이러한 과정을 쉽게 처리할 수 있습니다.

### 5. Structure

![](facade-structure.png)

1. **Facade**는 하위 시스템(라이브러리나 프레임워크)에 대한 간단하고 편리한 인터페이스를 제공합니다. facade는 client의 요청이 어디로 가야하는지, 그리고 하위 시스템의 기능들이 어떻게 실행돼야 하는지 알고 있습니다.

2. **An additional facade**는 facade가 하나만 존재하는 경우 발생하는 복잡성을 막기위해 존재합니다. client나 다른 facade에서 접근 가능합니다.

3. **Complex Subsystem**은 수십개의 다양한 객체들로 구성됩니다. 이 객체들을 이용하기 위해서는 올바른 순서로 객체를 초기화하거나 올바른 형태로 데이터를 전달하는 것과 같은 하위 시스템에 대한 깊은 이해가 필요합니다.

4. **Client**는 하위 시스템의 객체들을 직접 이용하는게 아니라, facade를 이용합니다.

### 6. Pros and Cons

복잡한 하위 시스템의 코드를 분리할 수 있지만, god object가 될수도 있습니다.

---

