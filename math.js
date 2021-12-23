//mathmethod
var myvalue = 78.6;

console.log(Math.round(myvalue));
//Math.ceil
console.log(Math.ceil(myvalue));
//Math.floor
console.log(Math.floor(myvalue));
document.getElementById("mathround").innerHTML = Math.round(myvalue);

//Math.random

let q = Math.random()*10;

console.log(q)

//min and max

var g = Math.max(1,4,5,6,7,3,8,9) ;

document.getElementById("mathmax").innerHTML = g ;

let a = Math.min(45,105,65,54);
let b = Math.max(55,6,78,98,34,2);

document.getElementById("mathmin").innerHTML = a + "<br>" + b;