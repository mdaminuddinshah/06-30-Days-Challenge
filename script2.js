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
// console.log(randNumber2);

// how to guess a number from range 0 - 10 ?
// 1st create comparison
const compNum = 5;

// 2nd make condition for random number
// if the random number more than comparison number then ...
let ranNum1 = Math.round(Math.random() * 10)
if(ranNum1 > compNum){
    console.log('more than 5 ..6,7,8,9')
} else if( ranNum1 < compNum){
    console.log('less than 5 ..4,3,2,1,0')
} else {
    console.log('correct, number is 5')
}

// how to check, how many times the guess take ??
// using while loop and increment operator

// SOMETHING NEED TO CHATGPT ABOUT let guess = 0 inside while loop went error
let guess = 0;
while(true){
    
    const num = 5;
    let ranNum2 = Math.round(Math.random() * 10)
    
    guess++;
    if(ranNum2 > num){
        console.log('the guess more than ..')
    } else if(ranNum2 < num){
        console.log('the guess less than ..')
    } else {
        console.log('this is correct: 5')
        break;
    }
}
// access how many guess it take to correct exact number
console.log('it takes', guess, 'times')
console.log(`it takes ${guess} times`)

// how to get a current date ?
let getDate = new Date();
document.getElementById('test').textContent = getDate

// how to make date more readable 
// common new Date == wed feb 23 2024 09:12:22 GMT+0800 (Malaysia Time)
// use toDateString() method
let getDate2 = new Date()
let formalDate = getDate2.toDateString()

document.getElementById('test').textContent = formalDate

// how to get time instead of date ?
// using toLocaleTimeString()
let getDate3 = new Date()
document.getElementById('test').textContent = getDate3.toLocaleTimeString();

// how to set timeout for date ?
// use setTimeout() method
// setTimeout, run once
setTimeout(()=>{
    document.getElementById('test').textContent = getDate3.toLocaleDateString()
}, 3000)

// how to make latest time and continue clicking ??
// use setInterval()
// setInterval, run repeatedly
setInterval(()=>{
    let getDate4 = new Date();
    document.getElementById('test2').textContent = getDate4.toLocaleTimeString();
}, 1000)



