// // arrays

let siblings: Array<number> = [2, 3, 4]

// // array of type of never
const heros = []
// heros.push('gerald')
// // you cannot push anything cux the type was not anotated, and there was no initial value for type inference

const superHero: string[] = []
superHero.push('mummy')

type User = {
    name: string
    age: number

}

const userFile: User[] = []
userFile.push({ name: 'emeka', age: 39 })

function doStuff(value: ReadonlyArray<string>) {
    const copy = value.slice()
    console.log(`the first value of the arrray is ${value[0]}`);

    // // you cannot change or mutate values of readonly
    // value.push('gerry')

}

// // function that takes in only number arrays as an array element
function takeNum(num: number[][]) {
    num.pop()
}
const print = takeNum([[1, 3, 4], [3, 33,], [4, 5]])

export { }