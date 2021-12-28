"use strict";

const hello = (req,res) => {
  res.render("home/index")
}

const login=(req,res) => {
  res.render("home/login");
}

module.exports={
  hello,
  login
};
//여기서 object는 key와 value가 한쌍인데 이렇게 쓰면 오류가 왜 안날까?
//이유는 key를 하나만 썼을 때는 object에서 key:key로 저장을 해준다.