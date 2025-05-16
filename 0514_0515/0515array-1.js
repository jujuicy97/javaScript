/**
 * for-배열
 * forEach, map, filter, reduce
 */
// const fruits = ['사과','배','바나나'];
// const result = [];
//for문을 이용해서 furits안에 있는 데이터를 그대로 result에 복제하세요.//
//result 값을 출력 시 ['사과','배','바나나'];
//변경 0,1,2
/*
ftuits[0]; //사과
ftuits[1]; //바나나
ftuits[2]; //배

for(let i=0; i<furits.length; i++){
    //result[i] = fruits[i];
    //result.push(furits[i]);
    console.log(furits[i]);
}
*/
// console.log(...furits);  //... : 각각의 값을 읽어오는 속성
// result.push(...furits);
// console.log(result);


//***forEach(value,index,array) : 각각의 데이터를 반복(매개변수)
/*
fruits.forEach((value,idx,arr)=>{  //사과, 배, 바나나 순으로 value값에 저장됨(매개변수는 내가 정하는 이름)
    console.log(value);
    console.log(idx);
    console.log(arr);              //자기자신
});

//예제1
fruits.forEach((value,idx)=>{   //value값은 무조건 필요함. 필요가 없으면 _로 지정해도 됨
    console.log(value);  //fruits[i]
    console.log(idx);    //index
});
*/

/*예제2
//***map : 배열을 수정해서 새 배열을 생성 
//예제1의 forEach를 이용하여 numbers에 입력된 숫자의 두 배(*2)값을 doubles에 저장하세요.
const numbers = [1,2,3];
const doubled = [];   //결과값[2,4,6];

numbers.forEach((num)=>{
    console.log(num);  //1,2,3
    doubled.push(num*2);
});
console.log(doubled);
*/

/*예제3
//예제2의 .push와 동일한 결과물을 .map으로 만들어보기
const clacArr = numbers.map((value)=>{
    return value*2;
});
console.log(clacArr);

//예제3축약
// const clacArr = numbers.map(value=>value*2);
// console.log(clacArr);
*/

/**
 * filter : 조건에 맞는 요소만 추출해서 새 배열을 생성
 * true 값일 경우는 새로운 배열에 추가, false 값의 경우는 추가가 안됨
 */
// const numbers = [1,2,3,4,5];
// const result = [];    //추출 시 : 2,4

/*예제4
//forEach를 이용해서 2의 배수만 result 배열 변수에 저장하세요.
numbers.forEach((data)=>{
    console.log(data);
    if(data%2 === 0){
        result.push(data);
    }
});
console.log(result);
*/
/*예제5 (예제4와 같은 출력값)
const even = numbers.filter((data)=>{  //data에 [1,2,3,4,5]가 들어오게 함
    return data%2 === 0;               //값이 true일 경우만 값이 추가되니깐 2로 나누었을때 0인 값인 2,4만 추출이됨
});
console.log(even);
*/

/*예제6
배열 수 중 5보다 큰 수만 새로운 배열로 생성하세요.
map(길이의 변경이 없을 때), filter(길이의 변경이 있을 때)

let numbers = [2,5,8,9,7];
const result = numbers.filter((num)=>{
    return num > 5;
});
console.log(result);
*/
