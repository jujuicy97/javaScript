        //1번) 버튼 정보를 가져오기 - **가져오면 객체(object)로 저장됨
        const befbtn = document.querySelector("main > button:nth-child(1)");   
        befbtn.disabled = true; //버튼 비활성화
        const aftbtn = document.querySelector("main > button:nth-child(3)");
        //2번) console.log(btnElem); //제대로 가져왔는지 확인
        const imgElem = document.querySelector("img");
        // console.log(imgElem); //제대로 가져왔는지 확인
        // console.log(typeof(imgElem)); //가져온 정보의 타입
        // console.dir(imgElem); 

        let count = 1;
        //3번) 불러온 버튼을 누르는 설정하기
        befbtn.addEventListener("click",()=>{
        //1번) 이미지2로 바뀌어야 함
        //2번) 1->2->3->4->5 실행 중지(반복되는 함수 사용해야함)
        //함수를 사용할 때, 변수를 btnElem안에 선언하면 {}안에 사용하면 안됨(변수가 한 번 실행되고 바로 없어지니까!) 
            aftbtn.disabled = false;
            
            if(count<5){    
             count++; //++1로 생각해서 앞에 더해야져야 함
                if(count === 5){
                befbtn.disabled = true;
            }
        }
            console.log(count);
            imgElem.src = `./images/img-${count}.png`;
        });

        //aftbtn 다시 활성화 시키기
        aftbtn.addEventListener("click",()=>{
            befbtn.disabled = false;
        // 5->4->3->2->1 실행 중지(반복되는 함수 사용해야함)
            if(count>1){
                count--;
                if(count === 1){
                aftbtn.disabled = true;
            }
        }
            console.log(count);
            imgElem.src = `./images/img-${count}.png`;
        });