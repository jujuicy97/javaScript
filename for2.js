/***
 * 사용자의 점수 평균 계산
 * score = [80,90,100,70]
 * 1. 반복 : 점수의 합계
 * 2. 변경 : 배열에서 점수 하나씩 읽어오기, index번호 생성
 */
//배열 : 같은 종류의 데이터를 순서대로 저장
//각 값의 인덱스(index) 숫자로 데이터를 가져옴
// const score = [80,90,100,70,60]
// console.log(scores.length);
// let sum = 0;
// for(let i=0; i<=scores.length; i++){  //for(let i=0; i<score.length; i++)
//     sum += score[i];
// }
// const avg = sum/scores.length;
// console.log(sum, avg);

/**
 * 상품명 앞에 번호 붙이기
 * product = ['키보드','마우스','모니터','프린터']
 * 출력
 * 1-키보드
 * 2-마우스
 * 3-모니터
 * 4-프린터
 */

//product에 저장되는건 배열 전체가 아니라 첫번째만임. 
// 그래서 추가가 되어도 const에 영향이 미치지 않음
// const product = ['키보드','마우스','모니터','프린터']; 
// product[4] = '스피커'
// for(let i=0; i<product.length; i++){
//     console.log(`${i+1} - ${product[i]}`);
// }
/**
 * 가격에 10% 가산세를 적용 후 출력
 * price = [1000,2000,3000]
 * 출력값 : 1100,2200,3300
 * 1000+(1000*0.1)
 */
// const prices = [1000,2000,3000];
// for(let i=0; i<prices.length; i++){
//     const calc = prices[i] + (prices[i]*0.1);
//     console.log("총 가격은"+calc+'원');  
// }

/**
 * 아이디를 이용하여 이메일 리스트 만들기
 * users = ['kim','lee','[park]'
 * 출력값 kim@email.com, lee@email.com, park@email.com
 */

// const users = ['kim','lee','park'];
// for(let i=0; i<users.length; i++){
//     console.log(`${users[i]}@email.com`);
// }

/** //변수를 추가하는 경우는 계산이 되어져서 저장된 값을 출력하는 경우 
 * members = ['tom','jane','','null',hong];
 * 위의 배열에서 이름이 제대로 입력된 회원 수를 출력
 */
const members = ['tom','jane','','null','hong'];
let count = 0;
for(let i=0; i<members.length; i++){
    if(members[i]){
        count++;
    }
}
console.log("입력 아이디는" +count);

/**
 * nums = [3,7,2,9,5];
 * 위의 배열에서 가장 큰 숫자를 출력
 * 변수중에 가장 큰 값을 먼저 추출하고 그 후에 그 수를 출력?
 */
const nums = [3,7,2,9,5];
let max = 0;
for (let i=0; i<nums.length; i++){
    if( max < nums[i]){
        max = nums[i];
    }
}

//풀어서 작성할 때
// console.log( nums[0]); //3
// max = nums[0];
// console.log(num[1]); //7
// if(max<nums[1]){
//     max = nums[1]; //7
// }
// console.log( nums[2]);  //2
// if(max <nums[2]){
//     max = nums[2];  //7
// }

console.log("max="+max);

/**  꼭 다시 풀어보기!!!
 * nums = [1,4,6,7,8,9]
 * 위의 배열에서 짝수의 개수를 출력
 * 1. 배열을 지정
 * 2. 1이었을때 짝수인지 확인(1은0)
 * 3. 4였을때 짝수인지 확인(4는1)
 */

// const nums = [1,4,6,7,8,9];
// let a = 4;

// for(let i=0; i<nums.length; i++){
//     console.log(nums[0]);
//     if(i%2){
//         console.log(i);
//     }
//     console.log(nums[1]);
//     if(i%2){
//         console.log(i);
//     }
// }
