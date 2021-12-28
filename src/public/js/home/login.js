"use strict"

const id=document.querySelector("#id"),
password=document.querySelector("#password"),
loginBtn=document.querySelector(".loginBtn")

loginBtn.addEventListener("click",login);

function login() {
  const req={
    id:id.value,
    psword:psword.value
  }

  
}