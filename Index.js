// Variables and data types
var name = 'prosper'
let age = 17
var weight = 50.3
let userName = "SS-AMAZON"
const complexion = 'dark'
let isAlive = true

console.log(name);
console.log(age);
console.log(isAlive);
// String operations
// these are operations that can be carried out on a string.
let word = "hello world"
//operations
//getting elements
console.log(word)
console.log(word[0])

//length of a string
console.log(word.length);

//string casting
console.log(word.toUpperCase());
console.log(word.toLowerCase());

//checking if an element is in a string(getting element position)
console.log(word.indexOf('h'))

//concatenation
let greet = 'hope you are all doing well'
console.log(word + greet)
console.log(word + ' ' + greet);

//appending: adding more elements to a string
greet += "today"
console.log(greet);

//slicing or filtering a string
console.log(word.slice(2,7))

// replacing in a string
console.log(word.replace('world','school'))

//arithmetic operation
let num1 = 40
let num2 = 2

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1**num2)
console.log(num1/num2)
console.log(num1%num2)

num1 = num1 + 10
num1 += 10
console.log(num1)

//conditions
let num3 = 100
let num4 = 50

if (num3 > num4){
    console.log('true')
}
else{
    console.log('false')
}

//logical operations
// || -> or, && -> and, ! -> not
if (num3 > num4 || num3 == 20) {
    console.log('or logical operator executed')
}
else {
    console.log('or logical operator did not execute')
}
if (num3 > num4 && num3 == 20) {
    console.log('and logical operator executed')
}
else {
    console.log('and logical operator did not execute')
}
//else if
if (num3<num4) {
    console.log ('first condition')
}
else if(num3 == 5) {
    console.log('second condition')
}
else if (num4 < num3) {
    console.log('third condition')
}
else {
    console.log('default condition')
}
// a loop is an action that happens repeatedly until a condition is satisfied
// it can also be referred to as iteration
console.log('good afternoon')
console.log('good afternoon')
console.log('good afternoon')
console.log('good afternoon')
console.log('good afternoon')
console.log('good afternoon')
console.log('good afternoon')

// the for loop
// the for loop takes in three things
// 1. the variable declaration and initialization
// 2. The condition meant to be satisfied
// 3. The increment or decrement
for (let i = 0; i<10; 1++) {
    console.log("good afternoon",i)
}
console.log('/n')

for (let i = 0; i<10; 1++) {
    console.log("good afternoon",i)
}
// the loop  variable is declared outside
// it takes in inly the condition
// the last thing in the while loop is the incerement or decrement
let x = 0
while (x < 10) {
    console.log("good afternoon")
    x++
}
// Arrays
// Arrays are a special type of variable 
// that can store more than one value,separated by commas
let students = ['obi', 'ada', 'john']
// operations
//getting array elements
console.log(students);
console.log(students[0])

// length of an array
console.log(students.length);

// adding elements
students.push('david')
students.unshift('phil')
console.log(students)

// replacing elements
students[0] = 'gerald'
console.log(students)

// functions
// a function is a block of code created for code reusability
// It would not execute until called
// There are local and global variable
// Variables declared inside a function are local variables
// Variables declared inside a function are global variables
// there are functions that accept parameters.
// parameters are used to design a functions and they might take value when a function is called.
// there are functiions that have a return keyword used to make a local variable or value, available outside a function.
// return is used to end a function

function addNum(){
    let num5 = 10
    let num6 = 2
    let res = num5 + num6
    console.log(res);
}
console.log()
addNum()
function addNumTwo(num5,num6){
    let res = num5 + num6
    console.log(res);
}
addNumTwo(100, 40)
addNumTwo(20,10)
addNumTwo(10,15)

//function with return
function getDetails() {
    let fname = 'chucky'
    let lname = 'cheese'
    let fullName = fname + ' ' + lname
    return fullName
}
let name = getDetails()
console.log(name);