"use strict";

const users={
  id:["njh3421","나나","남"],
  password:["1234","1111","3333"],
}


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
    const id=req.body.id,
    password=req.body.password

    if(users.id.includes(id)){
      const idx=users.id.indexOf(id);
      if(users.password[idx]===password){
        return res.json({
          success:true,
        })
      }
    }
    return res.json({
      success:false,
      msg:"로그인에 실패하셨습니다."
    })
  }
}

module.exports={
  output,process
};
//여기서 object는 key와 value가 한쌍인데 이렇게 쓰면 오류가 왜 안날까?
//이유는 key를 하나만 썼을 때는 object에서 key:key로 저장을 해준다.