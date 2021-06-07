class Useri {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }


 printDetails(){
     console.log(this.username, this.password);
 }
}
let user1 = new Useri("parola22");
console.log(user1.password);
