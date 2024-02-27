// guess number with javascript
// create random number using Math.random()
// 0 - 0.9999
const randomNumber = Math.random();
console.log(randomNumber);

// to make decimal in rounded
// use Math.round or Math.floor
// Math.round, change decimal to nearest number 
// Math.round, 0.6 = 1, 1.4 = 1,
// Math.floor, change nearest number but down
// Math.floor, 1.4 = 1, 2.8 = 2
const randNumber1 = Math.random();
console.log(Math.round(randNumber1)); // only 0 and 1 bcs Math.random range 0 - 0.999

// how to make random number from 0 - 10 ?
// Math.random * with 10 ( number we want to range at )
let randNumber2 = Math.round(Math.random() * 10);
console.log(randNumber2);

// how to guess a number from range 0 - 10 ?
// 1st create comparison
const fixNum = 5;

// 2nd make condition for random number
// if the random number more than comparison number then ...
if(fixNum > randNumber2){
    console.log('number less than 5 ...4,3,2,1,0')
} else if(fixNum < randNumber2){
    console.log('number more than 5 ...6,7,8,9')
} else{
    console.log('this is correct number: 5!')
}

// to see value of random number
console.log(randNumber2);