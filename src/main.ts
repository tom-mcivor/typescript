const echo =  <T>(arg: T): T => arg 

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray)
  (arg) && arg !== null
}

console.log(isfalse);
console.log();
console.log();
console.log();
console.log();
console.log();

interface BoolCheck<T> {
 value: T,
 is: boolean,
}

const isTrue = <T>(arg: T): { arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: !!arg}
    
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false}
  }
  return { value: arg, is: !!arg }
}



console.log(isTrue(false));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

interface HasID {
  id : number
}

const processUser = <T extends HasID>(user: T): T => {

  // process the user with logic here
  return user
}



console.log(processUser);

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key])
}


const usersArray = [
 {
  "id": 1,
"name": "Lea"
 }
]

console.log(getUsersProperty(usersArray, "email"))

console.log(getUsersProperty());

class StateObject<T> {
  private data: T
  constructor(value: T) {
    this.data = value
  }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
// store.state = 12

const myState = new StateObject<(string|number|boolean)[]>([15])
myState.state = (['Dave'])













