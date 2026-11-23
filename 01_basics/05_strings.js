const name = "Ansh"
const repoCount = 50

console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is repoCount`);


const gameName = new String ('anshsh')
console.log(gameName[3]);
console.log(gameName.__proto__);

// these are the methods
//find the total length of string 
console.log(gameName.length);

// to convert the string to uppercase
console.log(gameName.toUpperCase());

// to find the index of string 
console.log(gameName.charAt(2));

// to find the postion of the string 
console.log(gameName.indexOf('h'))

// the last charcater doesnt include here 
const  newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// its removes the starting and last space 
const newStringOne = "   ansh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ansh.com/ansh%20choudhary"

// it change or replace the url
console.log(url.replace('%20', '-'))

// it tells whether the word is there or not in the url 
console.log(url.includes('sundar'))
console.log(url.includes('ansh'))

console.log(gameName.split('-'));