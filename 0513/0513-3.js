//기본 연산 연습하기

// let x =10;
// let y =4;
let x=10, y=4, result; //undefinde
// result = null;
// result = 0;
// result = ''; //빈 값, 오류
// result = ' '; //true 공백이 들어간 값
// console.log(result);
y = ++x;
console.log(y); //y=11
x = y--;
console.log(x);  //x=11, y=10
result = x + y--;
//result = x + y
//y = y-1
console.log(result); //result=21, x=11, y-9

result = ++x - y;
// x= x+1
// result = x-y
console.log(result); //result=3, x= 12, y=9

let txt = null;
txt = result + "값입니다"; //문자와 숫자, 문자와 문자가 + 연산이 될때는 연결 연산자
txt = `${result}값입니다`
console.log(txt);  //3값입니다
console.log(typeof(txt));  //string

console.log(4>2); //true
console.log('a'>'b'); //아스키 코드 : false
console.log('javascript'>'JAVASCRIPT'); //아스키 코드 : true
//JAVAscript, Javascript : 전부다 대문자나 소문자로 변경
const user = "Hello"; //string 객체
//Number() 이미 만들어진 객체 : 내장객체 (문자를 숫자로 변경해줌)
console.log(user.toLowerCase()); //전부 다 소문자로 변경 (string 내장객체)
console.log(user.toUpperCase()); //전부 다 대문자로 변경 (string 내장객체)