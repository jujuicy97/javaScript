/**
 * 제어문 : 조건문, 반복문(for-배열)
 */
/**
 * 프롬프트 창에서 [취소] 버튼을 클릭하면, "취소했습니다"를 출력
 * 값이 입력되면 입력된 값을 출력
 * 출력 : console.log로 출력


//개발자 도구(F12) 꼭 확인...
let input = prompt("값을 입력하세요");
// console.log(input);
// if(input===null){
//     console.log("취소했습니다");
// }else{
//     console.log(input);
// }
//{}안에 문장이 하나면, 한 줄로 축약하여 사용할 수 있음
if( input === null ) console.log("취소했습니다");
 */

/**
 * prompt로 프로그래밍 점수를 입력 받습니다.
 * 점수가 90점 이상이면 A학점,
 * 점수가 80점 이상이면 B학점,
 * 나머지는 C학점을 출력
 * 출력은 document.write 이용
 */

let score = prompt("프로그래밍 점수:");
// console.log(input);
if(score !== null){
    //확인버튼 클릭 : 무조건 점수가 입력되었다는 가정
    if(Number(score)>=90){
        document.write("A학점");
    }else if(Number(score) >= 80){
        document.write("B학점");
    }else{
        document.write("C학점");
    }
}
