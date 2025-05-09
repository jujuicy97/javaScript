/* //산술연산자
console.log(10+5);
console.log(20-7);
console.log(4*3);
console.log(15/3);
console.log(10%3);
//문자열 연산 (+)
const str1 = 'hello';
const str2 = 'world';
console.log(`${str1} ${str2}`);
console.log(str1+ ' ' +str2);
//+
console.log( str1 + 4 );  // hello4(문자+숫자=문자)
console.log( "10" + 4 );  // 104(+일때만 문자로 인식)
console.log( "10" - 4 );  // 6
console.log( "aaa" - 4 ); // NaN(숫자의 오류값)
console.log( "10" * 3 );  // 30
//문자, 숫자가 서로 연산
let txt = "35";           // 출력 : 30값을 출력시키기
txt = Number(txt);        //Number는 숫자로 변환 시켜줌
console.log( txt, typeof(txt) );
console.log(txt - 5);

//대입연산자
let a = 10;
//a값 + 5
a=a+5;       //15
a+=5;        //20
a=a-5;       //15
a-=5;        //10
a=a*3;       //30
a*=3;        //90
a/=3;        //30
a%=4;        //2
console.log(a);            */


/*//증감연산자 : ++, --
let a = 6;
let b = 0;
b=a++ //a=a+1    a를 먼저 b에 저장시킨 후 ++를 수행
console.log(a);   //a는 a++ 된 값이라 7
console.log(b);   //b는 a만 저장된 상태라 6

b=++a;            
console.log(a,b);  // a=8, b=8
b=a++;
console.log(a,b);  // a=9, b=8
//저장된 값에 어떤 연산자가 먼저 오느냐의 차이
b=a--;
console.log(a,b);  // a=8, b=9
b=--a;
console.log(a,b);  // a=7, b=7            */

/* let x =5;
x++;
console.log(x);  //6
console.log("현재페이지", x++); //6  출력은 6이지만, 계산값은 7이 되어있음.
console.log("다음페이지", x);   //7

let time =5;
console.log("타이머 시작");
console.log(--time);
console.log(--time);

let visitor = 0;
visitor++;
visitor++;
visitor++;
console.log("총 방문자 :", visitor);  //3     

let count = 5;
++count;
count++;
console.log(count);   //7

let page = 5;
let next = page++;
console.log(next);    //5
console.log(page);    //6
console.log(page = ++next);   //6    */                    


/* //비교연산자
let a=7;
let b=4;
console.log( a>b );     //t
console.log( a<b );     //f
console.log( a>=b );    //t
console.log( a>=8 );    //f
console.log( b<=3 );    //f
console.log( a==7 );    //t
console.log( a=='7');   //t 타입은 비교 안함 문자를 숫자로 자동 변환 (느슨)
console.log( a==='7');  //f 타입까지 비교를 해주는 연산자 (엄격)
// ==, ,!=(같지 않다), ===, !==(같지 않다)
console.log( b!=4 );    //f
console.log( b!='4' );  //f
console.log( b!=='4' ); //t

let c=100;
console.log( c !== 100 );  //f

let userAge = 19;
let adultAge = 18 >= 19;
console.log( adultAge );   //f

let x= 3;
let y=true;
console.log( x===y );   //f
console.log( x==y );    //f
console.log( 1==y );    //t
console.log( 1===y );   //f          */

/*//논리 연산자 : and(&&), or(||), not(!)
//console.log( !true );   //false / 아니다의 표현    
console.log( true && true );   //t 두개가 다 참이어서 참
console.log( true && false );  //f 두개가 다 참이어야 참 
console.log( false && false ); //f
//아래가 많이 사용됨↓
console.log( true && 1 );      //1  앞에 값이 true이면, 뒤에 값이 변환됨
console.log( true && 2 );      //2  0제외한 숫자들은 다 true
console.log( true && -3 );     //-3
console.log( false && 'aaa' ); //f
console.log( 1 && 'a' );       //a
console.log( 0 && -1 );        //0  앞에 값이 false이면, 앞에 값이 출력됨   

/* //or / 둘중에 하나만 true면 참
console.log( true || true );        //t
console.log( true || false );       //t
console.log( false || false );      //f    

//not
console.log(!true);          //f
console.log(!false);         //t                 */


/* //삼항조건연산자
//(조건) ? true : false; 

//1. 나이 조건으로 성인/미성년자를 분류
const userAge = 19;
const result = (userAge>=17) ? "성인" : "미성년자"  //성인
console.log(result);

//2. 비밀번호 유무 체크
const passWord = ''; //false : 0 , null, undefined, ''
const message = passWord ? "비밀번호 입력됨" : "비밀번호를 입력하세요";
console.log(message);

//3. 로그인 상태 확인
const isLogIn = true;
const txt = isLogIn ? "로그아웃" : "로그인";
console.log(txt);   //로그아웃                     

//4. 구매 수량에 따른 할인
const qty = 5;
const discount = (qty>3) ? "할인 적용" : "할인 없음"
console.log(discount);                                 

// 5. 점수에 따른 합격/불합격
//score = 72점
//60점 이상이면 "합격" 출력, 그렇지 않으면 "불합격" 출력
const score = 72;
const status = (score>=60) ? "합격" : "불합격";
console.log(status);   

//6. 
// 변수는 하나 설정 : 숫자를 입력
//숫자가 홀수/짝수인지 판별하세요

const num = 4;
const evenAdd = (num%2 === 1) ? "홀수" : "짝수";   //(num%2) 참과 거짓으로 출력해도 됨
console.log(evenAdd);                                 

//7. 사용자 입력 체크
const keyWord = 'search';
const outPut = keyWord ? `검색어 : ${keyWord}` : '검색어를 입력하세요';
console.log(outPut);                                                     */