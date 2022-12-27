"use strict";
// // arrays
// exports.__esModule = true;
var siblings = [2, 3, 4];
// // array of type of never
var heros = [];
// heros.push('gerald')
// // you cannot push anything cux the type was not anotated, and there was no initial value for type inference
var superHero = [];
superHero.push('mummy');
var userFile = [];
userFile.push({ name: 'emeka', age: 39 });
function doStuff(value) {
    var copy = value.slice();
    console.log("the first value of the arrray is ".concat(value[0]));
    // // you cannot change or mutate values of readonly
    value.push('gerry');
}
// // function that takes in only number arrays as an array element
function takeNum(num) {
    num.pop();
}
takeNum([[1, 3, 4], [3, 33,], [4, 5]]);
console.log();
