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

//I was thinking of adding a drop down menu to hold my buttons instead of having them 
// just splayed out and ugly. I might add that today. I really dont wanna do the poop function lmao 

// let avacado = 2;
// let artichoke = 5;
// let bagel = 8; 
// let beer = -6;
// let foods = [avacado, artichoke, bagel, beer,];


// function randomtest (max) {
//   //create food with values 
//   //randomize the values of food. 
//   //return a random food value 
//   console.log(Math.floor(Math.random() * max));
// }

// randomtest(10)

//I want to get one food from the array of food 
//or is an object of food better? 


// //Time to create poop 
// // let poop = -10;

// //look into webstorage as a way to mimic the storage 
// //create a timer for poop to appear 
// // const startTime = 5; //start time = 5minutes 
// // let currentTime = startTime * 1000; //start time  * 1000 to represent seconds 

// // setInterval(updateTimer, 1000)

// // function updateTimer(){
// //   const minutes = Math.floor(currentTime / 1000 );
// //   let seconds = currentTime % 60; 
// //   currentTime--;
// // }

// // updateTimer()

// // function poop () {
// //           let pooped = -10
// //           this.health += pooped
// //           console.log(this.health)
// // }

// let orange = 5;
// let candy = -3;
// const food = [orange, candy];;

//week 1: work on the gobble feature
//week 2: work on making the ui more presentable 
//week 3: poop function 
//week 4: adding happiness to food 


//food object 
//reference points to hunger 
// let orange = 5;
// let candy = -2;
// let steak = 15;
// let iceCream =6;
const food = {
orange: 5,
candy: -2,
steak: 15,
iceCream: 6,
tea: 1,
fish: 10,
}


//make a queue with a list of nodes 
//so when I talk to Jason on wednesday I will work on making the queue with nodes 
//but for now I am making my node prototype and will implement it another time 
// class Node {
//   constructor(value) {
//     this.value = value 
//     this.next = null
//     this.prev = null
//   }
// }

//first make the object that stores the elements of the queue and two variables to track head and tail 
class Queue {
  constructor() {
    //so I imagine I can just make elements refrence food. Last time I tried this I got undefined 
    this.elements = {};
    this.head = 0
    this.tail = 0
  }
  //so now we work on enqueue which is adding to the elements object at the end of the queue 
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++; 
  }
  //dequeue to remove an element from the front of the queue 
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head]
    this.head++
    return item
  }
  //peek method to access the element at the front of the queue 
  peek () {
    return this.elements[this.head]
  }
  //length of the queue 
  get length () {
    return this.tail - this.head 
  }
  get isEmpty() {
    return this.length === 0;
  }
}
//had to remind myself this code works because elements is an object itself even if it's empty rn
//and on line 119 this.elements[bracket notation anything] is referencing that we wanna get the value for the key this.head in the elements object 

// //lets make a new queue and test it 
// let q = new Queue();

// for (let i = 1; i <= 7; i++){
//   q.enqueue(i);
// }

// // console.log(q.peek());//returned 1 
// // console.log(q.length); //returned 7
// //dequeue all elements 
// while(!q.isEmpty()) {
//   console.log(q.dequeue())
// }

//ok now testing new queue 
let foodQueue = new Queue();
foodQueue.enqueue(food["orange"])
foodQueue.enqueue(food.candy)
foodQueue.enqueue(food.steak)
foodQueue.enqueue(food.iceCream)
foodQueue.enqueue(food.fish)

//ok so now that I've populated my food. I am going to use forEach in order to access the keys 
// Object.values(foodQueue).forEach(val => {
//   console.log(val + " this is it")
// })

console.log(foodQueue)




//for resupply:
//how many foods does the player start with: 4 
//When the player consumers dequeue but the second it dequeue then enqueue another one which is a random key in the object 
//stimulate the rng(random number generator)



//just trying to write an object out with this one 
let tamagatchi = {
    name: "Tama",
    age: 5, 
    hunger: 50,
    health: 100,
    happiness: 100,
    description: "an alien that you have to take care of.",
    //these are the states 
        isHungry: true,
        wantsToPlay: false,
        needsAttention: true, 
        sleeping: true,
        //these are the behaviours  
        checkStats: function(){
          console.log(`${tamagatchi.name} is ${tamagatchi.age} years old, has ${tamagatchi.hunger} hunger with ${tamagatchi.health} health and ${this.happiness} happiness and is ${this.description}`)
          },
          speak: function(){
            if(tamagatchi.happiness >= 90) {
              return("Wow life is great");
            } else if (tamagatchi.happiness >= 75){
              return("I'm alright. I guess")
            } else {
              return('This shit sucks')
            }
          },
    feeding: function() {
      // let orange = 5;
      // let candy = -3;
      // const food = [orange, candy];;
          if(food === orange){
            console.log(this.hunger += gobble)
            console.log(this.happiness += 1)
          }
          if (food === candy){
            this.hunger += candy
            this.happiness += 6
          }
              }, 
            play: function() {
                let soccer = 5
                let chess = 2 
                const activities = [soccer, chess];
                if(activities === soccer){
                  this.happiness += soccer 
                }
                if(activities === chess){
                  this.happiness += chess
                }
            },
        poop: function() {
          let pooped = -10
          if(pooped == true) {
          console.log(this.health += pooped);
          }
        }
}

//I need to make the buttons 
//check stats 
const checkButton = document.getElementById("check");
checkButton.addEventListener("click", function() {
    tamagatchi.checkStats()
});

const speakButton = document.getElementById("speak");
speakButton.addEventListener("click", function() {
const speechBubble = document.getElementById('talking').innerText = tamagatchi.speak()
  return speechBubble
})

//feeding
const feedButton = document.getElementById("feed");
feedButton.addEventListener("click", function() {
  //ok so to access a method you need the objectName.method
  tamagatchi.feeding();
});

//playing 
const playButton = document.getElementById("play"); 
playButton.addEventListener('click', function() {
  tamagatchi.play();
})

//cleaning
const poopButton = document.getElementById("clean");
poopButton.addEventListener("click", function() {
  tamagatchi.poop()
});

//poop(so I'm thinking this poop is a helper function to assis with the cleaning function)
let poopImg = document.getElementById("poop")

//have poop appear on screen for a few seconds and then disappear 
// then link the dissapearance to the clean button 



//  for (let i = 0; i < foods.length; i++) {
//             //Thanks to weily I converted the foods elements into numbers using parseInt and then added 
//             //resulting in the different values of fed according to the food and the hunger level 
//             let gobble = parseInt(foods[i])
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

  // for(let i = 0; i < foods.length; i++){
  //         let gobble = parseInt(foods[i])
  //         let randomizer = Math.floor(Math.random() * foods)
  //         this.hunger += gobble
  //         console.log(this.hunger)
  //       // console.log(Math.floor(Math.random() * max))
  //             }

