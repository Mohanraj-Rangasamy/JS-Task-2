//async and await 
//async
function myDisplayer(some){
    document.getElementById("async and await").innerHTML = some ;
}
async function myFunction(){return "Hello";}
myFunction().then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
)
//comparison b/w func and asyncfunc
function hello1() { return "Hello" };
hello();
console.log(hello1());

async function hello() { return "Hello" };
hello();
console.log(hello());
//let
let hello3 = async function(){
    return "Hello"
}
hello3();
console.log(hello3());

//arrow function
let hello4 = async Function => "Hellow";
console.log(hello4());

//await
async function Hallo(some){
    return await Promise.resolve("Hai");
    document.getElementById("await").innerHTML = Hallo;
}
Hallo().then(alert);

async function myDisplay(){

}

