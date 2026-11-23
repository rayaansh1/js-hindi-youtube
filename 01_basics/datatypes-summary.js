// datatype has been categorized into two ways first how datas are stores in memeory and second how you access it 

//  Primitive
// these are call by value when we copy it from sonewhere its orginal data doesnt show the refrence 
// of the memory inka copy karke humein milta hai and any changes made there unke copy mein changes 
// hote haain 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// directly refrence alloacte kiya jata hai 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack(primitive)   ,                      heap (Non- Primitive)

// stack memory is used when you decleare the variable and  you only get copy of it 

// the memory use in heap you get the refrence original value whatver you changes the chnage will 
// in original value 


let myYoutube = "anshanand.com"

let  anotherName =myYoutube
anotherName = "rayaansh.com"

console.log(anotherName);
console.log(myYoutube);

let userOne = {
email:"user@google.com",
upi: "ray@ybl"

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);











