let num1 = 8;
let num2 = 5;
if (num1 < num2) {
    console.log(num1, num2 + "den kicikdir");
} else if (num1 == num2) {
    console.log(num1, num2 + "bereberdirler");
} else {
    console.log(num1, num2 + "den buyukdur");
}

let user = "admin";
switch (user) {
    case "admin":
        console.log("Siz adminsiz");
        break;
    case "istifadeci":
        console.log("Siz istifadeciniz");
        break;
    case "qonaq":
        console.log("Siz qonaqsiz");
        break;
    default:
        console.log("daxil olun");
}

let number = 6;
if (number % 2 == 0) {
    console.log(number, "cutdur");
} else if (number % 2 == 1) {
    console.log(number, "tekdir");
} else {
    console.log("deyer 0");
}

let numberOpr = 4;
let strngnum = "4";
console.log(numberOpr == strngnum);
console.log(numberOpr === strngnum);

let numvalue = 9;
let numvalue2 = 10;
console.log(numvalue !== numvalue2);

let valuenum = 5;
let valuenum2 = 10;
console.log(valuenum < valuenum2);
console.log(valuenum > valuenum2);

let username = "Turkan";
let nameuser = username ?? "Anonim";
console.log(nameuser);

let username2 = null;
let nameuser2 = username2 ?? "Anonim";
console.log(nameuser2);

var numberr = 3;
var numberr2 = 3;
console.log(numberr !== numberr2);

var password = 2004;
var password2 = 2004;
console.log(password && password2);

var plus = 2 > 5;
var plus2 = 2 < 5;
console.log(plus && plus2);

var logic = true;
var logic2 = false;
console.log(logic || logic2);

var mynumber = 8;
console.log(mynumber > 0, "eded musbetdir");
console.log(mynumber % 2 == 0, "eded cutdur");


let userName = "Admin";
let passwordUser = "2004";
let myuserName = "Admin";
let mypasswordUser = "2004";
if (userName === myuserName && passwordUser === mypasswordUser) {
    console.log("melumatlar dogrudur");
} else if (passwordUser === mypasswordUser) {
    console.log("sifre sehvdir");
} else if (userName === myuserName) {
    console.log("istifadeci adi sehvdir");
} else {
    console.log("melumatlar sehvdir");
}


let numswitch = -5;
switch(true){
    case (numswitch < 0):
        console.log( numswitch, "menfidir");
        break;
        case (numswitch == 0):
            console.log("sifirdir");
}