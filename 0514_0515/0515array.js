const value = ['kim','park','hong','seo'];
let data = value[1];   //'park'
console.log(typeof(data), data);  //srting
value[1] ='dong'; //park의 저장위치가 value[1]이기에, 냅다 바꿔주면 됨
console.log(value);
data = 'park';  //변수 자체가 다르기 때문에 바뀌지 않음.(저장된 위치가 다른 것임)
/*
// const value = new Array();  //배열 선언 방법1
const value = [];              //배열 선언 방법2
value[0] = '사과';
value[1] = '토마토';
value.push('수박');                 //(.push)인덱스 번호 입력 없이 배열 맨 뒤에 데이터를 넣는 메소드 
console.log(value.pop());           //(.pop)배열 맨 뒤의 데이터를 꺼내 없애주는 메소드
value.unshift('딸기');              //(.unshift)인덱스 번호 입력 없이 배열 맨 앞에 데이터를 밀어 넣는 메소드
console.log(value.shift());         //(.shift)배열 맨 앞의 데이터를 밀어 없애주는 메소드
value.unshift('바나나');
value.unshift('딸기');
console.log(value);
console.log(value.length);          //**필수!** 배열의 인덱스 길이 구하기
let check = value.includes("사과"); //특정 값이 배열에 포함 되어있는지 확인(있으면 t,없으면f)
check = value.indexOf("딸기");      //특정 값의 인덱스 번호 위치 확인(만약 없으면 -1값으로 출력됨)
//join() : 배열을 문자열로 결합(111p)
check = value.join(",");            //배열 -> 문자열로 변경
// console.log(typeof(check));
console.log(value.reverse());       //값을 반대로 바꿔주는 메소드
console.log(check);
*/

const fruits = ['사과','배','바나나','귤'];
let result = fruits.slice(1,3); //사용할 때, 처음 이상, 마지막 미만으로 작성
//splice : 중간 값을 추가/삭제
// fruits.splice(1,1);          //삭제
// fruits.splice(2,0,"딸기");   //추가
fruits.splice(1,1,"딸기");      //교체
console.log(fruits);