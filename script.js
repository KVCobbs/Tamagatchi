//let's create some food 
let avacado = 2;
let artichoke = 5;
let bagel = 8; 
let beer = -2
let foods = [avacado, artichoke, bagel, beer,];


//just trying to write an object out with this one 
let tamagatchi = {
    // Need to ask the boss about this 
    name: "Tama-chan",
    age: 10, 
    hunger: 50,
    health: 100,
    feeding: function() {
        for (let i = 0; i < foods.length; i++) {
            //Thanks to weily I converted the foods elements into numbers using parseInt and then added 
            //resulting in the different values of fed according to the food and the hunger level 
            let gobble = parseInt(foods[i])
            let fed = this.hunger + gobble
            console.log(fed)
            }
        }
        
};


//ok so to access a method you need the objectName.method


//I need to make the buttons 

 const feedButton = document.getElementById("feed");
console.log(feedButton)

feedButton.addEventListener("click", function() {
  //ok so to access a method you need the objectName.method
  tamagatchi.feeding()
});





