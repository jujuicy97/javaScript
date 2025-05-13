/**
 * for문을 이용하여 배열값을 가져오기
 * syudents = ['park','hong','lee','kim']
 * 출력은 console.log로 출력
 */
let students = ['park','hong','lee','kim'];
//1) 일반적인 for문
// for(let i=0; i<students.length; i++){
//     console.log(students[i]);
// }

//2) 배열 객체를 이용한 반복
//배열명.forEach(콜백함수) {....}
//콜백함수란, 다른 함수의 인수로 사용하는 함수
// students.forEach((data,idx)=>{
//     //배열에 들어간 인덱스 값을 하나씩 출력해주는 함수 : forEach
//     console.log(data);
//     console.log(idx);
// });

//3) for -of문
//students에 park이 들어와서 data에 저장되어 console. 출력 <-이게 반복
// for( data of students )
//     console.log(data);
// }

//4) for -in문 (인덱스 번호로 출력)
// for( idx in students ){
//     console.log( idx );
// }

//배열 : [1,2,3,4,5,6]
// let value = new Array(); //[] <-이 형태로 만들어짐
// let data = []; //위와 같은 형태
// value[0] = 30;
// value[1] = "따르릉";
// value[2] = true;
let value = new Array(30, "따르릉", true); //위의 배열을 한 줄로 축약 작성
console.log(value);
console.log(value.length);
value.forEach((data)=>{
    console.log(data);
});

