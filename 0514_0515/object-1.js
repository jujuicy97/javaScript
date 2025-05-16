/**
 * 객체 : 다양한 자료형들의 묶음 {}
 * 객체가 이미 만들어져서 브라우저에 저장된 상태 : 내장객체
 * 객체는 기본적으로 첫문자가 대문자
 */
// const computer = {
//     //key : value
//     moniter: '16인치',
//     ram: '8G',
//     disk: '256G'
// }
// // window.prompt();  //window사용되는 객체는 최상위 객체

// console.log(computer.moniter);

/**
 * 이미 만들어져 있는 내장객체를 사용해보기
 * Date
 */
// const now = new Date();
// console.log(typeof(now));  //object -> 객체 생성
// console.log(now);

// console.log("연도", now.getFullYear());
// console.log("월", now.getMonth()+1);  //월은 0부터 시작
// console.log("일", now.getDate());
// console.log("요일", now.getDay());  //요일은 0부터 시작 : 일요일
// console.log("시", now.getHours());
// console.log("분", now.getMinutes());
// console.log("초", now.getSeconds());  //1초 = 1000milliseconds
// console.log("밀리초", now.getMilliseconds());
/**
 * 요일출력
 * 0-일요일, 1-월요일 ...
 * 조건문 : if, ?, switch-case
 */
// switch(now.getDay()){
//     case 0:
//         console.log('일요일');
//         break;
//     case 1:    
//         console.log('월요일');
//     case 2:
//         console.log('화요일');
//         break;
//     case 3:    
//         console.log('수요일'); 
//         break;  
//     case 4:    
//         console.log('목요일');
//         break;
//     case 5:
//         console.log('금요일');
//         break;
//     case 6:    
//         console.log('토요일');
//         break;   
// }

//위의 switch-case를 배열로 만들기
// const now = new Date();
// const day = now.getDay;
//한 줄로 작성하기 ↓
// const day = new Date().getDay();  //오늘 날짜 출력
// const day = new Date('2025-05-13').getDay(); //어제 날짜 출력
// // console.log(day);
// const week = ['일','월','화','수','목','금','토'];
// console.log(`${week[day]}요일`);

/**
 * 생일을 이용하여 나이 계산하기
 * 현재 연도 - 생일 연도
 * getFullyear; new Date();
 */
// const today = new Date().getFullYear(); //오늘 연도
// const brith = new Date('2000-01-01').getFullYear();
// let age = today - brith;
// console.log(`당신의 나이는${age}세 입니다`);

/*
d-day 구할 때
Date()객체 : UTC(1970.1.1) 밀리초 기반으로 작동
현재 날짜 : 밀리초
마지막 날짜 : 밀리초
마지막 날짜 밀리초 - 현재 날짜 밀리초 : ()밀리초
1s = 1000ms
1m = 1000*60
1h(60m) 1000*60*60
1d(24h) 1000*60*60*24(ms)
*/
// const today = new Date().getTime();  //현재 날짜
// const dday = new Date(`2025-12-25`).getTime(); //dday
// const diff = dday-today;
// // console.log(diff);
// const days = diff/(1000*60*60*24); //225일
// console.log( Math.ceil(days) );  //소수점 생략(반올림 상태로) : Math객체 사용
// //
// const future = new Date();
// future.setDate(future.getDate()+days);
// console.log(`${future.getMonth()+1}월 ${future.getDate()}일`);

/**
 * 쿠폰 완료일
 * 7일동안 보이지 않기
 */
const today = new Date(); //현재 날짜
today.setDate(today.getDate()+7);
console.log(today.toDateString());       //외국 형태
console.log(today.toLocaleDateString()); //한국 형태