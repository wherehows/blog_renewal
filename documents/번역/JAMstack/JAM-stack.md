---
date: '2022-10-09'
title: 'Jamstack'
subTitle: 'Jamstack'
grandParent: 'Study'
parent: 'Web'
slug: '/study/jamstack'
---

본 글은 [What is Jamstack](https://umbraco.com/knowledge-base/jamstack/)의 내용을 참고, 번역했습니다.

## 📌 Jamstack에 대한 간단한 소개

Jamstack은 웹 개발을 위한 프레임워크나 기술이 아닌 아키텍쳐를 의미하며 빠르고, 안전하고, 확장성있는 웹사이트 개발이 가능하도록 합니다. 핵심적인 원리는 pre-rendering과 decoupling이며, 주된 목표는 서버의 로드를 가능한한 클라이언트로 옮기는 것입니다.

---

## 📌 Pre-rendering

요청이 들어왔을 때 마크업을 만드는 것이 아닌, 빌드 과정에서 마크업을 미리 만들어 놓는 것을 의미합니다. 이 덕분에 CDN으로부터 사이트를 전달받을 수 있게되어, 서버 운용의 비용과 복잡성, 위험성을 줄일 수 있습니다.

Gatsby, Hugo, Jekyll과 같은 유명한 정적 사이트 생성 툴들이 존재하기 때문에, 많은 개발자들은 이미 Jamstack 개발자가 되기 위한 도구에 익숙합니다.

---

## 📌 CMS(Contnent Management Systme)란?

decoupling에 대해서 설명하기 전에, CMS에 대한 이해가 선행되어야 합니다. CMS는 유저가 기술에 대한 이해나 코드 작성 없이 웹 사이트를 생성, 배포, 관리할 수 있는 웹사이트입니다. CMS는 Tranditional CMS와 Headless CMS 둘로 나뉩니다.

Traditional CMS는 하나의 bucket안에 사이트 생성에 필요한 모든 구성 요소(데이터 베이스, 컨텐츠, 프론트엔드 템플릿 등)가 다 들어있습니다. 크게보면 frontend와 backend가 같이 있는, monolithic(모든 것이 하나에 다 들어가 있는)한 구조로, 각 구성 요소들이 강하게 coupling 되어 있어서, 성능이나 기능 구현에 있어서 제약이 있었습니다.

그리고 Traditional CMS에서 frontend(head)를 분리시킨 것이 Headless CMS입니다. frontend agnostic합니다. Traditional CMS에서는 content가 같은 bucket 안에 있기 때문에 바로 접근이 가능하지만, Headless CMS는 그렇지 않습니다. CMS 밖에 있는 frontend framework는 API를 이용해서 CMS의 content에 접근이 가능합니다.

Headless CMS는 onmichannel 하다는 장점이 있습니다. omni는 '모든'을 의미하는 접두사로, omnichannel은 모든 채널 정도로 읽으면 될듯합니다. Headless CMS를 사용하는 경우, 컨텐츠가 어디서, 어떻게 보여질지 걱정하지 않아도 됩니다. 웹사이트, 모바일폰, 스마트와치, AR/VR 등, Headless CMS를
사용한다면 컨텐츠를 전달할 수 있는 채널은 무궁무진 합니다.

---

## 📌 Jamstack vs 고전적인 CMS

Jamstack의 경우 앞서 설명한 것처럼 고전적인 CMS가 갖는 문제를 해결하기 위해서 bucket안의 구성 요소들을 최대한 분리(decoupling)했습니다. bucket 안의 구성 요소들을 최대한 분리하여 의존성을 낮추고, 개발자로 하여금 기술 선택에 있어서 자유를 주었습니다. 기술 선택에 있어서 Headless CMS도 하나의 선택지가 될수 있는 것이죠. 또한 CMS와는 다르게, 유저는 서버에서 만들어진 마크업이 아닌 CDN으로부터 캐싱된 마크업을 보게됩니다.

---

## 📌 웹 개발 히스토리와 자바스크립트의 역할

웹 개발 히스토리와 자바스크립트의 역할을 이해하면 Jamstack을 이해하는데 도움이 됩니다.

Jamstack은 오늘날에는 인기가 많지만, 10년 전까지만해도 인기가 없었습니다. 초창기 웹사이트들은 단순히 정적인 HTML을 보여주는 것에 불과했습니다. 하지만 인터넷과 이를 둘러싼 기술들이 발전하면서 웹사이트는 더 많은 일을 할수있게 되었고, 이러한 변화로 유저는 더이상 정적인 HTML이 아닌 맞춤형 컨텐츠를 담은 HTML을 받을 수 있게 되었습니다.

다만 여기에는 한가지 문제가 존재했습니다. 맞춤형 컨텐츠를 만들기 위해서 서버의 로드가 자연스럽게 커지게 되었고, 자연스럽게 기존의 정적인 HTML보다 화면에 보여지기까지 더 오랜 시간이 요구되어 사용자 경험이 떨어지게 되었습니다. 불행하게도 당시 이를 해결할 방법이 마땅히 존재하지 않았지만, 자바스크립트의 등장 및 발전과 함께 이를 해결할 수 있게 되었습니다.

자바스크립트를 이용해서 페이지가 로드된 이후에 페이지를 동적으로 수정할수 있게 되었습니다. 브라우저는 더 이상 문서 뷰어가 아닌, 웹사이트 컨텐츠가 어떻게 보여지고 동작할지를 결정하는 복잡한 작업들을 처리할수 있게 되었습니다. 이러한 발전은 모든 웹사이트에 엄청난 혜택을 가지고 왔는데, 가장 큰 혜택은 서버의 로드를 클라이언트로 옮길 수 있게 된 것입니다.

---

## 📌 Jamstack을 사용하는 이유

고전적인 웹사이트 개발 방법 대신 Jamstack을 사용하는 이유는 서버의 부하를 줄이기 위해서입니다. 이로인해서 얻게되는 이득은 다음과 같습니다.

### --- 빠른 성능

CDN을 통해서 pre-built된 마크업과 asset을 전달합니다.

### --- 안정성

서버나 데이터베이스의 취약성에 대한 걱정이 없습니다.

### --- 낮은 가격

정적 파일의 호스팅 비용은 싸거나 혹은 무료입니다.

### --- 더 나은 개발자 경험

monolithic architecture에 묶일 필요 없이, 프론트 엔드 개발자는 프론트 엔드에만 집중할 수 있습니다.

### --- 확장성

방문자가 많아지는 경우, CDN을 통해서 해소가 가능합니다.

---

## 📌 Jamstack에서 Javascript

Jamstack에서 자바스크립트는 컨텐츠를 보여주고 사용자 경험을 향상시키는 역할을 합니다. 그리고 J가 자바스크립트를 의미하지만, 꼭 자바스크립트일 필요는 없습니다. 선호에 따라서 Ruby, Python, Go와 같은 언어를 사용해도 좋습니다.

---

## 📌 Jamstack에서 API

초기 API는 웹 개발의 과정과 작업 흐름에 맞게 발전해왔습니다. 이 말은 즉, API가 대부분 서버 사이드에서 이용되었다는 의미입니다. 하지만 자바스크립트의 발전과 함께, 브라우저에서 자바스크립트로 실행될 수 있는 웹 API가 만들어지기 시작했습니다. 이것은 Jamstack 아키텍쳐가 만들어질 수 있는 큰 원동력 가운데 하나였습니다. 웹 API와 함께 서버가 수행하던 무거운 작업들이 모두 클라이언트 사이드로 옮겨갔고, API가 점점 더 많은 일을 할수 있게되면서 API를 microservice로 이용하려는 움직임이 일어났습니다. microservice는 다른 서비스에 의존하지 않고 특정한 기능을 수행하는 작은 코드조각들로, 각 microservice 들은 독립적으로 작업되지만 결국 매끄럽게 통합 및 연결되어 특정 웹 기능들 전달하는 서비스들의 아키텍쳐를 만들어냅니다. microservice에 관한 내용은 [마이크로서비스 아키텍처. 그것이 뭣이 중헌디?](http://guruble.com/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4microservice-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EA%B7%B8%EA%B2%83%EC%9D%B4-%EB%AD%A3%EC%9D%B4-%EC%A4%91%ED%97%8C%EB%94%94/#i)을 참고하면 좋을 듯합니다.

---

## 📌 Jamstack에서 Markup

HTML도 오랫동안 존재했지만, HTML의 주요한 역할은 여전히 컨텐츠와 뼈대를 화면에 보여주는 것이었습니다. 이것은 Jamstack 사이트에서도 달라지지 않았습니다. 다만 HTML이 서빙되는 방식이 달라졌습니다.

클라이언트의 모든 요청에 맞게 서버에서 HTML을 만들어 내는 것 대신, 캐싱된 HTML에 의존하기 시작했습니다. 정적 사이트 생성기와 같은 빌드 툴이 마크업을 미리 만들어서 CDN에 전달하기 때문에, 서버는 더이상 클라이언트 요청에 대해서 실시간으로 작업할 필요가 없어졌고, 오직 content나 asset에 변경이 있을때만 작업하도록 바뀌었습니다.

---

## 📚 참고 문헌

[Jamstack](https://jamstack.org/what-is-jamstack/)

[Realizing the Potential of the API in Jamstack](https://stepzen.com/blog/api-in-jamstack)

[Traditional CMS vs Headless CMS (1)](https://www.contentful.com/r/knowledgebase/what-is-headless-cms/)

[Traditional CMS vs Headless CMS (2)](https://www.nten.org/blog/the-benefits-of-a-headless-content-management-system?creative=558931557828&keyword=headless%20cms&matchtype=b&network=g&device=c&gclid=CjwKCAjwp9qZBhBkEiwAsYFsb-bWnRXEcWtG9BcfbUPF56Fl4hK3-lmG90qgOcuz4JMfYa6LUX8JxRoC5BEQAvD_BwE)

[Traditional CMS vs Headless CMS (3)](https://strapi.io/blog/traditional-vs-headless-cms-a-comparison?utm_source=devto&utm_medium=post&utm_campaign=blog)

