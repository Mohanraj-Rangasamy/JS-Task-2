//to string()
var mynum = 56;
var result = mynum.toString();
console.log(mynum.toString());
document.getElementById("numbertostring").innerHTML = result;

//to fixed()
const mycurrency = 56.78965;
console.log(mycurrency.toFixed(2));
console.log(mycurrency.toFixed(1));

document.getElementById("numbertofixed").innerHTML = mycurrency.toFixed(2);

