/// function parameters type anotation is necesary unlike that of variables that can be inferred

const loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return `the usets name is ${name} with an active emmail of ${email}`
}

const user = loginUser('gerry', 'g@g.com')

// // returnin gmore than one type fro a function

function getVal(myVal: string): number | string {
    let val = typeof myVal === 'number' ? 4 : 'codeerror  200'
    return val
}

console.log(getVal('gerry'));


export { }