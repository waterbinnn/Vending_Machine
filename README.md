# 🥤 Cola Cola Vending Machine

<a href="https://waterbinnn.github.io/Vending_Machine">콜라콜라 밴딩머신 페이지로 이동</a>

## 개요

- HTML, CSS 로 반응형 웹 구현

## 주요 속성

- media query로 반응형 구현
- 요소들을 컴포넌트화 하여 재사용성 있는 코드 작성
- CSS Grid 를 이용한 레이아웃 정렬
- 품절된 상품은 active, focus 되지 않게 설정
- 스크롤 커스텀

## 프로젝트를 진행하며 느낀점

- 어떤 요소들을 컴포넌트화 할지에 대한 고민을 마크업 진행 전에 계획 후 코드를 짜야 한다는 것을 깨달았다.
- Grid는 편리하다.
- Flex 는 남발하면 안된다.
- active, focus 되었을 때 border 을 주니 레이아웃에 영향을 주었다. 그래서 고민하다가 사용한 방법은 outline을 활용한 스타일링이었다. 이 방법 말고 `position: absolute` 을 해주고(normal flow로 만들어줌) 모든 top left right bottom 모든 값을 0 으로 설정하여 영역을 상하좌우로 쫙 펼치게끔 해주는 방법도 알게 되었다.

## 구현 화면 
### -웹버전 구현 화면

<img src="https://velog.velcdn.com/images/ewaterbin/post/31bc1ad7-1e1e-4fbb-9486-c50a2aba6d95/image.png">
<br>

### -모바일버전 구현 화면

<img width="300px" src="https://velog.velcdn.com/images/ewaterbin/post/b32a18d3-dfb9-4341-aea6-dfbe42c09aa1/image.png">

---
# ✅ 코드 리뷰 후기 

> '2022년 4월 20일 오전 11시경' 내 생애 첫 코드리뷰 .. 😱
내가 작성한 코드를 해부 당하는 것,.? 제법 민망한데 재밌는 경험이었다 .. 👽

## 지적받은 부분 고쳐보기
### html에서 지적받은 부분 

