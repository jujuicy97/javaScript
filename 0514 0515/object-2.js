/**
 * Math 객체
 * 수학과 관련된 기능
 * 버림, 올림, 반올림, 랜덤, min-max(105p)
 */
/*
const value = 3.3;
console.log(Math.round(value)); //round : 반올림
console.log(Math.floor(value)); //floor : 내림
console.log(Math.ceil(value));  //ceil : 올림
console.log(Math.abs(-7));      //절대값 (음수<->양수), 두 위치 차이 구하기 or 마우스 위치 구하기 등
console.log(Math.max(4,1,7,2)); //가장 큰 값
console.log(Math.min(4,1,7,2)); //가장 작은 값

const nums = [6,9,10,24];
console.log(Math.max(...nums)); //... : 객체 정보 필요없이 숫자만 필요할 경우 사용
console.log(Math.min(...nums)); 
*/

//***random 수 만들기***
/*console.log(Math.random()); //기본적으로 랜덤값은 0이상 1미만의 값을 가짐
//0~10미만의 수로 만들기
// const value = Math.floor(Math.random()*10);
// console.log(value);

//2~22미만의 수로 만들기 (5개 추출하기)
// const value = Math.floor(Math.random()*20)+2;
// console.log(value);
*/

/* ***연습해보기1
 * 2~22미만의 수를 5개 추출하기
 * -> 5개의 데이터가 한 곳에 저장되는 자료형 [배열] 사용
 * -> 반복문 사용 : for, while, do-while
 */
//↓ 이렇게만 만들면 중복 숫자가 있음
// const nums = [];
// for(let i=0; i<5; i++){
//     const value = Math.floor(Math.random()*20)+2;
//     nums[i] = value;
// }
// console.log(nums);

/** ***연습해보기2
 * 로또번호 추출기
 * 1~45
 */
// const value = Math.floor(Math.random()*44)+1;
// console.log(value);
const lotto = [];
while(lotto.length < 6){
    const num = Math.floor(Math.random()*44)+1;  //45까지의 숫자를 받기
//lotto에서 num이랑 같은 숫자가 있으면 0, 아니면 다른 숫자를 넣으라는 명령
    if(!lotto.includes(num)){  
        lotto.push(num);
    } 
    // let i=0;//몇개를 가지고 있는지를 확인해야하기에 만듦
    // while(i < lotto.length){
    //     if(lotto[i] === num){
    //         //같은 숫자가 있다면 다시 뽑아야 함
    //         num=0;
    //         break;
    //     }
    //     i++;
    // }
    // if(num !== 0){
    //     lotto.push(num);
    // }
}
console.log(lotto);