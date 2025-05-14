/**
 * 사용자 점수를 반올림해서 등급 분류
 * 사용자 점수 = [86.7, 92.6, 73.2]
 * 90점 이상이면 A로 출력, 80점 이상이면 B로 출력, 70점 이상이면 C로 출력
 */
/*사용자 점수를 반올림 하는 변수 지정 -> 사용자 점수 if문으로 나타내기 -> 출력하기*/
const count = [];

if(count >=90 ){
    const score = Math.floor();
    console.log("A");
} else if(count >= 80){
    console.log("B");
} else{
    console.log("C");
}

/**
 * 쿠폰 만료일 자동 계산
 * 오늘 날짜 이후로 30일 계산하여 출력
 * 출력 : 쿠폰 만료일 : (날짜 출력)
 */
//오늘의 날짜를 받기 -> *30일 계산하기 
// const today = new Date();
// today.setDate(today.getDate()+7);
// console.log(`쿠폰 만료일 : ${today.toLocaleDateString()}`);

/**
 * 오늘의 date 값을 입력 받아서 주말인지 평일인지 판별하기
 */
//오늘의 날짜를 받기 -> 토/일은 주말이고 그렇지 않으면 평일로 지정하기 -> 판별하기 
/*
const today = new Date().getDay();
// console.log(today);
const week = ['일','월','화','수','목','금','토']; //0(일)~6(토)
if(today === 0 || today === 6){
    console.log(`주말입니다`);
}else{
    console.log(`평일입니다`);
}
*/


/**
 * 인증번호 생성 : 정수(0~10) 6자리 숫자를 랜덤하게 추출
 */
/*
const pass = [];
while(pass.length < 6){
    const num = Math.floor(Math.random());
    let i = 0;  //몇개를 가지고 있는지 확인용
    while(i < pass.length){
        if(pass[i] === num){

        }
    }
}
*/
