//class method is kind of OOP that we can make a class
//so that we can declare another function into a class

class Hero{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
    if(this.power){
      return  this.power = power
    }
    else{
        return "I have no power"
    }
    }
}
const Boys = new Hero("Azim");
console.log(Boys);
console.log(Boys.getPower());