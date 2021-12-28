"use strict";

const express= require("express");
const router=express.Router();

const ctrl=require("./home.ctrl")

router.get('/',ctrl.output.home)
router.get('/login',ctrl.output.login)
router.post('/login',ctrl.process.login)

// router.get('/register',(req,res) => {
//   res.render("home/register")
// })

module.exports=router; //app.js가 router가 어디있는지 알수 있도록 내보내기
