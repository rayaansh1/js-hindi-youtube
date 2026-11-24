const name = "Ansh"
const repoCount = 50

//this is the oldest way to add a string not use in modernday JS 
console.log(name + repoCount + " value");

//string interpolation, you make an placeholders and inide you inject the varaible whichever you want 
// the value will be same the old way and this way to declare a string 
//  sting is an object it has key value pair 
console.log(`Hello my name is ${name} and my repo count is repoCount`);


// to decleare a string we use new syntax in which we use new key words where we you use object of js 
const gameName = new String ('anshsh')

// if you want to access the keys you can do that here we access the 4thposition cos it starts with 0 
console.log(gameName[3]);

// we can also access the prototype you run this command and yo will get the object whcih is empty {} but 
//its not empty 
console.log(gameName.__proto__);

// these are the methods
//find the total length of string 
console.log(gameName.length);

// to convert the string to uppercase
console.log(gameName.toUpperCase());

// to find the position of the charcter 
console.log(gameName.charAt(2));

// to find which character is on which position
console.log(gameName.indexOf('h'))

// we created a varible and then store in newString, we will  have to give start number and end number 
// the last charcater doesnt include here it only include between 0 to 3 
// you cannot give negative value here 
const  newString = gameName.substring(0,4)
console.log(newString);

// we can also give negative value and it will be start from reverse 
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//when you creat an input form on your website user unknowning add specil charcater 
// its removes the starting and last space 
const newStringOne = "   ansh    "
console.log(newStringOne);
console.log(newStringOne.trim());

// the above is for trim and the below is for replace 
// browser doesnt understand the sapce in url so it convert urn coding by adding %20
const url = "https://ansh.com/ansh%20choudhary"

// we just seee the trim value and now we will see the replace value 
// it change or replace in the url
console.log(url.replace('%20', '-'))

// it tells whether the word is there or not in the url if the words is there it would print true if not 
// it would print false 
console.log(url.includes('sundar'))
console.log(url.includes('ansh'))

// use this method split 
// if we want to convert the string to array based on - 
const gameNumber= new String ('anshsh- ansh ')
console.log(gameNumber.split('-'));


