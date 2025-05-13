//0513-html 파일과 연결하였음.

//버튼을 가져오는 속성 : 쿼리샐렉터, 괄호 안에는 선택자가 들어가야 함
const btnElem = document.querySelector("button");
console.log(btnElem);
// console.log(typeof(btnElem));
// console.dir(btnElem);
btnElem.style.border = "none";

const popupbox = ()=>{
    alert("팝업표시");
}
// btnElem.onclick = popupbox; //1방법 : 만약 popupbox(); 일 경우에는 즉시 실행이 됨
btnElem.addEventListener("click",popupbox); //2방법 : addEventListener를 사용하여 이벤트 주기