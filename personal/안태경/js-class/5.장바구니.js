const saleList = document.querySelector("#sale__list");
const cartList = document.querySelector("#cart__list");
const saleName = document.querySelector(".name");
const salePrice = document.querySelector(".price");

let list = [
  {
    id: 1,
    name: "사과",
    price: 5000,
  },
  {
    id: 2,
    name: "바나나",
    price: 6000,
  },
  {
    id: 3,
    name: "수박",
    price: 16000,
  },
];

function paintSaleList() {
  const li = document.createElement("li");
  // li.id=list.id;
  const span = document.createElement("span");
  list.map((el) => {
    console.log(el);
    saleName.innerText = el.name;
    console.log(saleName);
    salePrice.innerText = el.price;
    li.appendChild(span);
    saleList.appendChild(li);
    console.log(saleName, salePrice);
  });
}
function paintCartList() {
  const li = document.createElement("li");
}
paintSaleList();
