// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6) // adding 6 inro array
// // myArr.push(7) // adding 7 into array
// // myArr.pop() // removin last element of array

// // myArr.unshift(9) // put 9 at 1st place
// // myArr.shift() // remove 1st element

// // console.log(myArr.includes(9));  // if exist 9 in array it will ive true otherwise false
// // console.log(myArr.indexOf(3)); // index of elemnt if exist otherwise -1

// // const newArr = myArr.join() // adds all the element into a string

// // console.log(myArr);
// // console.log( newArr);


// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);









// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]  //using spread operator ...

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Purus"))
// console.log(Array.from("Purus"))
// console.log(Array.from({name: "purus"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));