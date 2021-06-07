class User{
    constructor(username,password) {
      this.username = username;
      this.password = password;
    }
  }
  ​
  let nrDeUtilizatori = Number(prompt("Cati Utilizatori?"));
  let users = [];
  for(let i = 0; i < nrDeUtilizatori; i++){


  let user = new User("username"+i , "password"+i);
  users.push(user);
  }
  console.log(users);