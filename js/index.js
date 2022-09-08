import data from './data.js';

const $itemList = document.querySelector('#cola-list');
const $item = document.querySelectorAll('.cola-item'); //콜라 버튼 아이템 li

const $cart = document.querySelector('#cart'); //콜라 버튼 클릭시 담기는 카트 ul
const $cartList = document.querySelector('.order-item'); // 카트 li

const $obtainCart = document.querySelector('#obtain-cart'); //획득한음료 ul
const $obtainItem = document.querySelector('#obtain-item'); //획득한음료 li

const $inputPayment = document.querySelector('#payment-input'); //입금액 입력
const $pocketMoney = document.querySelector('#pocket-money'); //소지금
const $balance = document.querySelector('#balance'); //잔액
const $total = document.querySelector('#total-money'); // 총금액

const $obtainBtn = document.querySelector('#obtain-btn'); //획득 버튼
const $paymentBtn = document.querySelector('#payment-btn'); // 입금 버튼

console.log(data);

// 잔액 , 입금액
$paymentBtn.addEventListener('click', () => {
    let balance = +$balance.textContent;
    let input = +$inputPayment.value;
    let pocket = $pocketMoney.textContent.replace(/[^0-9]/g, '');
    let pocketLeft = +pocket - input;
    $balance.textContent = `${balance + input}`;
    $pocketMoney.textContent = pocketLeft;
    $inputPayment.value = '';
});

for (let i = 0; i < $itemList; i++) {
    console.log($itemList);
    console.log(data[i]);
}

// 카트 부분
$item.forEach((item) =>
    item.addEventListener('click', (e) => {
        const $cartItem = document.createElement('li');
        const $cartImg = document.createElement('img');
        const $flavor = document.createElement('span');
        const $itemNumber = document.createElement('span');
        const $imgurl = e.currentTarget.childNodes[1].src;
        const $flavorname = e.currentTarget.childNodes[3].textContent;

        $cartItem.classList.add('order-item');
        $flavor.classList.add('item-name');
        $itemNumber.classList.add('item-number');

        $cartItem.appendChild($cartImg);
        $cartItem.appendChild($flavor);
        $flavor.textContent = $flavorname;
        $cartItem.appendChild($itemNumber);
        $cartImg.setAttribute('src', $imgurl);

        // 같은 아이템이 있을 때 수량만++
        //카트에 들어있는 애의 이름 뽑아서 stock 조절
        //데이터의 이름이랑 맞는 애 찾기..

        const colaId = e.target.id; // ID 랑 match 해보기

        // console.log($itemList.colaId);
        let cartArr = $cart.childNodes;
        let cartInit = '';

        for (let i = 1; i < cartArr.length; i++) {
            cartInit =
                $cart.childNodes[i].getElementsByClassName('item-name')[0]
                    .innerText;
            // console.log(cartInit);
        }
        // console.log(stock);

        $itemNumber.textContent = 1;

        if (cartInit.includes(colaId)) {
            $itemNumber.textContent = parseInt($itemNumber.textContent) + 1;
        } else {
            $cart.appendChild($cartItem);
        }
    })
);
