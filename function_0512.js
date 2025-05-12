/**
 * 변수 : 데이터를 저장하는 메모리 저장 공간
 * 함수 : 자주 사용하는 코드를 미리 정의해두고, 필요할 때 호출하여 재사용하는 방법
 */

/**
 * 사용자가 로그인을 위해 이름을 입력하면, 뒤에 "안녕하세요!"를 출력
 * 길동, 만수, 철수, 영희
 */
// console.log("길동 안녕하세요");
// console.log("만수 안녕하세요");
// console.log("철수 안녕하세요");
// console.log("영희 안녕하세요");

// const say = (user)=>{
//     console.log(`${user} 인녕하세요`);
// }
// say("길동");
// say("만수");
// say("철수");
// say("영희");

/*함수의 기본 문법
function 함수이름(){
    실행할 코드;
}
호출하는 방법
함수 이름();
*/

//function 선언/호출하기
// function say(){
//     console.log("안녕하세요");
// }
// say();  //함수 호출, function은 호출을 먼저 써도 출력이됨

//화살표 함수 선언/호출하기
// const say = ()=> {
//     console.log("안녕하세요");
// }
// say();   //선언을 먼저하고 호출하는 방식


/**
 * 두 수를 입력 받아 덧셈을 하는 함수
 * 3+5
 * 6+8
 */
//함수 선언
// const add = (a,b)=>{
//     console.log(`${a}+${b} = ${a+b}`)
// }
// add(3,5);
// add(6,8);
// add(2,8);

//return으로 값 되돌려주기
const add= (a,b)=>{
    return a+b;
}
// console.log(add(5,6));

const value = add(3,5);
console.log(value);