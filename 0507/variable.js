// 변수명은 문자, $, _ 만 사용 가능(숫자, 공백 x)
// 숫자는 첫문자만 사용이 안되고 중간이나 끝은 가능
//ex) let item1 = “하나” (o) / let 1item = “하나” (x)
/* 변수 표기법은 userName 처럼 소문자로 시작해서 두번째 단어부터는 대문자(camel case-낙타기법)
camelCase : js
PascalCase : 다 첫문자를 대문자
snake_case : 언더바로 연결
kebab-case : - 구분, HTML,CSS 

userName 
get : 가져오기
set : 설정 */

// let value = "30";
// console.log(value);

/*1. 변수 선언하기 (변수를 선언하는 예약어 let)*/
let age; //값이 없음, undefined
age = 100; //값을 할당
age = 200; //재할당
console.log( age ); //참조: 메모리에서 값을 찾아서 반환(변환)
console.log(typeof(age));

let str = "사용하는 문자"; //문자열(=string)
console.log( str , typeof(str));

let bool = "10>100"; //쌍따옴표 안에 있으면 그냥 문자로 인식
console.log( bool, typeof(bool));

let value = null; //비어있는 데이터
value ="재할당";
console.log(value);


// const는 상수라는 뜻으로, 변하지 않는 수, 재할당이 안됨
const data = 123; 
data = 456;
console.log( data );
