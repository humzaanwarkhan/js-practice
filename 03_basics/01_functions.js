function addTwoNum(num1, num2){
    return num1 + num2
}

const result = addTwoNum(10,20)
// console.log(result)

function loginMessage(username){
    if(!username){
      console.log('Please enter username');
      return
    } 
    return `${username} just logged in`
}

// console.log(loginMessage());

const obj1 = {
    name: 'humza',
    course: 'Btech'
}

function handleObject(anyObject){
    // console.log(`The name is ${anyObject.name} and the course is ${anyObject.course}`)
}

handleObject(obj1)

const newArray = [10, 20, 30, 40]

function getArray(giveArray){
    return giveArray[3]
}

// console.log(getArray(newArray))

const score = [3, 6, 10, 2]

function getScore(giveScore){
   return giveScore[0]
}

// console.log(getScore(score));

const message = (name)=> {
      if (name=="humza") {
        console.log(`${name} is a good boy`);
      }
      else{
        console.log(`${name} is a bad boy`);
      }
}
// message('ram')

const vote = (age) => {
    if(age>=18){
        console.log('You can vote');
    }
    else{
        console.log('You cannot vote');
    }
}

// vote(10);

const Percentage = (one,two,three,four) =>{
     console.log('Your percentage is ' + ((one+two+three+four)/400)*100 + '%');
}
Percentage(80, 80, 80, 80)