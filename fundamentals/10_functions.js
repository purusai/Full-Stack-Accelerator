
// function sayMyName(){
//     console.log("P");
//     console.log("U");
//     console.log("R");
//     console.log("U");
//     console.log("S");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("purus"))
// // console.log(loginUserMessage("purus"))


// function calculateCartPrice(val1, val2, ...num1){    // here ... is used as rest operator not spread operator
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "purus",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));














______________Scopes____________________



// //var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// // console.log(a);
// // console.log(b);
// // console.log(c);


// function one(){
//     const username = "purus"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// // one()

// if (true) {
//     const username = "purus"
//     if (username === "purus") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }












// const user = {
//     username: "purus",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }


// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// // console.log(this);

// // function chai(){
// //     let username = "purus"
// //     console.log(this.username);
// // }

// // chai()

// // const chai = function () {
// //     let username = "purus"
// //     console.log(this.username);
// // }

// const chai =  () => {
//     let username = "purus"
//     console.log(this);
// }


// // chai()

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "purus"})


// console.log(addTwo(3, 4))


// // const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach()






//_____________________________________________________________________


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
