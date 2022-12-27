// // union typs alows you to asign more thsn one type to a value

const score : number | string = '44' 

type User = {
    name: string
    emial: string
}

type Admin = {
    username: string
    id: number

}

let gerald : User | Admin = {name: 'gerald', emial: 'g.com', username: 'gerry', id: 45}
gerald = {username: 'emy@dev.io', id: 34}
// // i:e, gerald can either br an admin or a mere user or both

let gerry : User & Admin = {name: 'gerald', emial: 'g.com', username: 'gerry', id: 45}
gerald = {username: 'emy@dev.io', id: 34, name: 'gerald', emial: 'g.com'}
// // or gerry must be both using the & operator


function getDbId(id:number|string){
    // perform some db operations
    console.log(`the db id is ${id}`);
    let myId = typeof id === 'number'? id.toFixed(2): id.toUpperCase()
    return myId
    
}

getDbId('45')
getDbId(45)

// // union with arrays

const data: (string | number | boolean)[] = [1, 2,'gerry' , true]

// // making literal static type
let pi : 3.142 = 3.142


let seat: 'aisle' | 'middle' | 'window'
// // in this case, seat cannot have any other value aise from the three annotated above 