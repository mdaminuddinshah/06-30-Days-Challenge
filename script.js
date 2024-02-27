let correctAnswer = 0;
const totalQuestion = 3;

// create a question to answer ..
const question1 = prompt('What is our planet called ? ');
console.log(question1);

// create answer
const correct_answer1 = "EARTH";

// create conditionals for answer
if(question1.toUpperCase() === correct_answer1){
    console.log('You get it correct!');
    correctAnswer++;
} else {
    console.log('You get it wrong ...')
}

// question 2
const question2 = prompt('what is js means ?');

// answer 2
const correct_answer2 = 'JAVASCRIPT';

// create conditionals for question 2
if(question2.toUpperCase() === correct_answer2){
    console.log('You did great!');
    correctAnswer++;
} else {
    console.log('you get it wrong ...')
}

// question 3
const question3 = prompt('what is color of sky');

// answer 3
const correct_answer3 = 'SKYBLUE';

//  conditionals question 3
if(question3.toUpperCase() === correct_answer3){
    console.log('well done!');
    correctAnswer++;
} else {
    console.log('hmm.. you get it wrong')
}

let roundedPercent = Math.round((correctAnswer / totalQuestion) * 100);

console.log('You did correct', correctAnswer, 'answer of', totalQuestion, 'question');
console.log('your grade is ', roundedPercent.toString() + '%');