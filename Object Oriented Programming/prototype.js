//You may learn associations composition from Object Oriented Program
//design pattern, Gang of four design pattern - get in dofactory
function Cat(name){
    this.name = name;
}
Cat.prototype.talk = function (){
    console.log("mew mew");
}
const myCat = new Cat("Tiger")
console.log(myCat);
myCat.talk