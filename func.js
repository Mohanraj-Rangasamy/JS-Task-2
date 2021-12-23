//Named function
function multiplication (c,d){
    return c*d;
}
console.log(multiplication(5,4));
document.getElementById("namedfunction").innerHTML = multiplication(5,4);

//Anonymous function
var add= function(a,b){
return a+b;
}
console.log(add(6,7));
document.getElementById("anonymous").innerHTML = add(6,7);

//immediately invoked function
var divide =(function(e,f){
    return e/f;
})(10,2);
console.log(divide);
document.getElementById("immediatelyinvoke").innerHTML = divide;

//call back function
function myDisplayer(some){
    document.getElementById("callback").innerHTML = some;
}
function myFirst(){
    
    myDisplayer("Hello");
}
console.log('welcome to myFirst')
function mySecond(){
    myDisplayer("Hi");
}
console.log('welcome to mySecond')

mySecond();
myFirst();

/*date function
var checkdate = new Date();
console.log(checkdate.getDate())
console.log(checkdate.getMonth())
console.log(checkdate.getFullYear())

var myDate = checkdate.getDate()
var myMonth = checkdate.getMonth()
var myYear = checkdate.getFullYear()
var fullDate = myDate + (myMonth+1) + myYear*/

const d = new Date();
d.setMonth(11);

document.getElementById("setdate").innerHTML = d;