![](https://velog.velcdn.com/images/ewaterbin/post/a6d146d0-d016-4b90-aba6-ab4f9519310c/image.png)<br><br>

먼저 이 부분의 마크업에서 지적을 받았다. 
나는 `<p>`로 내용을 입력하는 습관을 지니고 있더라고 ..?<br>
`<p>` 문장일때 주로 사용한다는 점을 인지하지 못하고 글을 넣어줄 일이 있으면 냅다 걍 `<p>`만을 사용했다. 
<br>
아래 코드가 기존에 작성한 코드이다. `ul` > `li` 안에 마크업을 `<p>`로 해주었었다.<br>
해주면서도 `li` 안에 `button`을 써주는게 맞을 것 같았지만,,, <br>
`button` 안에 `<p>` 태그가 들어가면 안된다는 것이 생각이 나서 그냥 1,000원 부분만 `button`으로 마크업 해주었었다. 

```
 <li class="cola-item">
      <img src="./images/Original_Cola.svg" alt="">
      <p class="item-name">Original_Cola</p>
      <button type="button" class="price">1000원</button>
</li>

```

>`button` 안에 `p` 태그를 쓸 수 없는 이유는 `p` 가 `block` 요소이기 때문이다 ! ( 버튼은 인라인블록 )<br>
`p` 가 안된다면 `Inline` 요소인 `span` 이나 `em` , `strong` 을 쓰면 될 일 .. ! <br>
😲 :  아 왜 저 생각을 못했을까 ..? 


```
<li>
	<button type="button" class="cola-item">
	<img src="./images/Original_Cola.svg" alt="">
	<strong class="item-name">Original_Cola</strong>
	<span class="price">1000원</span>
	</button>
</li>
```

`p` 태그로 적어줬었던 item-name 을 `strong` 태그로 바꿔주었고, <br>
가격에만 줬던 `button` 을 `li` 안에 전체를 감싸도록 넣어줬다. <br>

이전에는 tab 키를 누르면 1,000원만 눌리는 UX 적으로 좋지 못한 구성이었다면, <br>
이제는 tab 키를 누르면<br><br>
![](https://velog.velcdn.com/images/ewaterbin/post/445490c7-360d-40c9-afe0-886787706e77/image.png)<br><br>
아이템 전체 영역이 버튼으로 잡혀 사용자에게도 더 나은 환경을 제공해줄 수 있다는 점을 기억하자 ! <br>
<br>
이 뿐만 아니라 나의 `p` 남발은 다른 부분에서도 작용했다 .. <br><br>
![](https://velog.velcdn.com/images/ewaterbin/post/4eece310-ba6a-44cc-a102-9f174bdab807/image.png)<br><br>
바로 이 모든 글들을 `p` 로 마크업 했다는 것 ,, (반성반성) 그래서 `span` 과 `strong`으로 마크업을 수정하였다 !

### CSS에서 지적받은 부분 

반응형으로 구현해야 하는 밴딩머신이었기에 선 모바일버전, 후 웹버전으로 만들었다. <br>
근데 사실 이 사이트 자체가 모바일리티 디자인이라 엄청나게 미디어쿼리로 바꿔줄 부분은 많지 않았다. <br><br>
![](https://velog.velcdn.com/images/ewaterbin/post/b88b3450-72cb-4581-8de3-346e3111ea4e/image.png)<br><br>

먼저 나는 웹버전으로 제작했고, 세가지의 섹션으로 구분되었다고 생각했다. <br>
세가지 섹션이지만, 나뉘어진건 두 파트라고 생각했기 때문에 소지금 & 획득한 음료을 한번 더 묶어서 두 파트로 나누었다. <br>
`밴딩머신 주문 영역 따로 <-> 소지금 & 획득한 음료 `

```
<section class="select-part"> ...</section>

<div class="getpart-wrapper">
	<section class="having-money">... </section>
	<section class="get-wrapper">...</section>
</div>
```

그런데 이 부분에 대해서 `div` 말고 `section` 으로 묶어주면 더 좋았을 것이라는 지적을 받았다.  <br>
그리고 배치를 위해서 `float:right` 을 써줬었는데 굳이 `float`를 사용하지 않고도 <br>
`display : flex` 를 사용해 가로정렬을 하고 <br>반응형일 때 똑 떨어지게 해주는 부분은 `flex-wrap:nowrap;` 을 이용해 표현해 줄 수 있었다! <br>
둘 사이의 마진 간격도 `gap` 으로 줄 수 있다는 점 ! 을 알게 되었다. 

```css
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 0 28px;
```

\* `flex-wrap:wrap` 을 하면 알아서 반응형이 되고 알아서 화면이 좁아지면 소지금&획득금액 영역이 똑 떨어진다 . 

\* `flex-wrap:nowrap` 일 때는 화면이 좁아져도 원래의 자리를 지키면서 찌뿌락된다. 
<br><br>
- ![nowrap일때](https://velog.velcdn.com/images/ewaterbin/post/2a696977-38a3-43b2-a0ad-bc88456d76ad/image.png)<br><br>

### flex 남발 금지

아이템 버튼 내부의 이미지, 텍스트, 가격 을 정렬해주기 위해 

```css
display:flex;
flex-direction:column;
justify-content: center;
alignt-item: center;
```
이렇게 4줄의 코드를 작성했다. 

근데 이걸 그냥 `text-align: center;` 이거 하나면 될걸 .........ㅎ 

바보인가 ,, 플렉스 남발을 지양하자 !!!!! 

---
## 새로 알게된 부분 

![](https://velog.velcdn.com/images/ewaterbin/post/489cf535-f7b1-43df-a834-330fd7b6901e/image.png)<br><br>
아이템이 `active` 가 되었을 때 보더값을 적용해주기 위해 <br>
내가 사용한 방법은 `outline` 으로 보더를 부여해 레이아웃에 영향이 가지 않게끔 했던 것이었다. 

- 내가 사용한 방법

```css
.cola-item:focus,
.cola-item:active {
  outline: 3px solid #6327FE;
}
```

- 새로 알게 된 방법
이 방법은 li 가 active 상태일때의 before 에 스타일을 부여한 것인데, 
`position: absolute` 을 해주고<br>
모든 `top` `left` `right` `bottom` 모든 값을 0 으로 설정하여 영역을<br>
상하좌우로 쫙 펼치게끔 해주는 방법이다. <br>
그 영역에 보더값을 줘서 <br>기존 레이아웃에는 영향이 가지 않게끔 보더가 생성된다 ! 

```css
.vending-machine .list-item li:active::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* 영역을 펼치기 위해 4가지에 0 씀  */
  border: 3px solid #857aff;
  border-radius: 10px;
  box-sizing: border-box;
}
```
`position: absolute` 를 주는 이유는 <br> **normal flow**에 영향가지 않게끔 `position: absolute` 로 띄워주는 것이다.

### inline-block 을 왜 써주는 거지 ?

`display: inline-block;` 은 기존에 `inline` 이었던 아이들에게 주는 속성인데 ,<br>
`inline` 속성이었기에 블록을 해주고도 `padding`값이 잘 반영되기 위해 적용하는 것이다.<br><br>
![](https://velog.velcdn.com/images/ewaterbin/post/7b3abf7a-d048-44c9-a80d-092fc623a4d7/image.png)<br><br>

아래 이미지는 `display:block` 일 때이다. 가격부분을 보면 `padding` 값이 꽉차게 들어가있는 것을 볼 수 있다. 왜그러냐면 block 은 한 블록을 다 차지해버리기 때문이다 ! <br><br>
![](https://velog.velcdn.com/images/ewaterbin/post/8eb4a4a7-0422-40b6-8066-e63342f79a1f/image.png) <br><br>
이렇게 되면 width 값을 또 줘야하기 때문에 굳이 block 이 아닌 본인 컨텐츠 값만을 갖는 `inline-block` 을 사용한 것이다.

![](https://velog.velcdn.com/images/ewaterbin/post/8a77a116-e371-4a32-82f0-145354d6c7a2/image.png)<br><br>
도움주신 삼콩님 사랑해여 ❤️

### sold out 을 표현해주는 방식

![](https://velog.velcdn.com/images/ewaterbin/post/2a390b8d-9848-4480-a289-031300ed99c2/image.png)<br><br>
- 나의 방식
검은 백그라운드와 품절이 같이 있는 이미지를 가상요소 `::after`로 추가해주었다.  <br>
```css
.cola-item.sold-out::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background: url(./images/soldOut.svg) no-repeat;
  background-size: cover;
  background-position: center;
  width: 94.5px;
  height: 130px;
  border-radius: 10px;
}
```
- 반면 강사님 방식은 품절만 있는 png 이미지를 가상요소 `::before` 로 넣어주고 백그라운드 컬러도 가상요소로 주는 방식이다.<br>
```css
.vending-machine .list-item li.sold-out::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: no-repeat center/ 60px 46px url(../images/Sold-out.png) rgba(0, 0, 0, 50%);
  border-radius: 10px;
}
```
여기서 주의해서 볼 점
- 앞으로 나와서 li 위를 씌워주는 역할이기에 `z-index:10` 을 부여
- `background image` 를 이미지로 줘도 여기에서는 png이기 때문에 bg-color 줘도 보이는 것! 반투명한 블랙 배경을 갈아줘야하기 때문에 rgba 로 해주었다. 
- 아래 코드는 왜 적어주냐? 
	
    - 품절이라는 이미지를 나타낸다는 정보를 제공하기 위함 ( 스크린리드에 읽히지만 IR 기법으로 안보이게 처리해준다 !)
    - 솔드아웃된 상품이기 때문에 `pointer-events`도 none 으로 설정<br>
```css
.vending-machine .list-item li.sold-out::after {
  content: '품절';
  overflow: hidden;
  position: absolute;
  text-indent: -9999px;
  line-height: 0;
  font-size: 1px;
  color: transperant;
}

.vending-machine .list-item li.sold-out {
  pointer-events: none;
}
```
### float 활용하기 

갠적으로 플로트가 조금 어렵게 느껴졌는데 밴딩머신을 만들며 조금 이해해가고 있는 듯하다? <br><br>
![](https://velog.velcdn.com/images/ewaterbin/post/1ef169db-3916-40cb-86e5-150748992f42/image.png)<br><br>
```
<div class="info-balance">
잔액 :
<span class="txt-balance">원</span>
</div>
```
이 부분을 나는 flex 를 이용해서 `space-between` 으로 처리했다. <br>
- 나의 방법
```css
display: flex;
justify-content: space-between;
```
굳이 flex 를 사용하는 방법말고 float 로 하는 방법이 있다. <br>
```css
.info-balance .txt-balance {
  float: right;
}
```
`<span class="txt-balance">원</span>` 부분만 플로트로 띄워줘서 잔액 옆으로 보내버리는 것 !! 

## 🥲 느낀점 ..?
> 좋은 해부시간이었다. ☠️❤️

코드리뷰 시간에 처음으로 내가 작성한 코드를 올려보았다.<br> 70명이 넘는 사람들이 내가 작성한 코드를 본다는 것? <br> 코드 해부를 당하는 일? 생각보다 더 부끄럽고 민망했다. <br> 부족한 나를 들킨 느낌이랄까 ...?

혼자 코드를 작성하고 공부할 때에는 잘못 작성했거나 안좋은 코드 습관을 지니고 있다는 사실을 알지 못했었다.
<br> 그래서 의도치 않게(?) 그런 부분들을 방치해왔다는 것과, 이래서 피드백을 받는게 중요하다는 것도 깨달았다. 
또 다른 분들의 코드 리뷰를 보면서 배운점도 많고, 같은 디자인을 구현함에도 정말 다양한 방법이 있다는 것을 또 한 번 깨달았다. 
<br> 코드리뷰 시간은 항상 코드를 더 효율적으로 작성하는 방법에 대해 알아갈 수 있어서 너무 좋다.<br>
이제 내 습관들도 더 나은 방법으로 개선해나가고 코드리뷰도 자주 참여해야G 🔥
