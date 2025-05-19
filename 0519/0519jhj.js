const products = [
    {id:1, prodName:'상품 A', price:10000},
    {id:2, prodName:'상품 B', price:15000},
    {id:3, prodName:'상품 C', price:40000},
    {id:4, prodName:'상품 D', price:20000},
    {id:5, prodName:'상품 E', price:35000}
];
//변수 선언
let cart = [];
let uid = 0;
//객체 설정
const $pordList = document.querySelector("#product-list");
const $cartList = document.querySelector("#product-list");
const $total = document.querySelector("#product-list");


//1상품 목록을 추가
products.forEach((item)=>{
    const divElem = document.createElement("div");
    divElem.className = "product"; //<product></product>

    const spanElem = document.createElement("span");
    spanElem.textContent = `${item.prodName} (￦${item.price})`
    console.log(spanElem);
//2버튼 가져오기    
    const btnElem = document.createElement("button");
    btnElem.textContent = "장바구니 추가";
//장바구니 클릭 시 상품 추가
    btnElem.addEventListener("click",()=>{
        const newItem ={...item, uid:uid++};
        console.log(newItem);
    });

});

//3카트 아이템을 추가
const addCartItem = (item)=>{
    const divElem = document.createElement("div");
    divElem.className ="cart"

    const spanElem = document.createElement("span");
    spanElem.className =`${item.prodName} (￦${item.price})`
    const btnElem = document.createElement("button");
    btnElem.className ="삭제"
}
