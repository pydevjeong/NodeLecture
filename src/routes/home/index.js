"use strict";

const express= require("express");
const router=express.Router();

const ctrl=require("./home.ctrl")

router.get('/',ctrl.output.home)
router.get('/login',ctrl.output.login)
router.get('/register',ctrl.output.register)

router.post('/login',ctrl.process.login)
router.post('/register',ctrl.process.register)

// router.get('/register',(req,res) => {
//   res.render("home/register")
// })

module.exports=router; //app.js가 router가 어디있는지 알수 있도록 내보내기
