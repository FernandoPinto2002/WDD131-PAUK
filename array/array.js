//  arrays.js
// const steps = ["one", "two", "three"];

// const listTemplate = (step) => {


   
//     return `<li>${step}</li>`;  
// }
// const stepsHtml = steps.map(listTemplate)
// document.getElementById("myList").innerHTML = stepsHtml.join();

// const letters = ['A', 'B', 'A']

// const lettersNumbers = letters.map(letter => {
// let points = 0;
//         if (letter === 'A'){
//             return points = 4;
//         }
//         else if (letter === 'B'){

//             return points = 3;
//         }
//         return points

// });

// const sum = lettersNumbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// const average = sum/ lettersNumbers.length;
// const roundedAverage = average.toFixed(2);

// console.log('Total: ', sum);
// console.log('Average: ', roundedAverage)
// const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
// const maxLength = 6;

// const newFruits = fruits.filter(fruit => fruit.length <= maxLength );

// console.log(newFruits)

const numbers = [12, 34, 21, 54];

const luckyNumber = 21;

let luckyIndex= numbers.indexOf(luckyNumber)

console.log(luckyIndex)