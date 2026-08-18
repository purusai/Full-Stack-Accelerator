// const score = 100

// const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString().length) //2
// console.log(balance.toFixed(2)) // 100.00
// console.log(balance.toFixed(1)) // 100.0



const number = 123.8976

console.log(number.toPrecision(4)) //123.9

const hundreds = 1000000000000
console.log(hundreds.toLocaleString("en-IN"))


// ---------------Math----------------------


// console.log(Math)
// console.log(Math.abs(-4)) // 4
// console.log(Math.abs(4)) // 4


// console.log(Math.round(4.6))  //5

// console.log(Math.ceil(4.2)) // 5

// console.log(Math.floor(4.7)) // 4

// console.log(Math.min(2, 5, 6)) // 2



console.log(Math.random())
console.log((Math.random()*10) + 1) //
console.log(Math.floor((Math.random()*10) + 1))


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

