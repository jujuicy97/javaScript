
 /* 배열 안의 객체를 이용하여 반복 (배열 안에는 숫자, 문자, 배열, 객체 다 가능)*/

// const products = [[1,2,3],[3,4,5],[5,6,7]];
// console.log(products[0]);  //[1,2,3]
// console.log(products[0][2]); //가져온 인덱스 안의 인덱스 값
/*
const products = [
    {id:1, name:"텀블러", price:12000},
    {id:2, name:"에코백", price:18000},
    {id:3, name:"파우치", price:24000}
];
console.log(products[1].name); //key가 name이어서 .name으로 기술


//상품 목록의 이름만 출력
products.forEach((obj)=>{         //forEach는 값을 가져다만 쓸 때 사용(추가 되는게 없을 때)
    console.log(obj.name);
});
*/
/*
//유저리스트 출력
//출력 : {name}님은 {role}입니다
const users = [
    {name : '길동', role : "관리자"},
    {name : '민호', role : "학생"},
    {name : '수지', role : "학생"},
    {name : '지수', role : "팀장"}
];
users.forEach((say)=>{
    // console(say`${name}님은${role}입니다`);
    console.log(`${say.name}님은 ${say.role}입니다.`);
});
*/

//아래 배열 중에서 type이 notice인 데이터만
//notices 라는 배열에 저장하세요.
/*
const posts = [
    {title: "수업공지", type: "normal"},
    {title: "출석확인", type: "notice"},
    {title: "시험일정", type: "notice"}
];

const notices = posts.filter((data)=>{
    return data.type === "notice";
});
console.log(notices);
*/

/*map활용하기
//아래 이미지 배열의 데이터를 읽어서
//문자열 : <img src={url} alt={thumb}>
//배열 tags로 생성하세요.

const images = [
    {id:1, url:'img_01.jpg', thumb:'이미지1'},
    {id:2, url:'img_02.jpg', thumb:'이미지2'},
    {id:3, url:'img_03.jpg', thumb:'이미지3'},
];
const tags = images.map((obj)=>{
    return `<img src${obj.url} alt=${obj.thumb}>`;

});
    console.log(tags);
*/

/*filtet활용하기
//아래 items 데이터에서
//가격이 2만원 이하 상품만 골라서, 이름만 추출하여 새로운 배열로 만드세요.
//결과 : ['노트','펜']
const items = [
    {name:"노트", price:5000},
    {name:"펜", price:2000},
    {name:"가방", price:25000}
];

const products = items.filter((data)=>{   //2만원 이하라는 조건이 있는 값만 가져오기
    return data.price < 20000;
});
// console.log(products);
const result = products.map((data)=>{     //가져온 조건 값에서 name만 추출하기
    return data.name;
});
console.log(result);
*/
