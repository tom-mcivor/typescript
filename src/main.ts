let stringArr = ['one', 'hey', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]
stringArr[0] = 'John'
stringArr.push('hey')
guitars[0] = 1984
guitars.unshift('Jim')
stringArr = stringArr
let test = []
let bands: string[] = []
bands.push('Van Halen')
// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]
// Objects
let myObj: object
myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {}
const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

exampleObj.prop1 = 'John'


let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}
console.log(exampleObj);

let jp: Guitarist = {
  active: true,
  albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
  return `Hello ${guitars.name.toUpperCase()}!`
}
  return 'Hello!'
}

console.log(jp);



// Enums
// "Ulike most TypeScript features, Enuns are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
