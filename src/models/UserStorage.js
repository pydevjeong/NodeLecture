"use strict";

//Model 작업을 왜할까? Model 작업이란 기능을 모델화 시키는것 지금 이 파일처럼 원래
//다른 코드에 있던줄중 User에 대한 값들을 따로 빼서 private하게 관리해주기위해 객체지향 프로그래밍
//그래서 아래 UserStorage라는 클래스를 만들어서 관리한거
//실제로는 UserStorage안에 엄청나게 많은게 들어간다.
//그리고 로그인 값이나 요청은 DB를 사용하게 관리하기에 아래 작성한거는 Model이 뭔지 인지하고 생각해보면 된다.

// class UserStorage {
//    users={
//     id:["njh3421","나나","남"],
//     password:["1234","1111","3333"],
//   }
// }


class UserStorage {
  // 아래 #표시는 private 변수로 바꿔주는것임 -> 외부에서 접근 불가
  // 여기있는 값들은 DB를 사용할거임
   static #users={
    id:["njh3421","나나","남"],
    password:["1234","1111","3333"],
    name:["데브정","찌비","잡월드"],
  };
//이런 식으로 데이터를 은닉화하고 저장해줘야한다.
  static getUsers(...fields){
    const users=this.#users;
    const newUsers=fields.reduce((newUsers,field)=>{
      if(users.hasOwnProperty(field)){
        newUsers[field]=users[field];
      }
      return newUsers;
    },{})
    return newUsers;
  }
  /*
  static getUsers(){
    return this.#users;
  }
  */

  static getUserInfo(id){
    const users=this.#users;
    const idx=users.id.indexOf(id);
    const usersKeys=Object.keys(users) // => 유저의 key 값들만 배열로 [id,password,name]
    const userInfo = usersKeys.reduce((newUser,info)=>{
      newUser[info]=users[info][idx];
      return newUser;
    },{});

    return userInfo;
  }

  static save(userInfo){
    const users=this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.psword);
    return {success:true}
  }
}
/*
이런식으로 static 변수로 만들어버리면 home.ctrl파일에서 값을 알아내려고
console.log(UserStorage.users) 'UserStorage.users' 이부분이 잘 출력된다.
하지만 위처럼 static으로 안주면 undefined가 출력된다.
*/

module.exports=UserStorage;