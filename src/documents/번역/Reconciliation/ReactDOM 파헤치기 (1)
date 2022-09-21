---
date: '2022-09-17'
title: 'ReactDOM 파헤치기 (1)'
subTitle: 'ReactDOM 파헤치기 (1)'
parent: 'Study'
slug: '/study/react-dom'
---

## 📌 react-dom 패키지란?

리액트는 react-dom 패키지를 제공합니다. 이름에서 느껴지듯이, react-dom 패키지는 React와 DOM을 연결하는 패키지로, DOM에 접근 및 수정할 수 있는 메서드들을 제공합니다.

---

## 📌 react 패키지와는 어떤 차이점이 있을까?

원래 react-dom은 react 패키지의 일부였다가, react-native가 나타나면서 분리되었습니다. react-dom은 react 요소를 웹에 렌더링하고, react-native는 react 요소를 모바일 플랫폼에 렌더링합니다. 그리고 react는 웹과 앱에서 전부 쓸 수 있는 기능들을 제공합니다. 이렇듯, react와 react-dom을 분리함으로써, react를 사용할 수 있는 환경을 더욱 더 많이 제공할 수 있게됩니다.

---

## 📌 react가 제공하는 메서드와 react-dom이 제공하는 메서드

react가 제공하는 메서드들은 다음과 같습니다.

1. createElement
2. createClass
3. Component
4. Children

react-dom이 제공하는 메서드들은 다음과 같습니다.

1. createPortal
2. flushSync
3. render
4. hydrate
5. findDOMNode
6. unmountComponentAtNode

위 리스트중, render, hydrate, findDOMNode, unmountComponentAtNode 메서드는 legacy로 취급됩니다. render와 hydrate는 클라이언트 메서드를 제공하는 react-dom/client 패키지의 createRoot와 hydrateRoot 메서드로 대체되었습니다.또한 unmountComponentAtNode는 createRoot의 unmount 메서드로 대체되었습니다. 만약 render와 hydrate 메서드를 사용한다면, 리액트는 17버전으로 동작하게 됩니다.

react-dom은 클라이언트 앱이냐 서버 앱이냐에 따라서 다음 두가지 모듈을 제공합니다.

1. rect-dom/client
2. react-dom/server

react-dom/server는 별도 문서로 정리하겠습니다.

---

## 📌 render 메서드

## 📚 참고문헌

**[stackoverflow: React vs ReactDOM?](https://stackoverflow.com/questions/34114350/react-vs-reactdom)**

**[medium: React vs React-DOM](https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745)**

**[Why ReactDOM is seperated from React?](https://iq.js.org/questions/react/why-reactdom-is-separated-from-react)**

**[ReactDOMClient](https://reactjs.org/docs/react-dom-client.html)**

