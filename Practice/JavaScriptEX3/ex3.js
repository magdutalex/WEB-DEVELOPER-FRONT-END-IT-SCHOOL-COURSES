let animal1 = {
    name: "Aki",
    type: "Dog",
    age: 4,
    race: "Shiba Inu",
    speak: function(){
        console.log("Bark, Bark, Bark !")
    },
    howOldIam: function(){
        console.log("5 ani");
    
    },
    details: function (){
        console.log("Type:{Dog} Name:{Aki} Age:{5} Race:{Shiba Inu}");
    },
    myFriendIs: function(){
        console.log("Aki");
    },
    amIYoungerThanFriend: function(){
        if(animal1.age < animal2.age){
            console.log("True")
        }
        else{
            console.log("False")
        }
    }
      
    

}

animal1.speak();
animal1.howOldIam();
animal1.details();

let animal2 = {
    name: "Biiiird",
    type: "Parrot",
    age: 5,
    race: "Lovebird"
  }
let friend = animal1;
friend.myFriendIs();
friend.amIYoungerThanFriend();
console.log(friend);




