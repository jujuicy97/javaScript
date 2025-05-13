/**
 * 함수 : 객체구성(메소드)
 * 동작 해야할 여러 명령을 묶어놓은 것
 * 문제가 생기면 작은 문제로 쪼개서 문제를 해결하는 것이 중요
 * 함수 : 선언하고 호출
 */
/**
 * 1~10까지 숫자를 더하는 함수를 만들어 호출
 * 1) 1~10까지의 숫자
 * 2) 더하는 기능
 * 3) 함수로 만들기
 */

// const calc = (num=8)=>{        //인자를 받는 ()가 매개변수
//     let sum = 0;               //0으로 설정해줘야 누적된 55를 같이 더하지 않음
//     for(let i=1; i<=num; i++){
//         // console.log(i);
//         sum+=i;
//     }
//     return sum;   //되돌려 주는 속성, 출력은 console.로 받아야함
// }
// console.log(calc(10)); //1~10 ->출력   ()안의 값이 '인자'
// console.log(calc(3)); //1~3 ->출력
// console.log(calc(7)); //1~7 ->출력
// console.log(calc());  //값이 없으면 위에서 정한 8값이 기본 설정이 되어 계산됨

//예제
// let hi = "hello"; //전체영역에서 사용되는 변수 : 전역변수
// const change =()=>{
//     hi = "bye";   //함수에서만 사용되는 변수 : 지역변수
// } 
// // const change =()=> hi = "bye"; //(문장이 하나 일 때)위의 함수를 한 줄로 축약 작성
// console.log(hi); //hello
// change();
// console.log(hi); //bye

//예제
// let hi = ()=>{
//     return '안녕하세요';
// }
// // let hi = ()=> '안녕하세요'; //위 함수를 축약한 것, 축약시 return이 있다고 생각하기
// const data = hi();
// console.log(data);

//예제
let hi = (user) =>{
    console.log(`${user}님 안녕하세요`)
}
// let hi = user => console.log(`${user}님 안녕하세요`); //위 함수를 축약한 것, 축약시 매개변수 괄호도 생략 가능
hi("홍길동");
//해석 : hi에 저장한 홍길동을 user로 올려서 저장 -> 저장한 user값을 함수로 실행 -> 출력