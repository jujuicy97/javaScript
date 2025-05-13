/*
if(조건1){
    if(조건2){
    //조건1도 true, 조건2도 true : &&
    }
}

*/
/**
 * 회원이고 나이가 성인, 미성년자 구분
const isMember = true;
const age = 20;
//중첨 사용
// if(isMember){
//     if(age>=18){
//         console.log("성인 회원입니다");
//     } else{
//         console.log("미성년자 입니다");
//     }
// }

//&&조건 사용
if(isMember && age>=18){
    console.log("성인 회원입니다");
} else if(isMember && age<18){
    console.log("미성년자 입니다");
}
 */