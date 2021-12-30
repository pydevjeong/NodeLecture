"use strict"

const id=document.querySelector("#id"),
password=document.querySelector("#password"),
loginBtn=document.querySelector(".loginBtn")

loginBtn.addEventListener("click",login);

function login() {
  const req={
    id:id.value,
    password:password.value
  }

  fetch("/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(req),
  })
  .then((res)=>res.json())
  .then((res)=>{
    if(res.success){
      location.href="/";
    }else{
      console.log( res.msg);
    }
  })
  .catch((err)=>{
    console.error(new Error("로그인중 에러 발생"))
    //라우팅되는 서버가 없거나 그럴때 에러발생을 잡아준다.
    //new Error를 쓰면 Error: "로그인중 에러 발생",
    //쓰지않으면 그냥 "로그인중 에러 발생" 이라고 출력됨
  })
}