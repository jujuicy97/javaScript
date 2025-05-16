const descs = [         //배열 자료형으로 변수 지정
    "이미지1 설명입니다",
    "이미지2 설명입니다",
    "이미지3 설명입니다",
    "이미지4 설명입니다",
    "이미지5 설명입니다" 
]
const befbtn = document.querySelector(".prev");
const aftbtn = document.querySelector(".next");
const txtElem = document.querySelector("p");
const imgElem = document.querySelector("div > img");
// console.log(befbtn,aftbtn,imgElm);
let count = 1;
//1) 다음 버튼을 클릭할 때
const result = aftbtn.addEventListener("click",()=>{
//2) 다음 버튼 클릭하면 이미지와 텍스트 설명이 바뀌게 하기
    count++;             //2-1) (클릭이 되면)1개씩 증가시켜라
    if(count>5){         //2-2) 근데 만약에 5보다 작으면
        count = 1;       //2-3) 다시 count를 1로 만들어라
    }
    imgElem.src =`./images/img-${count}.png`
    txtElem.textContent = descs[count-1]; 
    //이미지가 1부터 1,2,3,4,5가 될 때, descs배열은 0,1,2,3,4 가 되므로 count-1

    // txtElem.textContent = `이미지${count} 설명입니다`;
});

//3) 이전 버튼을 클릭할 때
const result2 = befbtn.addEventListener("click",()=>{
    count--;
    if(count<1){
        count = 5;
    }
    imgElem.src =`./images/img-${count}.png`
    txtElem.textContent = descs[count-1];
    //이미지가 5일때, descs배열은 4이므로 -1씩 차감되므로 count-1 
});
//) 이전 버튼 클릭하면 텍스트 설명이 바뀌게 하기



