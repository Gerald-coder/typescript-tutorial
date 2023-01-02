const office = {
    lname: 'police',
    fname: 'station',
    location: 'obinze',

    set fullname(value) {
        const part = value.split(' ')
        this.lname = part[0]
        this.fname = part[1]
    },
    get fullname() {
        return `he was taken to  is ${this.lname} ${this.fname} at ${this.location}`
    },

}
office.fullname = 'owerri west'
console.log(office.fullname);