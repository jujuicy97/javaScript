/**
 * * 반복문 : 반복하기
 * for, while, do-while
 * for문(기본for문, for-in, for-of)
 * 형식 : 
 * for(초기값;조건식;증감식){
 *   반복되는 문장;
*/
/*
 * 1~10까지를 출력
 * 반복 : 숫자 출력
 * 변경 : 1~10

for( let i=1; i<10; i++){
    console.log(i);

 * 10~1까지 출력
 * 반복 : 숫자 출력
 * 변경 : 10~1 , 초기값 : 10, 1씩 감소

for(let i=10; i>=1; i--){
    console.log(i);
}
*/
/**1~10수 중 짝수만 출력
반복 : 숫자 출력
변경 : 1~10, 초기값 : 2, 조건 : 10보다 작거나 같고, 2씩 증가

방법1
for(let i=2; i<=10; i+=2){
    console.log(i);
}
방법2
for(let i=1; i<=10; i++){
    if(i%2 === 0 ){
        console.log(i);
    }
}
*/

/**
 * 1~10까지의 수의 합을 구하시오 1+2+3+4+5+6...
 * 반복 : 수의 합(덧셈)
 * 변경 : i(1~10)

let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;
}
console.log(`1~10까지의 합 : ${sum}`);
 */

/***
 * 1~10까지 숫자를 출력하고, 그 옆에 홀수인지 짝수인지 같이 출력
 * 1 - 홀수
 * 2 - 짝수
 * 반복 : 숫자와 홀수 짝수 출력
 * 변경 : 숫자-홀짝 여부
 *        1~10 - i%2

for(let i=1; i<=10; i++){
    const type = i%2 ? "홀수":"짝수"
    console.log(`${i} - ${type}`);
}
 */

/***
 * 1~30까지의 숫자 중에서 3과 5의 배수만 출력
 * 반복 : 3과 5의 배수 출력
 * 변경 : 1~30변경, 이 중 3,5의 배수를 찾아내기

for(let i=1; i<30; i++){
    if(i%3===0 || i%5===0){
        console.log(i);
    }
}
 */
//let, const : 자료를 저장
//하나의 변수에 하나의 데이터만 저장(let, const)
//하나의 변수에 여러개의 데이터를 저장할 때 : 배열
//배열 : [1,2,3,4,5]
//let arr = [1,2,3,4,5]; //arr은 첫번째 변수인 1을 가져오는 위치부터 세팅돼있음
//console.log( arr[3] );  //배열을 가져올때는 0부터 시작
// const names = ['tom', 'jane', 'anna', 'mike']
//             //names[0] names[1] names[2] names[3]

//for문으로 나타내기
// for(let i=0; i<=3; i++){
//     console.log(names[i]);
// }

//문자열을 만들고 반복하기
//const word = ['h','e','l','l','o'];
// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);
// console.log(word[4]);

//for문 사용하여 나타내기
// for(let i=0; i<=4; i++){
//     console.log(word[i]);
// }

//문자열도 배열로 봄
// let str = "hello";  
// for(let i=0; i<=4; i++){
//     console.log(str[i]);
// }
/**
 * text="javascript"
 * 출력값 : tpircsavaj (거꾸로 출력)
 */
let text = "javascript";
for(let i=9; i>=0; i--){
    console.log(text[i]);
}