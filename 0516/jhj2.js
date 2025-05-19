/**
 * loof
 */

const aaa = document.querySelector(".next");
const bbb = document.querySelector(".prev");
const images = document.querySelector("img");
const txtp = document.querySelector("p");

let num = 1;
const result = aaa.addEventListener("click",()=>{
    num++;
    if(num > 5){
        num = 1;
    }
    images.src = `./images/img-${num}.png`
    txtp.textContent = `이미지${num} 설명입니다`
});

const result1 = bbb.addEventListener("click",()=>{
    num--;
    if(num < 1){
        num = 5;
    }
    images.src = `./images/img-${num}.png`
    txtp.textContent = `이미지${num} 설명입니다`
});