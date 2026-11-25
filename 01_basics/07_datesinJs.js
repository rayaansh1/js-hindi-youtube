// Dates

// in JS date object respresnet a single moment in time 
//  the time is jan 1st 1970 where the date has been start calculating when declar in js 
// date usually calculate in milli seconds when we declare the date object the long string appear

let myDate = new Date()
console.log(myDate);

// we try to convert the date into string
console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//if you want to creat a specific date 

// here months starts with 0 cos of array so we tok 0 not in the moddle to show month 
// let myCreatedDate = new Date(2023, 0, 23)

// here we want more detail so we add 5,3 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// when you write mm dd yy month starts with 01 in the nmiddle  
// let myCreatedDate = new Date("2023-01-14")

//MM/DD/YY 
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// when we want exact time stams when we design the quiz when design polls who has answer fast 
// so that you make them winner in such situation we use time stamps 
// amd when we will run it we get long digit which is mili second and from this mili second we want to bring the vlaue 
//thats bit complicated 
let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// now when you run the command here you would get exact command and cos date is object you wouuld say 
//.get time 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// date itself an object 
let newDate = new Date()
console.log(newDate);

// when you want a date or month 
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

