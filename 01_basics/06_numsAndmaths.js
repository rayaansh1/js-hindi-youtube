const score = 400
// console.log(score);

// for strictly define its a number use below 
const balance = new Number(100)
// console.log(balance);

// after this method the number will be converted to string 
// console.log(balance.toString());

// now this .length property also tell you the how many string are there so it will be 3 
// console.log(balance.toString().length);

// its tell how many fix you want after decimla means how many number you want fater decimla 
// console.log(balance.toFixed(1));
 
const otherNumber = 123.8966

// it tells you the precesion value
// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000

// it add comma to indian number system 
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);

// it converts negative to positive 
console.log(Math.abs(-4));

// if you dont want to take a decimal value it round off the value 
console.log(Math.round(4.6));

// its controls which value would round off upper or lower 
// it chnages the upper value 
console.log(Math.ceil(4.2));

// it chnages the lowest value 
console.log(Math.floor(4.9));

// tells the minimum value 
console.log(Math.min(4, 3, 6, 8));  

// tells the maximum value 
console.log(Math.max(4, 3, 6, 8));


// need better explanantion
console.log(Math.random());
//console.log((Math.random()*10) + 1);
//console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

