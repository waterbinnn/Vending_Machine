# 🥤 Cola Cola Vending Machine

<a href="https://waterbinnn.github.io/Vending_Machine">콜라콜라 밴딩머신 페이지로 이동</a>

<p>🚀 콜라콜라 밴딩머신 구현과정 대해<a href="https://velog.io/@ewaterbin/CSS-%EB%B0%B4%EB%94%A9%EB%A8%B8%EC%8B%A0-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%BD%94%EB%93%9C%EB%A6%AC%EB%B7%B0"> 블로그</a>에 작성해 보았습니다.
</p>

## 개요

- HTML, CSS 로 반응형 웹 구현

## 주요 속성

- media query로 반응형 구현
- 요소들을 컴포넌트화 하여 재사용성 있는 코드 작성
- CSS Grid 를 이용한 레이아웃 정렬
- 품절된 상품은 active, focus 되지 않게 설정
- 스크롤 커스텀

## 프로젝트를 진행하며 느낀점

- 어떤 요소들을 컴포넌트화 할지에 대한 고민을 마크업 진행 전에 계획 후 코드를 짜야 한다는 것을 깨알았다.
- Grid는 편리하다.
- Flex 는 남발하면 안된다.
- active, focus 되었을 때 border 을 주니 레이아웃에 영향을 주었다. 그래서 고민하다가 사용한 방법은 outline을 활용한 스타일링이었다. 이 방법 말고 `position: absolute` 을 해주고(normal flow로 만들어줌) 모든 top left right bottom 모든 값을 0 으로 설정하여 영역을 상하좌우로 쫙 펼치게끔 해주는 방법도 알게 되었다.

## 버전별 화면

<strong>Web Version</strong>
<img src="https://velog.velcdn.com/images/ewaterbin/post/31bc1ad7-1e1e-4fbb-9486-c50a2aba6d95/image.png">
<br>
<strong>Mobile Version</strong><br>
<img width="300px" src="https://velog.velcdn.com/images/ewaterbin/post/b32a18d3-dfb9-4341-aea6-dfbe42c09aa1/image.png">
