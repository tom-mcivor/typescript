"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray)(arg) && arg !== null;
};
console.log(isfalse);
console.log();
console.log();
console.log();
console.log();
console.log();
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: !!arg };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(isTrue(false));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser);
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Lea"
    }
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty());
class StateObject {
    constructor(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Dave']);
