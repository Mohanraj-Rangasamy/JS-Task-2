//let leads referrence error
try{
carName = "volvo";
let carName = "audi";
}
catch (err){
    document.getElementById("hoistlet").innerHTML = err;
}
/*const leads syntex error
try{
bikeName = "yamaha";
const bikeName = "tvs" ;
}
catch (err){
    document.getElementById("hoistconst").innerHTML = err;
}*/
//var
x = 75;//assign 75 to x
var x; // declare x
document.getElementById("hoistvar").innerHTML = x;