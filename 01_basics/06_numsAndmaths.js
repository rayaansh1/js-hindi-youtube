// Nums 

const score = 400
// console.log(score);

// for strictly define its a number use below 
const balance = new Number(100)
// console.log(balance);

// after this method the number will be converted to string 
// console.log(balance.toString());

// now this .length property also tell you the how many string are there so it will be 3 
// console.log(balance.toString().length);

// its tell how many fix you want after decimla means how many number you want after decimla
// here its 2 so it will give 100.00 
// console.log(balance.toFixed(2));
 
const otherNumber = 123.8966

// it tells you the precesion value
// if doesnt undestand makesure to read from mdn or google 
// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000

// it add comma to indian number system 
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Math library come default in JS 
//  M is capital in Math by default and when you runs it you will see its an object and its has a property 

console.log(Math);

// here abs means absolute value 
// it converts negative to positive 
console.log(Math.abs(-4));

// its not a property its a function 
// if you dont want to take a decimal value it round off the value 
console.log(Math.round(4.6));

// its controls which value would round off upper or lower 
// it chnages the upper value 
// celing mean zara sa bhi value 4 se jyada hua to will choose 5 as you see 4.2 converted into 5 
console.log(Math.ceil(4.2));

//it takes thelowest value even if you use 4.6 or 4.9 it will still chose 4 as lowest value opposite of ceil
// it chnages the lowest value 
console.log(Math.floor(4.9));

// if you want to calcuate the lowest value of array 
// tells the minimum value 
console.log(Math.min(4, 3, 6, 8));  


// tells the maximum value 
console.log(Math.max(4, 3, 6, 8));


// its a method 
// math.random value always comes between 0-1 mostly decimal like 0.52332322323, 08232233232 these two are just an example 
console.log(Math.random());

// when we multiply with 10 the value get shift 
// the value can stilll be 0 to avoid we all +1 to this 
//console.log((Math.random()*10) + 1);

// if we want the value to lowest we add math.floor also 
//console.log(Math.floor(Math.random()*10) + 1);


// we define a value 10 and 20 and now we want value between 10 and 20 
const min = 10
const max = 20

// now will add new  formulae here max - min and we add with +1 so we dont get the 0 value 
// but still while we print we get the value between 1-10 but we want the value from 10 not lest then 
// so we add +min here 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

