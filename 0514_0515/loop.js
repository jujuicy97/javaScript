/**
 * 무한반복, 시간이 지난 다음에 실행
 * setTimeout : ~시간이 지난 다음에 한 번 실행
 * setInterval : ~마다 실행(무한반복)
 */
//setTimeout : 함수 안에 함수가 있는 콜백 함수
// setTimeout(()=>{
//     console.log('timeout');
// },3000);        //3초 이후에 런닝됨
let time = 0;
const timerID = setInterval(()=>{
    console.log(`${time++}`);
},300);
//
//일정 시간이(3초) 지나면 종료
setTimeout(()=>{
    clearInterval(timerID); //무한반복을 멈추는 객체는 clearInterval
},3000);
