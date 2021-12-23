//To check array count
var Name = ["mohan", "soma", "Licha", "Emman"];
var Paname = ["Rangasamy", "chinnaraj", "vijayakumar", "kellappan"];

console.log(Name.length);
//to find second array
console.log (Name[1]);
//to find last array
console.log(Name[Name.length-1]);

//document.getElementById("arraylength").innerHTML = Name[1];
document.getElementById("arraylength").innerHTML = Name[3];

const cars = ["Badmini", "Ambasidor", "Maruthi800", "Altok10", "Honda"];
console.log(cars.length);
document.getElementById("arraylength1").innerHTML = cars;

//Array with const variable
const bikes = [] ;
bikes[0] = "Yamaha Fz";
bikes [1] = "Yamaha RX100";
bikes [2] = "Royal enfield";
bikes [3] = "Jupiter";


console.log(bikes[1]);
document.getElementById("arrayconst").innerHTML = bikes [2];
//to combine multiple array into single
var mixedname = Name.concat (Paname);
console.log(mixedname);
document.getElementById("combinearray").innerHTML = mixedname;


//unshift values to first
bikes.unshift("Unicorn");
//console.log(bikes);
document.getElementById("unshiftarray").innerHTML = bikes;

//shift values to first
Name.shift();
console.log(Name);
document.getElementById("shiftarray").innerHTML = Name;

//push in last
Paname.push("Nithya")
console.log(Paname);
document.getElementById("pusharray").innerHTML = Paname;

//pop remove in last
Name.pop();
console.log(Name);
document.getElementById("poparray").innerHTML = Name;

//reverse method
console.log(bikes.reverse());

document.getElementById("reversearray").innerHTML = bikes;

//sort method

console.log(bikes.sort());
document.getElementById("sortarray").innerHTML = bikes;

//slice method
console.log(Paname.slice(4));
document.getElementById("slicearray").innerHTML = Paname.slice(4);







