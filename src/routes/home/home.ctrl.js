"use strict";

const User = require("../../models/User.js");
// const UserStorage=require("../../models/UserStorage.js")

const output={
  home: (req,res) => {
    res.render("home/index")
  },
  login: (req,res) => {
    res.render("home/login");
  }
}

const process={
  login:(req,res) => {
    const user =new User(req.body);
    const resposne=user.login();
    return res.json(resposne);

    /* 간단한 구현
    // const id=req.body.id,
    // password=req.body.password

    // // const userStorage=new UserStorage();
    // // console.log(userStorage.users);

    // const users= UserStorage.getUsers("id","password");
    // //원래 이런식으로 외부파일에 다이렉트로 접근할수 없어야한다.-> UserStorage users부분에서 계속
    // //하지만 데이터를 받아와서 로그인의 성공여부에 대한 로직을 확인해야하기에 UserStorage에 메서드를 만든다
    
    // const response={};
    // if(users.id.includes(id)){
    //   const idx=users.id.indexOf(id);
    //   if(users.password[idx]===password){
    //     response.success=true;
    //     return res.json(response);
    //   }
    // }
    // response.success=false;
    // response.msg="로그인에 실패하셨습니다."
    // return res.json(response);
    */
  }
}

module.exports={
  output,process
};
//여기서 object는 key와 value가 한쌍인데 이렇게 쓰면 오류가 왜 안날까?
//이유는 key를 하나만 썼을 때는 object에서 key:key로 저장을 해준다.

