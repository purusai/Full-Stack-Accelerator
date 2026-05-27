// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // adding 6 inro array
// myArr.push(7) // adding 7 into array
// myArr.pop() // removin last element of array

// myArr.unshift(9) // put 9 at 1st place
// myArr.shift() // remove 1st element

// console.log(myArr.includes(9));  // if exist 9 in array it will ive true otherwise false
// console.log(myArr.indexOf(3)); // index of elemnt if exist otherwise -1

// const newArr = myArr.join() // adds all the element into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);