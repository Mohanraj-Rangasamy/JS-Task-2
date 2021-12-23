//New array some odd
const num = [2, 4, 8];
const odd = (Element)=>Element%3 === 0;

console.log(num.some(odd));


var array1 = [1, 3, 4, 6, 8, 12];
var even = (Element) => Element%2 === 0;

console.log(array1.some(even));

document.getElementById("arraysome").innerHTML = array1.some(even) ;

//new array every
let numbers = [5, 9, 8, 15, 25, 28];
const Name1 =numbers .every(myfuncion);
function myfuncion(value, index, array){
    return value < 4 ;
}
console.log(Name1);
document.getElementById("arrayevery").innerHTML = Name1 ;

//For each()
var flow = [6, 10, 5, 15, 19];
let txt = "";
flow.forEach(myfuncion);
function myfunction(value, index, array) {
    txt += value + "<br>";
}
console.log(txt += flow + "<br>");
document.getElementById("arrayforeach").innerHTML = txt;

/*forEach Const
const fruits = ["mango", "orange", "banana"];
let text = "";
fruits.forEach(myfuncion);
function myfunction(item, index ){
    text += index + item;

}
document.getElementById("arrayforeachfru").innerHTML = text ;*/

//array filter()
const ages = [15, 23, 18, 12, 9, 54, 26, 17];

function checkadult(age){
    return age >= 18;
}
document.getElementById("arrayfilter").innerHTML = ages.filter(checkadult);
