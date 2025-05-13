/******<증감연산자 활용하여 계산해보기> 
        let num1 = 20;  
        let num2 = 30;
        let all;

        num1++;  //21
        ++num1;  //22
        console.log(num1);

        all = num2++;  //all(30), num2(31)
        all = ++num2;  //all(32), num2(32)
        console.log(num2);
        */
        
/******<비교연산자 활용하여 계산해보기>
        let a = 5;
        let b = 10;
        let c = 5;
        let f = "10";

        all = a>b;      //f
        console.log(all);
        all = a<b;      //t
        console.log(all);
        all = a<=b;     //t
        console.log(all);
        all = b==f;     //t
        console.log(all);
        all = a!=b;     //t
        console.log(all);
        all = b===f;    //f
        console.log(all);
        */

/******<논리연산자 활용해보기>
       let a = 10;
       let b = 20;
       let c = 30;
       let d = 40;

       all = a>b || b>=c || c<d;  //f || f || t 하나라도 참이 있으면 true
       console.log(all);
       */

/******<삼항연산자 활용하기>
       1. 참과 거짓 나타내기
       let a = 17;
       let b = 5

       let all = a>b ? "javacsript" : "hello";
       //해석 : let all이라는 변수에 a>b의 조건이 성립될때, 참이면 javascript, 그렇지 않으면 hello 출력
       console.log(all);
       //2. 적정 체중 구하기. 적정 체중 = (신장-100)*0.9

       let height = 185;
       let weight = 87;

       let normal = (height-weight)*0.9
       console.log(normal);
       */

/******<제안문 활용하여 문제 풀기>
       //2-1. 체중이 88 미만이면 "저체중" 출력, 88이상이면 "적정체중", 100이상이면 "과체중" 출력 

       const weight = 87;
        if(weight<88){
        console.log("저체중");
       } else if(weight>=88 && weight<100){
        console.log("적정체중");
       } else{
        console.log("과체중");
       }
        */