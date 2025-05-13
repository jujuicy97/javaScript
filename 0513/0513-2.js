/**
 * sum 이라는 변수 선언
 * let, const
 */
//변수 선언
// let sum;
//sum 변수에 10을 할당
// sum = 10;
//선언+할당 동시처리
let sum = 10;
//변수의 값을 40으로 변경
sum  = 40;
console.log(typeof(sum));
//sum에 문자열 'hello'
sum="hello"; //배열
sum = ['h','e','l','l','o'];
console.log(sum[1]); //index=0

//함수
//선언 -> 호출 : function, => 사용
let add = ()=>{
    console.log(`3+4=${3+4}`);
}
add(); //즉시 실행하라는 명령
// add; //주소값만 가져오라는 명령

//객체 : 여러개의 유형의 데이터를 하나로 묶어놓은 것
//js에서는 배열도 객체, 함수도 객체
//객체는 키:값 로 나타냄
//객체를 선언
let person = {
    user_name: '홍길동',
    age: '20',
    email:'aaa@email.com',
    phont:'010-1111-2222',
    book:['a','b','c','d'],
    print:function(){
        alert("안녕하세요");
    },
    hello(){
        alert("반갑습니다");
    }
}
console.log(person.user_name);
console.log(person.book[2]);
console.log(person["email"])
// person.print();
person.hello();