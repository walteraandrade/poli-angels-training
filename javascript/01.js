//Intro 
// console.log('Hello World!') 


//Variables
// const foo = 10;
// const boo = '10';

// let voo;
// var example;

// console.log(foo, boo);

//Arrays
// const numberArray = [1, 2, 3, 4, 5];

// const stringArray = [`one ${numberArray}`, 'two', 'three', 'four', 'five'];

// const mixedArray = [1, 'two', 3, 'four', 5];

// const firstIndexInNumberArray = numberArray[0];
// // const result = numberArray.findIndex('3')

// console.log(stringArray)
//Comparison operators

// const foo = 10
// const boo = 12
// console.log(foo != boo);

// For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log('done');

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log('done');

// While loop
// let i = 0

// while(i < 5) {
//   console.log(i)
// }

// If else 

// const password = '123456@';

// if (password.length >= 8) {
//   console.log('This password is strong enough!')
// } else {
//   console.log('This password has an @')
// } 


// Functions
  // a: definition:
// function sum() {
// 	console.log(2 + 2)
// }

// const speak = function () {
//   console.log('hello')
// }

// const bark = (barkSound) => {
//   console.log(barkSound)
// }


  // b: function call/invoke:
// sum()
// bark('hoof')

  // c: callback funcionts
// const numbers = [1, 2, 3, 4, 5]
// const printNumber = (number) => console.log(number * 2)
// numbers.forEach(printNumber)

// Objects 


const pikachu = {
  name: 'Pikachu',
  health: 100,
  atk: 30,
}

// const user = {
//   name: 'Rubens',
//   age: 60,
//   job: 'investor',
//   email: 'rubens@poliangels.com'
// }

const charmander = {
  name: 'Charmander',
  health: 100,
  atk: 30
}

const thundershock = (attacker, defender) => {
  console.log(`${attacker.name} attacks ${defender.name}. ${defender.name} now has ${defender.health - attacker.atk} health!`)
};

thundershock(pikachu, charmander);



