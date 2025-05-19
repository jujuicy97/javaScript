const buttons = [
    {text:'AC',className:'ac'},
    {text:'/'},     //<button>/</button>
    {text:'7'},
    {text:'8'},
    {text:'9'},
    {text:'*'},
    {text:'4'},
    {text:'5'},
    {text:'6'},
    {text:'-'},
    {text:'1'},
    {text:'2'},
    {text:'3'},
    {text:'+'},
    {text:'0',className:'zero'},
    {text:'.'},
    {text:'=',className:'equals'}
];
const inputBox = document.querySelector("input");
//input display
let displayCalc = '';
const onBtnClick = (e)=>{
    let type = e.target.textContent;
    switch(type){
        case 'AC':          //초기화
            displayCalc='';
            inputBox.value=displayCalc;
            break;
        case '=':            //값을 계산
            let result = eval(displayCalc); //수식이 있는 문자값을 계산하여 결과를 내줌
            displayCalc = result;
            inputBox.value = displayCalc;
            break;
        default:            //나머지 값은 input에 입력
        displayCalc += type;
        inputBox.value = displayCalc;
        break;
    }
}

//button을 만들고 > btn-wrap 추가
const btnwrap = document.querySelector(".btn-wrap");
// console.log($btn);
buttons.forEach((btn)=>{
    const elem = document.createElement("button"); //<button>/</button> 만듦
    elem.textContent = btn.text;
    if(btn.className){
        elem.className = btn.className;
    }
    elem.addEventListener("click",onBtnClick);
    btnwrap.appendChild(elem);
});


