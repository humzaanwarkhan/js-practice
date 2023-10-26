const myArr = [2,5,8,4,1]
const newArr = new Array("humza", 2, true, null)

// console.log(myArr[3]);
// console.log(newArr[0]);

const slice1 = myArr.slice(0,2)
const push1 = myArr.push('humza')
// console.log(slice1)
// console.log(push1);
// console.log(myArr.includes(9))

const marvelHeroes = ['Captain America', 'Iron Man', 'Vision']
const dcHeroes = ['Batman', 'Superman', 'Aquaman']

const allHeroes1 = marvelHeroes.push(dcHeroes)
const allheroes2 = marvelHeroes.concat(dcHeroes)
const allHeroes3 = [...marvelHeroes, ...dcHeroes]

// console.log(allHeroes1);
// console.log(allheroes2);
// console.log(allHeroes3);

const newArray = [2,3,4, [1,9,0], 12, 7, 4, [1,2,3[3,2,1]]]
const newArrayFlat = newArray.flat(Infinity)
// console.log(newArrayFlat[10])

console.log(Array.isArray('Humza'));
console.log(Array.from('humza'));

const arr2 = Array.from('Humza')
console.log(Array.isArray(arr2));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));


