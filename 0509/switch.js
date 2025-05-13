/**
 * 사용자 회원 등급
 * VIP - 20%할인
 * Gold - 10%할인
 * 나머지는 기본혜택
 * 1. 사용자 회원 등급 정보 설정 : grade
 * 2. grade값이 VIP와 같다면, "20%할인" 출력
 * 3. grade값이 Gold와 같다면, "10%할인" 출력
 * 4. 그 외에는 "기본혜택" 출력
 */
// if문으로 나타낼때
// let grade = "VIP";
/*
if(grade==="VIP"){
    console.log("20%할인");
} else if(grade==="Gold"){
    console.log("10%할인");
} else{
    console.log("기본혜택");
}

//switch문으로 나타날때
switch(grade){
    case "VIP" :
        console.log("20%할인");
        break;               //break가 없으면 다음 문에 뭐가 있든지 실행이 같이 됨
     case "Gold" :
        console.log("10%할인");
         break; 
    default:
        console.log("기본혜택"); 
}
*/

/**
 * 월별 계절 출력
3~5월까지는 봄, 6~8월까지는 여름, 9~11월까지는 가을, 12~2월까지는 겨울

//suitch문으로 나타낼때
let month = 4;
switch(month){
    case 3:
    case 4:
    case 5:
        console.log("봄");
        break;
    case 6:    
    case 7:    
    case 8:
        console.log("여름");
        break;    
    case 9:    
    case 10:    
    case 11:
        console.log("가을");
        break;
    default:
        console.log("겨울");       
}

//if문으로 나타낼때
/*
if(four>=3 && four<=5){
    console.log("봄");
} else if(four>=6 && four<=8){
    console.log("여름");
} else if(four>=9 && four<=11){
    console.log("가을");
} else{
    console.log("겨울");
}
*/

/**
 * 3의 배수는 "3의 배수입니다" 출력, 3, 6, 9, 12...
 * 나머지가 1일 경우는 "나머지가 1입니다" 출력,
 * 나머지가 2일 경우는 "나머지가 2입니다" 출력
 */
const number = 6;
/*switch문으로 나타낼때
switch(number%3){
    case 0 :
        console.log("3의 배수입니다");
        break;
    case 1 :
        console.log("나머지가 1입니다");
        break;
    case 1 :
        console.log("나머지가 2입니다");
        break;
}

//if문으로 나타낼때
if(number%3===0){
    console.log("3의 배수입니다");
} else if(number%3===1){
    console.log("나머지가 1입니다");
} else{
    console.log("나머지가 2입니다");
}
*/