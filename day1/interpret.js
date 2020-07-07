'use strict';

// example
let example = "I'm the example!";
console.log(example);

// 1.
console.log(hello);                                   
var hello = 'world';   
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';                           

// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// function test(){
//   needle = 'magnet';
//   console.log(needle);} // needle is 'magnet'
// test(); // this will return 'magnet'
// 

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 
// function print(){
//   brendan = 'only okay';
//   console.log(brendan); // brendan is 'only okay'}
// brendan = 'super cool'
// console.log(brendan); // brendan is 'super cool'

// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 
// function eat(){
// var food =
// console.log(food); // food is undefined
// food = 'chicken'
// food = 'half-chicken';
// console.log(food); // food is 'half-chicken'
// food = 'gone';}
// console.log(food); // food is 'chicken'
// eat(); // 'half-chicken'

// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// just looking at this threw my own internal errors because mean 

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre =
// function rewind(){
// var genre =
// genre = "disco" <- global
// genre = "rock" <- function scope
// genre = "r&b" <- function scope
// rewind(); <- logs rock and r&b within the function invocation 
// console.log(genre) <- genre is disco


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = <- global scope
// function learn(){
// dojo =
// var dojo = 
// dojo = "san jose"; <- global
// dojo = "seattle" <- function scope
// dojo = "burbank" <- function scope
// console.log(dojo); // logs san jose
// learn(); // logs seattle and burbank
// console.log(dojo); // logs san jose


// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// the predictions were generally correct, I edited incorrect predictions based on output