// // type alias

type USer = {
    name: string
    email: string
    isActive: boolean
}

function createMyUser(user: USer) {

}
createMyUser({ name: '', email: '', isActive: true })

type account = {
    name: string
    email: string
    readonly isFunded: boolean
    readonly customers: string[]
    creditCard?: number
    // // readonly values cannot be changed 
}

const myAccount: account = { name: 'gerald', email: 'g@g.com', isFunded: true, customers: ['gerry', 'emy', 'dika'] }

// myAccount.isFunded = false
myAccount.customers.push('emeka')
console.log(myAccount.customers);

// //extending a type
type google = {
    id: string
}

type meet = {
    meetId: number
    getMeeting(name: string): string
}
type googleAccount = account & google & meet & {
    passcode: string
}

const googleID: googleAccount = {
    id: 'GERRY',
    meetId: 23,
    name: 'emy',
    email: 'gerry@g.com',
    isFunded: true,
    creditCard: 55,
    passcode: '44',
    customers: ['client', 'client2'],
    getMeeting(nm: '33') {
        return `meeting id is ${googleID.meetId}`
    },


}
export { }