// // turples are used to determine the other of an array, it is an array with restrctions

const user: Array<string | number | boolean> = ['gerry', 23, false]

// // the above code has no restriction to which element comes first in the array, this is where turples comes in
const Tuser: [string, boolean, number] = ['gerry', false, 33,]

// // you can equally use type to anotate your turples and then reference it
type Manager = [string, number]
const headOfice: Manager = ['33', 4]

// // with turples , you can explicitly mutate values and also (push, pop, shift , unshft, splice) in values to the array with types that are not specified in the turples as below

headOfice.push(true)

export {}