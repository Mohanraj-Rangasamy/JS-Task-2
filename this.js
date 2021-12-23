
var person = {
    firstName :"Lishventh",
    lastName : "M",
    id : 2345,
    fullName : function() {
        return this.firstName+" "+this.id;
        }
};
document.getElementById("this").innerHTML = person.fullName();
