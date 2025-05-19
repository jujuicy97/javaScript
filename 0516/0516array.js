/**배열 정리
 * 배열 : [ ]

const arr = [1,2,3];  //배열 선언 방법1
// const arrObj = new Array(1,2,3);  //배열 선언 방법2
const arr2 = [];
arr2[0] = 'a';
arr2.push('b');
console.log(arr2);
const data = arr2.pop();
console.log(arr2);
console.log(data);
 */

/**메소드
 * forEach(배열의 값을 가져오기), 
 * map(새로 생성, leght가 같음), 
 * filter(새로 생성, leght가 달라서 조건이 있음)
 */
const value = ['a','b','c','d','e'];          //***공통 배열 선언***
// for(let i=0; i<value.length; i++){
//     console.log(value[i]);
// }


/** forEach
 * forEach(콜백함수 포함)
 * 매개변수(value, index, array)
*/
// value.forEach((item,num)=>{
//     // console.log(item);
//     //출력형식 : {index} 번째 값은 {value} 입니다
//     console.log(`${num}번째 값은 ${item}입니다`);
// });


/**map
 * 출력결과를 소문자를 다 대문자로 출력 
 * map
*/
// const upperCase = value.map((data)=>{
//     return data.toUpperCase();
// });
// console.log(upperCase);


/**filter
 * 알파벳이 'c' 이후인 값을 새로운 배열로 생성
 * filter
 */
// const filterCase = value.filter((item)=>{
//     return item > 'c';
// });
// console.log(filterCase);

/**forEach, map, filter의 주요 차이점
 * 원본 배열을 변경하지 않고 새로운 배열을 만드시오 : map, filter
 * filter 메서드는 어떤 결과를 반환하는가? : boolean형(True/False)을 반환
 */

/**예제1
 * 각 요소 앞에 value: 이라는 문자열을 붙여서 새롭게 배열을 만들어보세요.
 * 출력 결과 : [value:a, value:b, value:c]
 * 사용 메소드 : map
 */
// const case1 = value.map((item)=>{
//     return `value:${item}`;    
// });
// console.log(case1);

/**예제2
 * 알파벳 순서상 'b' 뒤에 있는 요소만 출력해보세요.
 * 출력 결과 :['c','d','e'];
 */
// const case2 = value.filter((item)=>{
//     return item > 'b';
// });
// console.log(case2);

/**예제3
 * 각 요소를 '현재 값은 {}입니다'로 출력해보세요.
 * 출력 결과 : 현재 값은 a입니다
 *            현재 값은 b입니다
 */
// value.forEach((item)=>{
//     console.log(`현재 값은 ${item}입니다`);
// });
