const products = [
    {id:1, preodName:"상품 A", price:10000},    //외부에서 데이터를 가져오는 방법(객체)
    {id:2, preodName:"상품 B", price:20000},
    {id:3, preodName:"상품 C", price:15000}
];
//카드 리스트 정보 불러오기(innerHTML)
const cartlistElem = document.querySelector(".cart-list");
const cart = [];
const removeCart = (idx)=>{
    console.log(idx);
    cart.splice(idx,1);
    renderCart();
}
const renderCart = ()=>{        //장바구니에 추가될 때마다~ 의 함수 설정
    if(cart.length === 0){
    //아무것도 없음
        cartlistElem.innerHTML = `<p>장바구니가 비어있습니다</p>` //p태그를 추가(innerHTML)
    }else{
    //카트에 추가가 될 때
        let creatText = ''; //문자열 생성
        let total = 0;      //합계 생성
        cart.forEach((elem,idx)=>{      //각각의 정보를 각각 불러오기
            // console.log(elem);
            //<div class="cart"> <span>상품 A (￦10,000)</span> <button>삭제</button> 문자열 추가
            // creatText += `<div class="cart"><span>${elem.preodName} (￦${elem.price})</span> <button onclick="removeCart(${idx})">삭제</button></div>`;
            //위의 문자열 대신 요소 생성 : createElement();
            const cartItem = document.createElement('div');
            cartItem.className = "cart";
            const spanItem = document.createElement('span');
            spanItem.textContent = `${elem.preodName} (￦${elem.price})`
            cartItem.appendChild(spanItem); //spanItem을 자식으로 추가하는 속성(appendchild)
            console.log(cartItem);
            const btnItem = document.createElement('button');
            btnItem.onclick = `removeCart(${idx})`
            //
            btnItem.addEventListener("click",()=>{
                removeCart(idx);
            });
            btnItem.textContent = "삭제";
            cartItem.appendChild(btnItem);
            // console.log(btnItem);
            // console.log(cartItem);
            cartlistElem.appendChild(cartItem);
            //
            total+=elem.price;
        });
        // console.log(creatText);
        // cartlistElem.innerHTML = creatText;
        document.querySelector('#total').textContent = `${total}원`
    }
}
const addElem = document.querySelectorAll(".product>button");
// console.log(addElem);
addElem.forEach((elem,idx)=>{
    elem.addEventListener("click",()=>{
    // console.log(products[idx]);     //idx값에 products 배열 값이 저장 돼있음 확인
        cart.push(products[idx]);
        renderCart();
    })
});

//load되면
renderCart();