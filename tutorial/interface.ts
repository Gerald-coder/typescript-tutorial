// // interfaces, these are concerned with the structures of the object, they can be called weak classes

interface User{
    name: string
    email: string
    readonly dbId: number
    googleId: number
    startTrial: () => string
    getCoupon(couponname: string, value: number): number
    

}

// // interface can also be reopened unlike type, i:e, adding more vlues to the interface
interface User {
    githibToken: string
}

const Emy : User = {name: 'emy' , email: 'e@m.com' , dbId: 33, googleId: 32, githibToken: 'githubsubs',
    startTrial : () => {
        return 'trial started'
    },
    getCoupon(name: 'reactCourse', val: 9){
        return 44
    }
} 
// Emy.dbId = 33  // this cannot be done because the dbId is marked as a readonly and  the value can't be changed


