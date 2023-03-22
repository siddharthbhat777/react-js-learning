// normal function
function myFun(num) {
    return num * 2;
}

// arrow function
const myFun2 = (num) => {
    return num * 2;
};
// Alternate way
const myFun3 = num => num * 2;

console.log(myFun3(3));

// Note:
/* 
- 'this' keyword dosen't always refer to what you want.
- so in such cases arrow function keep it's context fixed and do not change unlike normal function
*/