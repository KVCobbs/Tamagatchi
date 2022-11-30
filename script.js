//let's create some food 
let avacado = 2;
let artichoke = 5;
let bagel = 8; 
let beer = -6;
let foods = [avacado, artichoke, bagel, beer,];

//Time to create poop 
let poop = -10;

//create a timer for poop to appear 


//just trying to write an object out with this one 
let tamagatchi = {
    // Need to ask the boss about this 
    name: "Tama-chan",
    age: 5, 
    hunger: 50,
    health: 40,
    feeding: function() {
        for (let i = 0; i < foods.length; i++) {
            //Thanks to weily I converted the foods elements into numbers using parseInt and then added 
            //resulting in the different values of fed according to the food and the hunger level 
            let gobble = parseInt(foods[i])
            this.hunger += gobble
            console.log(this.hunger)
            }
        },
        cleaning: function(){
          // if (this.health < 50) {
          //   console.log("It stinks in here")
          // }
          this.health -= 10 
          console.log(this.health)
        },
};

//I need to make the buttons 
//feeding
 const feedButton = document.getElementById("feed");
feedButton.addEventListener("click", function() {
  //ok so to access a method you need the objectName.method
  tamagatchi.feeding();
});

//cleaning 
const cleanButton = document.getElementById("clean");
cleanButton.addEventListener("click", function(){
  tamagatchi.cleaning();
});





