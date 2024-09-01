let names:string="Ahmed" //name is reserved
let arr:[string,number]=['Ahmed Hashesh',22]
let num:number=22

console.log(arr)
let user1: User = {
    id: '1',
    name: 'Ahmed',
    age: 21,
    gender: "male",
    email: '',
  }
  let user2: User = {
    id: '2',
    name: 'Eslam',
    age: 12,
    gender: "male",
  }
  let user3: User = {
    id: '3',
    name: 'Aya',
    age: 24,
    gender: "female",
  }
  type User ={
    readonly id:string,
    name:string,
    age:number,
    email?:string,
    gender:Gender
  }
type Gender= "male"|"female"
console.log(user1.name)
console.log(user2.name)