const products = [
    {id:1, prodName:'상품 A', price:10000},
    {id:2, prodName:'상품 B', price:15000},
    {id:3, prodName:'상품 C', price:40000},
    {id:4, prodName:'상품 D', price:20000},
    {id:5, prodName:'상품 E', price:35000}
];
//변수 선언
let cart = [];    //2번을 하기 위한 선언
let uid = 0;
//객체 설정 (추가해야할 항목 정보 가져오기)
const $pordList = document.querySelector("#product-list");
const $cartList = document.querySelector("#cart-list");
const $total = document.querySelector("#total");

//5번 (총 가격 구하기_reduce메소드)
const updateTotal = ()=>{
    const total = cart.reduce((sum,item)=>{
        return sum + item.price;
    },0);
    $total.textContent = total;
}

//4번 관련 함수
const renderCart = ()=>{
    $cartList.innerHTML = '';
    cart.forEach((item)=>{
        addCartItem(item);
    });
    updateTotal();  //5번 관련 : render할 때, 가격 표시
}

//4번 관련 함수
const removeCart = (uid)=>{ 
    //배열 메소드 중에서 몇번째인지 찾는 속성(findIndex)
    // const idx = cart.findIndex((item)=>{
    //     return item.uid === uid;
    // });
    // if(idx>=0){
    //     cart.splice(idx,1);
    // }
//filter함수로 쉽게 나타낼 수 있음↓    
    cart = cart.filter((item)=>{
        return item.uid !== uid;
    });
    renderCart(); //전체를 다시 그리기
}

//3번 : cart아이템 추가
const addCartItem = (item)=>{
    //createElement는 여는태그와 닫는태그를 만들어줌
    const divElem = document.createElement("div"); 
    divElem.className = "cart";
    divElem.dataset.uid = item.uid;
    console.log(divElem);
    const spanElem = document.createElement("span");
    spanElem.textContent = `${item.prodName} (￦${item.price})`
    const btnElem = document.createElement("button");
    btnElem.textContent = "삭제";
//4번 : 삭제 버튼 클릭 시 함수
    btnElem.addEventListener("click",()=>{
        removeCart(item.uid);
    })    
    divElem.appendChild(spanElem);
    divElem.appendChild(btnElem);
    $cartList.appendChild(divElem);
};

//1번 : 상품 목록을 생성
products.forEach((item)=>{
    const divElem = document.createElement("div");
    divElem.className="product";

    const spanElem = document.createElement("span");
    spanElem.textContent = `${item.prodName} (￦${item.price})`;
    // console.log(spanElem);

    const btnElem = document.createElement("button");
    btnElem.textContent = "장바구니 추가";
    //2번 :장바구니 클릭 시 cart에 추가
    btnElem.addEventListener("click",()=>{
        //...은 객체를 통으로 가져오는 것. 만든 각각의 item을 불러오고 1씩 증가
        const newItem = {...item, uid:uid++}; 
        console.log(newItem);
        cart.push(newItem);
        addCartItem(newItem); //새 함수 지정
        updateTotal();      //5번 관련 : 장바구니 추가할 때, 가격 표시
    });

//자식 추가
    divElem.appendChild(spanElem);
    divElem.appendChild(btnElem);
    $pordList.appendChild(divElem);
});