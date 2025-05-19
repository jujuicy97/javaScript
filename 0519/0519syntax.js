// ... : 전개구문
// const data = [1,2,3,4];
// // let result = data;      //1,2,3,4
// let result = [...data]; //데이터만 가져오는 형식
// data[1] = 8;            // 2 -> 8
// console.log(data);      //1,8,3,4
// console.log(result);    //1,8,3,4 저장된 위치값이 공유돼서 바뀜

//구조 분해 할당
// const data = [10,20,30];
// let a = data[0];
// let b = data[1];
// let c = data[2];
// let a = data[0], b = data[1], c = data[2]; //배열에서 데이터를 가져올 때 '인덱스 값' 사용
// let [a,b,c] = data;

// console.log(a,b,c);

const users = {
    userName : '홍길동',
    age : 30
}
// const dataName = users.userName;    //객체에서 데이터를 가져올 때 '.' 사용
// const dataAge = users.age;
// console.log(dataName, dataAge);
// const {userName, age} = users;
// const {dataName, dataAge} = users;      //키 값이 다르면 가져올 수 없음
const {userName:dataName, age:dataAge} = users; //키 값이 다르면 키:값을 새로 설정해야 가져올 수 있음
console.log(dataName, dataAge);



