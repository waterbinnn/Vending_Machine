import data from "./data.js";
console.log(data);

const $item = document.querySelectorAll("#cola-item");
const $cart = document.querySelector("#cart");
const $pocketMoney = document.querySelector("#pocket-money");
const $balance = document.querySelector("#balance");
const $obtainItem = document.querySelector("#obtain-item");
const $paymentBtn = document.querySelector("#payment");
const $inputPayment = document.querySelector("#payment-input");
const $total = document.querySelector("#total-money");

// 아이템을 클릭했을때 카트 영역에 아이템이 들어가게
// 아이템 수량이 줄게
// 잔액이 줄어야되고
// 이떄 만약에 아이템 수량이 0 이 되면 , 솔드아웃
// 클릭 횟수만큼 수량이 늘어야함
console.log($balance.textContent);
console.log($inputPayment.value);

// 잔액 부분
$paymentBtn.addEventListener("click", () => {
  let balance = +$balance.textContent;
  let input = +$inputPayment.value;
  $balance.textContent = `${balance + input}`;
});

// 카트 부분
$item.forEach((item) =>
  item.addEventListener("click", (e) => {
    const $cartItem = document.createElement("li");
    const $cartImg = document.createElement("img");
    const $flavor = document.createElement("span");
    const $itemNumber = document.createElement("span");
    const $imgurl = e.currentTarget.childNodes[1].src;
    const $flavorname = e.currentTarget.childNodes[3].innerText;

    $cartItem.classList.add("order-item");
    $flavor.classList.add("item-name");
    $itemNumber.classList.add("item-number");

    $cartItem.appendChild($cartImg);
    $cartItem.appendChild($flavor);
    $cartItem.appendChild($itemNumber);
    $cartImg.setAttribute("src", $imgurl);
    $flavor.textContent = $flavorname;

    $cart.appendChild($cartItem);

    // 같은 아이템이 있을 때  수량만++

    let count = 1;

    if (!$item) {
      $itemNumber.textContent += count;
    } else {
    }
  })
);
