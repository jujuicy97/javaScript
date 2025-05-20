//input창에 입력 후 등록 버튼을 누르면 div가 나타나도록 
//1. comment-form에서 정보 불러오기
const $form = document.querySelector("#comment-form");
const $input = $form.querySelector("#comment-input");
const $list = document.querySelector("#comment-list");

//4버튼 요소 생성하는 함수
const createButton = (value,text)=>{
    const elem = document.createElement("button");
    elem.className = value;
    elem.textContent = text;
    return elem;
};
//댓글 수정 버튼을 클릭했을 때, 사용하는 함수
const editComment = ($comment, oldText)=>{
    const $input = document.createElement("input");
    $input.type = "text";
    $input.value = oldText;
    $input.className = "edit-input"
    const $btnWrap = document.createElement("div");
    $btnWrap.className = "btn-wrap";
    const $saveBtn = createButton("saveBtn","저장");
    $saveBtn.addEventListener("click",()=>{
        //저장 버튼을 클릭하면
        const newText = $input.value.trim();
        if(newText){
            $list.replaceChild(buildCommentElem(newText), $comment);
        }
    });
    const $cancelBtn = createButton("cancelBtn","취소");
    $cancelBtn.addEventListener("click",()=>{
        //취소 버튼을 클릭하면
        $list.replaceChild(buildCommentElem(oldText), $comment);
    });
    $btnWrap.appendChild($saveBtn); //appendChild는 수정/취소를 누를때, 부모/자식간의 속성 때문에 위치값이 바뀜
    $btnWrap.appendChild($cancelBtn);

    $comment.innerHTML = '';
    $comment.appendChild($input);
    $comment.appendChild($btnWrap);
}

//3댓글 요소 생성 함수
const buildCommentElem = (text)=>{
    //div 요소 생성
    const $div = document.createElement("div");
    $div.className="comment";
    const $span = document.createElement("span");
    $span.textContent = text;
    $div.appendChild($span);
    const $btnWrap = document.createElement("div");
    $btnWrap.className = "btn-wrap";
    //4
    const $editBtn = createButton("edit-btn","수정");
    $editBtn.addEventListener("click",()=>{
        editComment($div,$span.textContent);
    });

    const $delBtn = createButton("del-btn","삭제");
    //삭제 버튼이 클릭되면 
    $delBtn.addEventListener("click",()=>{
        $div.remove();
    });
    $btnWrap.appendChild($editBtn);
    $btnWrap.appendChild($delBtn);
    $div.appendChild($btnWrap);
    return $div;
};

//2. 댓글 등록 버튼이 실행이 되면(+기능 초기화)
$form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const text = $input.value.trim();   //input의 value값에 문자열을 저장하면
    if(text){
        const $div = buildCommentElem(text); //댓글 등록
        $list.appendChild($div);
        // createComment(text); //3
        $list.appendChild($div);
        $form.reset();
    }
});



