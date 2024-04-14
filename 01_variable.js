const accountId = 122334
let accountEmail = "aryan@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 121212 //not allow
accountEmail = "aman@google.com"
accountPassword = "12678"
accountCity = "kanpur"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState] ); 

// prefer not to use var
// because of issue in block scope and functional scope