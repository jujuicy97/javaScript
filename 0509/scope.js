
let value = true; //전역변수
let aaa = "전역변수";
// let aaa= "data";     //syntaxError
if(value){                     
    //지역변수
    let aaa= "value가 true";   //reperanceError
    console.log(aaa);
}
console.log(aaa);
 // aaa가 console.log가 없을 때, 오류가 뜨는 이유는 {}안에서만 선언이 되기 때문에, 
 // 값은 할당 되었지만 중괄호가 닫힌 그 즉시 변수는 사라지고 출력은 안됨
 // {}사이에 쓴 변수는 {} 안에서만 사용해야 출력이 된다