// create a question to answer ..
const question1 = prompt('What is our planet called ? ');
console.log(question1);

const correct_answer1 = "EARTH";

if(question1.toUpperCase() === correct_answer1){
    console.log('You get it correct!')
} else {
    console.log('You get it wrong ...')
}