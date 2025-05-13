//1. 
//1~10까지를 출력
//반복 : 1~10 숫자
//변경 : 1~10
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//2.
//1~10수 중 짝수만 출력
//반복 : 숫자
//변경 : 1~10
//출력 : 2,4,6,8,10
// for(let i=2; i<=10; i+=2){
// console.log(i);
// }

//3.
//1~10까지의 수의 합을 구하시오 1+2+3+4+5+6+7+8+9+10
//반복 : 숫자
//변경 : 1~10
//출력 : 55
/**
 * 1) 변수 선언
 * 2) 한개의 수를 추출
 * 3) 추출된 수에 2를 더함
 * 4. 저장된 값에 3을 더함
 */
// sum = 0;
// for(let i=1; i<=10 ; i++){
//     sum += i;
// }
// console.log(`숫자의 합계는${sum} 이다`);

//4.
//1~10까지 숫자를 출력하고, 그 옆에 홀수인지 짝수인지 같이 출력
//1 - 홀수
//2 - 짝수
/**
 * 1) 1~10까지를 출력한다
 * 2) 첫번째 수를 추출한다
 * 3) 첫번째 수가 홀수인지 짝수인지 확인한다
반복 : 숫자
변경 : 1~10
출력 : 1-홀수, 2-짝수 ... 
*/


//5.
//1~30까지의 숫자 중에서 3과 5의 배수만 출력
//반복 : 3과 5의 배수
//변경 : 1~30
//변수선언 - 첫번째 수 추출 - 추출된 수가 3의 배수 이거나 5의 배수 값인지 확인
// let count = 0;
// for(let i=1; i<=30; i++){
//     if(i%3===0 || i%5 ===0 )
//     console.log(i);
// }

//6.
//사용자의 점수 평균 계산
//score = [80,90,100,70]
//변수 선언 - 합계를 먼저 구한 뒤 - 평균을 구한다
// const score = [80,90,100,70]
// let sum = 0;
// for(let i=0; i<=3; i++){
//     sum += score[i];
// }
// const avg = sum/score.length;
// console.log(sum, avg);

//7.
//상품명 앞에 번호 붙이기
//product = ['키보드','마우스','모니터','프린터']
// const product = ['키보드','마우스','모니터','프린터'];
// // console.log(product[0]);  //첫 수만 추출해본 것
// for(let i=0; i<=3; i++){
//     console.log(`${i+1} - ${product[i]}`);
// }

//8.
/**
 * 아이디를 이용하여 이메일 리스트 만들기
 * users = ['kim','lee','park']
 * 출력값 kim@email.com, lee@email.com, park@email.com
*/
// const users = ['kim','lee','park'];
// for(let i=0; i<=2; i++){
//     console.log( `${users[i]}@email.com` );
// }

//9.
/** 헷갈리는 부분
 * members = ['tom','jane','','null','hong'];
 * 위의 배열에서 이름이 제대로 입력된 회원 수를 출력
 * 1. 배열 변수 선언
 * 2. '',null이 아닌 수를 추출
 */
// const members = ['tom','jane','','null','hong'];
// let count = 0;
// for(let i=0; i<=4; i++){
//     if(members[i]);
//     count++;
// }
// console.log("입력 아이디는" +count);

//10.
/*
 * nums = [3,7,2,9,5];
 * 위의 배열에서 가장 큰 숫자를 출력
 * 1. 변수 선언
 * 2. 가장 큰 수인지 아닌지 확인
 * 3. 가장 큰 수만 추출
*/
// const nums = [3,7,2,9,5];
// let max = 0;
// for(let i=0; i<nums.length; i++){
//     if(max < nums[i]){
//        max = nums[i]}
        
// //3이 7보다 큰지 작은지 확인, 7이 2보다 작은지 큰지 확인하여 크면 저장, 작으면 다음 데이터로 넘기기

// }
//     console.log("max="+max);

    //↑ 풀어서 작성
    // console.log(nums[0]); //3
    // max = nums[0];
    // console.log(nums[1]); //7
    // max = nums[1];
    

//11.
/*
 * nums = [1,4,6,7,8,9]
 * 위의 배열에서 짝수의 개수를 출력
1. nums변수 선언(추가 변수 포함)
2. nums가 짝수인지 아닌지 확인
3. 짝수면 출력, 아니면 다음으로 넘어가기
*/
// const nums = [1,4,6,7,8,9];
// let count = 0;
// for(let i=0; i<nums.length; i++){
//     if(nums[i]%2===0){
//         count++;
//     }
// }
//     console.log(count);

//12.
/*
 * items = ['c','b','c','f','a','g']
 * a문자가 저장된 인덱스 번호를 출력
*/

// const items = ['c','b','c','f','a','g']
// let num = 0;

// for(let i=0; i<items.length; i++){
//     if(items[i]=='a'){
//         console.log([i]);
//     }
// }