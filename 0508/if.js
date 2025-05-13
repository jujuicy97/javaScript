/*
//제어문 : if문
(조건) ? true : false; ->삼항연산자와 흡사한 유형

if(조건) {
조건이 true일 경우 실행시키도록 하는 제어문
}

사용밥법 
if(조건){
    조건이 true일 경우 실행
} else {
    조건이 false일 경우 실행
}

*/
/*
//점수가 60점 이상이면 합격 출력, 아니면 불합격 출력
1. 변수 : score = 75점으로 설정
2. score가 60점 이상인지 아닌지 체크
3. 60점 이상이면 합격 출력, 아니면 불합격 출력

삼항연산자로 나타낼 때
const score = 75;
const msg = (score>60) ? "합격" : "불합격";
console.log(msg);

//if문으로 나타낼 때
const score = 75;
if(score>60){
    console.log("합격");
} else {
    console.log("불합격");
}
*/

/* 연습해보기 
성인 인증 : 나이가 18세 이상이면 성인 출력, 그렇지 않으면 미성년자 출력
1. 나이 입력
2. 나이가 18세 이상인지 확인
3. 18세 이상이면 성인, 그렇지 않으면 미성년자 
const age = 18;
if(age>=18){
    console.log("성인");
} else{
    console.log("미성년자");
}

const all = (age>=18) ? "성인" : "미성년자"
console.log(all);                              
*/
/*
재고 상태를 확인 : 물품의 재고 수량이 0개 이상이면 주문 가능 출력, 그렇지 않으면 품절 출력
1. 재고 수량 입력
2. 재고 수량이 0개 이상인지 확인
3. 0개 초과면 "주문 가능" 출력, 그렇지 않으면 "품절" 출력
const count = 0;
//(count>=0)

if(count>0){
    console.log("주문 가능");
} else {
    console.log("품절");
}
*/

/* 다중처리
점수가 90점 이상이면 A등급
점수가 80점 이상이면 B등급
점수가 70점 이상이면 C등급
점수가 60점 이상이면 D등급
나머지는 재시험 등급

조건문 
if( 1조건 ){
    //참일 경우
} else if( 2조건 ){
    //참일 경우
} else if( 3조건 ){
    //참일 경우
} else if( 4조건 ){
    //참일 경우
} else if( 5조건 ){
    //참일 경우
}

const score = 55;
if(score>=90){
    console.log("A등급");
} else if(score>=80){
    console.log("B등급");
} else if(score>=70){
    console.log("C등급");
} else if(score>=60){
    console.log("D등급");
} else{
    console.log("재시험 등급");
}
    */

/* 시간에 따른 인사말 출력
시간이 12시 전이면 "좋은 아침입니다" 출력, 
시간이 18시 전이면 "좋은 오후입니다" 출력,
그 이후에는 "좋은 저녁입니다" 출력
시간에 대한 변수 : hour로 처리

1. 시간 값을 입력 | hour에 저장
2. hour값이 12보다 작으면, "좋은 아침입니다" 출력
3. hour값이 18보다 작으면, "좋은 오후입니다" 출력
4. 나머지는 "좋은 저녁입니다" 출력

const hour = 24;
if(hour<12){
    console.log("좋은 아침입니다");
} else if(hour<18){
    console.log("좋은 오후입니다");
} else{
    console.log("좋은 저녁입니다");
}
*/

/* 숫자 범위 확인
숫자가 0보다 작으면 "음수입니다" 출력
0(포함)~100사이의 수이면 "0부터 100사이의 수입니다" 출력
100 초과 수일 경우 "100보다 큰 수입니다" 출력
1. 숫자 변수 설정 : count
2. count값이 0보다 작은지 확인 : 출력
3. count값이 0보다는 크거나 같고, 100보다는 작거나 같은지 확인 : 출력
4. count값이 100보다 큰지 확인 : 출력

const count = 53;
if(count<0){
    console.log("음수입니다");
} else if(count>=0 && count<=100){
    console.log("0부터 100사이의 수입니다");
} else{
    console.log("100보다 큰 수입니다");
}
*/

/* 월별 계절 출력
3~5월까지는 봄, 6~8월까지는 여름, 9~11월까지는 가을, 12~2월까지는 겨울
1. four로 변수 설정
2. four가 3보다 크거나 같고, 5보다 작거나 같으면 "봄"
2. four가 6보다 크거나 같고, 8보다 작거나 같으면 "여름"
2. four가 9보다 크거나 같고, 11보다 작거나 같으면 "가을"
2. 나머지는 겨울

const four = 4;
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

/*
코드가 입력되면 111,222,333 일 경우, "코드가 입력되었습니다" 출력

const code = 444;
if(code===111 | code===222 | code===333){
    console.log("코드가 입력되었습니다");
}
console.log("조건 성립 안됨");

// if(code === 111){
//     console.log("코드가 입력되었습니다");
// } else if(code === 222){
//     console.log("코드가 입력되었습니다");
// } else if(code === 333){
//     console.log("코드가 입력되었습니다");
// } else{}
*/

/*
키워드가 비어있거나 공백일 경우는 "검색어를 입력하세요" 출력

const keyword = '';
if(keyword==='' | keyword===' '){
    console.log("검색어를 입력하세요");
}
*/