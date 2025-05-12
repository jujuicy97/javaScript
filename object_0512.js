/***
 * 객체 : 하나의 변수에 다향한 정보가 포함된 자료형
 * 객체명 = {
 *  키:값
 *  키:값
 *  키:값
 * ...
 * }
 */
let book = {
    title: "자바스크립트",
    writer : "홍길동",
    pages : 300,
    pubDate : '2025-05-12'
}
console.log(book.title);  //book은 키, title은 값
console.log(book["title"]);