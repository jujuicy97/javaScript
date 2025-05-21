 //1.추가 버튼을 클릭이 되면 / 이름과 나이 정보 읽어오기
// const addBtnElem = document.querySelector("#userForm>button");
const formElem = document.querySelector("#userForm");
const nameElem = formElem.querySelector("#inputName"); //formElem안에 포함돼있어서 부모에서 쿼리셀렉터 가져올 수 있음
const ageElem = formElem.querySelector("#inputAge");  //formElem안에 포함돼있어서 부모에서 쿼리셀렉터 가져올 수 있음
//5. 버튼 정보 추가 가져오기
const listElem = document.querySelector(".container");
// console.log(nameElem);
// console.log(ageElem);
/*-------------------------------------------------------------- */
//참고용
// // console.log(addBtnElem);
// addBtnElem.addEventListener("click",(event)=>{
//     event.preventDefault(); //***기본설정 없애기 ex)h1태그의 굵기 같은 컴퓨터가 정해놓은 것들
//     // console.log("추가 버튼 클릭");
//     //name의 value값 가져오기
//     const nameTxt = nameElem.value;
//     const ageTxt = ageElem.value;
//     console.log(nameTxt, ageTxt);
// });
/*-------------------------------------------------------------- */
//2, 4. 요소를 생성하기
//item 요소 생성 함수
const createItem = (nameTxt,ageTxt)=>{
    //div 요소 생성
    const divElem = document.createElement("div");    
    divElem.className = "item";
    //span 요소 생성
    const spanElem = document.createElement("span");
     spanElem.textContent = `${nameTxt} (${ageTxt}세)`;
     divElem.appendChild(spanElem);
     //5. button 요소 생성(정보 추가로 가져오기)
     const btnElem = document.createElement("button");
     btnElem.textContent = "삭제";
     //6. 취소버튼이 클릭되면 div 전부가 삭제되기
     btnElem.addEventListener("click",()=>{
        divElem.remove(); //DOM 요소를 삭제하는 속성 : remove();
     });
     divElem.appendChild(btnElem);
     listElem.appendChild(divElem);
};
//3.폼에서 submit이 실행이 되는경우 함수 실행하기
formElem.addEventListener("submit",(event)=>{    //form안에 있기에 form에서도 이벤트 처리하면 submit에 적용됨
    event.preventDefault(); //초기화시키는 submit의 기본속성을 없애줌
    const nameTxt = nameElem.value.trim(); //trim은 문자열의 공백을 없애줌
    const ageTxt = ageElem.value;
    // console.log(nameTxt,ageTxt);
    //3-1) 만약에 버튼에 nameTxt과 ageTxt이 있을경우
    if(nameTxt && ageTxt){
        //item 생성
        createItem(nameTxt,ageTxt); //3-1)아이템 만들기(4번으로 이어짐)
        //입력 필드 초기화
        formElem.reset();  //작성 후 추가버튼 누르면 작성한 것을 없애줌
    }
});