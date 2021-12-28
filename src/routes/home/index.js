"use strict";

const express= require("express");
const router=express.Router();

const ctrl=require("./home.ctrl")

router.get('/',ctrl.hello)
router.get('/login',ctrl.login)
router.post('/login',ctrl.login)

// router.get('/register',(req,res) => {
//   res.render("home/register")
// })

module.exports=router; //app.js가 router가 어디있는지 알수 있도록 내보내기
