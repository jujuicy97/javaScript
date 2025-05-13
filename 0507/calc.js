let num1 = 40;
let num2 = 30;
// num1 과 num2의 합을 저장하세요
let value = num1+num2;
console.log(value);
//num1 과 num2의 곱을 저장하고, 출력하세요
value = num1*num2;
console.log(value);

value = num1-num2;
console.log(value);

value = num1/num2;
console.log(value);

value = num1 % num2; //나머지를 의미(나머지 값)
console.log(value);

if( value % 2 ) {
    console.log("홀수");
} else {
    console.log("짝수");
}

/***************************************/

// 숫자로 사칙연산
// 문자로 사칙연산 + *
let str1 = "학교종이";
let str2 = "땡땡땡";
console.log(str1+str2);
console.log(str1-str2); // 출력값 NaN은 계산이 잘못되었다는 표시, 문자는 +만 가능

//숫자와 문자가 합쳐지면, 문자가 됨
str1 = 123;
str2 = "숫자합하기";
console.log(str1+str2);

console.log("3"+4+5); //문자+숫자는 문자로 변환
console.log(3+4+"5"); //숫자는 계산되고 뒤의 숫자+문자는 문자로 출력
console.log("5"+3); //8
console.log("5"-3); //2, +를 제외하고는 연산됨
console.log("5"*2); //10, +를 제외하고는 연산됨
console.log("5px"-1); //NaN 계산 안됨

console.log("나는 '홍길동' 이다");

//숫자 25와 숫자 48을 각각 변수에 저장 후
//출력 : 25 + 48 = 계산값
let data1 = 25;
let data2 = 48;
//연산하는 과정 그 자체를 보여줄때는 ``(햅틱) 사용 / 문자열 출력 시 사용
console.log(`${data1} + ${data2} = ${data1+data2}`); 