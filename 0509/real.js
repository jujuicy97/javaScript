/**
 * for(초기값 ; 조건 ; 증감){}

const data = [5,8,2,6,0];  //data가 가리키는 위치는 5라는 첫번째 공간
console.log(data[0]);  //5
console.log(data[1]);  //8
console.log(data[2]);  //2
console.log(data[3]);  //6
console.log(data[4]);  //0 //숫자만 변경되고 나머지는 동일(숫자가 1개씩 증가됨)
//반복 : console.log(data[ ]); 
//변경 : 0,1,2,3,4

let count = 0;
for(let i=0; i<=4; i++){
   //console.log(i);      //i값이 0,1,2,3,4(인덱스)까지 출력이 됨
   console.log(data[i]);
   //가져온 데이터가 짝수인지 확인
   //가져온 데이터를 2로 나눈 나머지 값이 0이라면 짝수로 확인
   if(data[i]%2 === 0){
    //몇 개인지 확인
    count ++;    
   }
}
console.log("짝수의 개수는" + count);
 */

/**
 * numbers = [1,3,5,7,9]
 * 배열 안의 숫자 모두를 2배로 변환하여 출력
 * 출력 : 1,6,10,14,18
 * 1. numbers 배열 선언
 * 2. numbers의 숫자를 하나씩 출력
 */
// const numbers = [1,3,5,7,9];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
//반복 : console.log([ ]);
//변경 : 0,1,2,3,4 (인덱스값)
/*
const numbers = [1,3,5,7,9];
for (let h=0; h<=4; h++){
    console.log(numbers[h]*2);
}
*/
/**
 * items = ['c','b','c','f','a','g']
 * a문자가 저장된 인덱스 번호를 출력
 * 1. items 배열 변수 선언
 * 2. 첫번째 데이터를 가져옴
 * 3. 가져온 데이터가 a와 같은지 비교
 * 4. 같으면 출력 : 인덱스 번호 출력, 반복 중단(break) 
 * 5. 같지 않으면 : 다음 데이터를 읽기 
 */
//const items = ['c','b','c','f','a','g'];
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
//반복 : console.log(items[ ]);
//변경 : 0,1,2...

const items = ['c','b','c','f','a','g'];
for(let i=0; i<=5; i++){
    // console.log(items[i]);
    //첫번째 데이터를 가져옴
    if(items[i]==='a'){
    //가져온 데이터가 a와 같은지 비교
    //같으면 출력 // 그렇지 않으면 다음 데이터 읽기
        console.log(i);
        break;
    }
}
