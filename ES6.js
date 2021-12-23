//Arrow function
//const x = function(x , y ){
 //   return x * y;
//}
//function x(5, 6);

const x1 = (z, z1) => z * z1;
document.getElementById("arrowfunction").innerHTML = x1(5, 8);

//function hello(username){
    //return 'How are you?'
//}
//console.log (hello("mohan"));

let grow = (userrname) => 'How are you?';
console.log(grow("mohann"));

document.getElementById("arrowfunction1").innerHTML = grow("mohann") ; 

//js class

/*class Bus {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
const myBus = new Bus("toyota", 2015);
document.getElementById("jsclass").innerHTML = myBus.name +" "+ myBus.year;*/

class Lorry {
    constructor(name, model){
        this.name = name;
        this.model = model;
    }     
}
const myLorry = new Lorry("nylon", 2018);
document.getElementById("jsclass1").innerHTML = myLorry.name +" "+myLorry.model;

class Hitachi{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
}
const myHitachi = new Hitachi("tatamotors", 2019);
document.getElementById("jsclass2").innerHTML = myHitachi.name+" "+myHitachi.model;

//JS promise
const mypromise = new Promise(function(myResolve,myReject) {
    setTimeout(function(){myResolve("I Hate you!!"); }, 3000);
    });
mypromise.then(function(value){
    document.getElementById("jspromise").innerHTML = value ;
});

//default paramater
function myfunction(x,y = 10){
    return x+y
}
document.getElementById("parameters").innerHTML = myfunction(8);

//Rest Parameter

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  console.log(sum(1,2,3));

  console.log(sum(1,2,2,3,4,5));

  /*call and apply
  function Movies (moviename,rating){
      this.moviename = moviename;
      this.rating = rating
  }
  function tele (moviename:any, rating:any){
      this.year = year;
  }
  var hello = new tele ('jilla','9');
  console.log(hello.moviename);*/
  