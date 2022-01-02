"use strict"

const id=document.querySelector("#id"),
name=document.querySelector("#name"),
psword=document.querySelector("#psword"),
confirmPsword=document.querySelector("#confirm-psword"),
regiBtn=document.querySelector(".regiBtn");


regiBtn.addEventListener("click",regi);

function regi() {
  if(!id.value) return alert("아이디를 입력하세요")
  if(psword.value!==confirmPsword.value){
    return alert("비밀번호 확인이 다릅니다.")
  }
    const req={
    id:id.value,
    name:name.value,
    psword:psword.value,
  }
  fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(req),
  })
  .then((res)=>res.json())
  .then((res)=>{
    if(res.success){
      location.href="/login";
    }else{
      console.log(res.msg);
    }
  })
  .catch((err)=>{
    console.error(new Error("회원가입 에러 발생"))
    //라우팅되는 서버가 없거나 그럴때 에러발생을 잡아준다.
    //new Error를 쓰면 Error: "로그인중 에러 발생",
    //쓰지않으면 그냥 "로그인중 에러 발생" 이라고 출력됨
  })
}