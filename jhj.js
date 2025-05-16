/**
 * loof
 */
const txt = [
    '이미지1 설명입니다',
    '이미지2 설명입니다',
    '이미지3 설명입니다',
    '이미지4 설명입니다',
    '이미지5 설명입니다'
];

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const mainimg = document.querySelector("img");
const txtElem = document.querySelector("p");
//
let count = 1;
const result = nextBtn.addEventListener("click",()=>{
    count++;            //이미지가 1개씩 증가하기
    if(count>5){        //5까지 증가하면
        count = 1;      //다시 1로 변경하기
    }
    mainimg.src = `./images/img-${count}.png` //이미지의 숫자는 1부터 증가
    txtElem.textContent = txt[count-1]; //배열은 0부터 증가
});

//
const result2 = prevBtn.addEventListener("click",()=>{
    // console.log(result2);
    count--;
    if(count<1){
        count = 5;
    }
    mainimg.src = `./images/img-${count}.png`
    txtElem.textContent = txt[count-1];
});

//팝업 이미지 띄우기
const popimg = document.querySelector("section>div>img");
// console.log(popimg);

//mainimg를 클릭할 때
const result3 = mainimg.addEventListener("click",()=>{
    pop.style.display = "block";
});


