const accountId = 1445
let accountEmail = "purus@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;



//accountId = 2  // not allowed due to const
accountEmail = "p@gmail.com"
accountPassword = "23468"
accountCity = "Asansol"

/*
  Prefer not to use var
  because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ])

