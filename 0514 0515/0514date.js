/**
 * 시간계산기
*/
const $resultBtn = document.querySelector("button");
//select value 가져오는 함수
const getSelectDate = (id)=>{
    const elem = document.querySelector(`#${id}`);
    return elem.value;
}
//결과보기 버튼 클릭했을 때 정보 가져오기
$resultBtn.addEventListener("click",()=>{
    console.log("결과버튼 클릭");
//시작 날짜의 연도
    const startDate = new Date(getSelectDate("start-year"),
                               getSelectDate("start-month")-1,
                               getSelectDate("start-day")
                            );
    const targetDate = new Date(getSelectDate("target-year"),
                                getSelectDate("target-month")-1,
                                getSelectDate("target-day"),
                            );
    // console.log(startDate.toDateString(), targetDate.toDateString());
    //남은 날짜 계산 targetDate - startDate
    const diff = targetDate - startDate;
    //남은 시간 초:
    const diffDays = Math.floor(diff/(1000*60*60*24));
    const diffHours = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    const diffminutes = Math.floor(diff%(1000*60*60)/(1000*60));
    const diffseconds = Math.floor(diff%(1000*60)/(1000));
    if(diff<=0){
        document.querySelector(".dday").textContent = "목표일이 시작일보다 빠릅니다";
    } else {
        document.querySelector(".dday").textContent = `남은 날짜 : ${diffDays}일`;
        document.querySelector(".dtime").textContent = `남은 시간 : ${diffDays}일 ${diffHours}시 ${diffminutes}분 ${diffseconds}초`;
    } 
});
const setSelectDate = (id, value)=>{
    const $select = document.querySelector(`#${id}`);
    $select.value = value;
}
 //1. 현재 시간을 읽어오기(년/월/일)
const setToday = ()=>{
    //date라는 객체를 이용해서 현재 시간 가져오기
    const today = new Date();  
    const year = today.getFullYear(); //년
    const month = today.getMonth()+1; //월(get.month는 0부터 시작)
    const day = today.getDate();       //일
    // console.log(year, month, day);
    setSelectDate("start-year",year);
    setSelectDate("start-month",month);
    setSelectDate("start-day",day);
    //제일 하단의 오늘의 날짜 출력
    const elem = document.querySelector(".today");
    elem.textContent = `현재 날짜 : ${today.toLocaleString()}`;
}
setInterval(setToday, 1000);
//처음 시작하는 함수를 표시함
window.onload = ()=>{
    setToday();
}

