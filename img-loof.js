/**
 * 다음 버튼을 눌렀을 때
 * 1 > 2 > 3 > 4 > 5 > 1 > 2 > 3 > 4 > 5
 */
const imgElem = document.querySelector("img");
const befbtn = document.querySelector("main > button:nth-child(1)"); 
const aftbtn = document.querySelector("main > button:nth-child(3)");
//console.log(befbtn,aftbtn);
let current = 1;
//다음 버튼을 눌렀을 때
const aftBtnClick = ()=>{   //이름을 지정한 함수를 먼저 선언
    //1 > 2 ...
    current++;
    //...5 > 1
    if(current>5){
        current = 1;
    }
    imgElem.src = `./images/img-${current}.png`;
}
aftbtn.addEventListener("click",aftBtnClick);  //함수를 먼저 만듦/ 작성한 함수를 클릭했을시 실행시킴

//이전 버튼을 눌렀을 때
const befBtnClick = ()=>{
    //5>4
    current--;
    if(current<1){
        current = 5;
    }
    imgElem.src = `./images/img-${current}.png`;
}
befbtn.addEventListener("click",befBtnClick);