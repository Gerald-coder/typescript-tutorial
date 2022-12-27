// // enums are ysed by developers to defined a set of constants , enums must have an initializer

enum Gery {
    name = 'gerald',
    person = 2,
    people,
    siblings = 5
}
console.log(Gery.siblings);

// // enums generate way lots of code in the compiled js file, to reduce the ambiguity of the code , you have to put the const keyword at the begining of the enum , e.g
const enum Gerry {
    name = 'gerald',
    person = 2,
    people,
    siblings = 5
}
console.log(Gerry.siblings);
// this genrates less code in the js file than the above code 
export { }