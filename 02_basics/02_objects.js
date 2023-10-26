// OBJECT LITERALS

let myObj = {
    "name": 'Batman',
    country: 'America',
    work: 'superhero'
} 

// console.log(myObj.name);
// console.log(myObj["name"]);

myObj['name'] = 'Bruce Wayne' 
myObj.work = 'businessman'

// console.log(myObj);

// Object.freeze(myObj)  //Freeze function does not let you modify the object
// myObj.name = 'humza'
// console.log(myObj);

myObj.greeting = function(){
   // console.log('Hello world');
}

myObj.greetingTwo = function(){
    //console.log(`Hello ${this.name}`);
}
// console.log(myObj.greeting());
// console.log(myObj.greetingTwo());



const obj1 = {1:'a', 2:'b'}
const obj2 = {'name': 'humza', year: 2 }
const obj3 = {a:1, b:2}
const obj4 = Object.assign({},obj1,obj2,obj3)
const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

const user = {
    name: 'Azhar',
    university: 'Lu',
    course: 'Bcom',
    year: 1
}

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(user);

const marks = {
    discrete: 18,
    java: 10,
    DSA: 16,
   'cyber security': 20
}

const {discrete: maths} = marks

console.log(maths);