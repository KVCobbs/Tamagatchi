const canvas = document.getElementById("sprite"); 
const context = canvas.getContext("2d");
const width = canvas.width = 350;
const height = canvas.height = 480; 
const frameWidth = 34;
const frameHeight = 100;
const xPostion = -50;
const yPosition = 60;
const scale = 14;

const spriteSheet = new Image();
spriteSheet.src = 'assets/images/spritesheet.png';

function animate() {
  context.drawImage(
    spriteSheet,
    0,
    0,
    frameWidth,
    frameHeight,
    xPostion,
    yPosition,
    frameWidth * scale,
    frameHeight * scale,
  )
}

function frame() {
  context.clearRect(0,0, width, height);
  animate();
  requestAnimationFrame(frame)
}

frame()

//let's create some food 
let avacado = 2;
let artichoke = 5;
let bagel = 8; 
let beer = -6;
let foods = [avacado, artichoke, bagel, beer,];


//Time to create poop 
// let poop = -10;

//look into webstorage as a way to mimic the storage 
//create a timer for poop to appear 
// const startTime = 5; //start time = 5minutes 
// let currentTime = startTime * 1000; //start time  * 1000 to represent seconds 

// setInterval(updateTimer, 1000)

// function updateTimer(){
//   const minutes = Math.floor(currentTime / 1000 );
//   let seconds = currentTime % 60; 
//   currentTime--;
// }

// updateTimer()

// function poop () {
//           let pooped = -10
//           this.health += pooped
//           console.log(this.health)
// }

//just trying to write an object out with this one 
let tamagatchi = {
    // Need to ask the boss about this 
    name: "Tama-chan",
    age: 5, 
    hunger: 50,
    health: 100,
        checkStats: function(){
          console.log(`${tamagatchi.name} is ${tamagatchi.age} years old, has ${tamagatchi.hunger} hunger and ${tamagatchi.health} health`)
          },
    feeding: function() {
        for (let i = 0; i < foods.length; i++) {
            //Thanks to weily I converted the foods elements into numbers using parseInt and then added 
            //resulting in the different values of fed according to the food and the hunger level 
            let gobble = parseInt(foods[i])
            this.hunger += gobble
            console.log(this.hunger)
            }
        },
        poop: function() {
          let pooped = -10
          this.health += pooped
          console.log(this.health)
        }
}

//I need to make the buttons 
//feeding
const feedButton = document.getElementById("feed");
feedButton.addEventListener("click", function() {
  //ok so to access a method you need the objectName.method
  tamagatchi.feeding();
});

const checkButton = document.getElementById("check");
checkButton.addEventListener("click", function() {
  tamagatchi.checkStats()
});

const poopButton = document.getElementById("clean");
poopButton.addEventListener("click", function() {
  tamagatchi.poop()
});

// //cleaning 
// const cleanButton = document.getElementById("clean");
// cleanButton.addEventListener("click", function(){
//   tamagatchi.cleaning();
// });


  // if (this.health <= 50 ) {
  //           console.log("It stinks in here")
  //         } else if (this.health < 20) {
  //           console.log("Do you plan to clean up my poop?")
  //         }
  //         //So originally I was just restating an piece of code. With this i am updating a my code 
  //         this.health -= 10 
  //         console.log(this.health)
  //       },

  //future idea to play with DSA 
  //adding a stack of food 