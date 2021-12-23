//concate without space()
var x = "Mohanraj";
var y = "Lishventh";
var result = x.concat(y);
console.log(result);
document.getElementById("stringconcatewos").innerHTML = result;

//concate with space()
let z = "Rangasamy";
let z1 = "Gomathi";
let resultt = z.concat(" ",z1);
console.log(resultt);
document.getElementById("stringconcatews").innerHTML = resultt;

//upper and lower case

const Namee = "athibanmathav";
console.log(Namee.toUpperCase());
//console.log(Namee.toLowerCase());
document.getElementById("stringuplo").innerHTML =Namee.toUpperCase();

//split
let helloo = "How are you doing today?";
const myarray = helloo.split(" ");
document.getElementById("stringsplit").innerHTML = myarray ;

console.log(myarray);

let dude = "karthi";
const myname = dude.split("");

console.log(myname);

//slice
var newval = ["Manoj", "ram", "lakchu","sathosh"];

var mynamee = newval.slice(1,4);
console.log(mynamee);
document.getElementById("stringslice").innerHTML = newval.slice(1,4);

//substring

let great = "alwaysgreat";
let result3 = great.substring(3);
console.log(result3);
document.getElementById("stringsubstring").innerHTML = result3;

//replace

let got = "Lovely";
console.log(got.replace("Lovely","great"))

document.getElementById("stringreplace").innerHTML = got.replace("Lovely","great")

//includes

const move = "To hell";

console.log(move.includes("Mohanraj"));

document.getElementById("stringincludes").innerHTML = move.includes("To hell")

//startswidth

var more = ("money");
var result = more.startsWith("money");
var result31 = more.startsWith(8,"money");

console.log(result);
console.log(result31);

//endswith

var love = "Live";
var rasult = love.endsWith("Live")

console.log(rasult);
