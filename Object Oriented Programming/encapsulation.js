//encapsulation process means that we cannot access a variable outside a class , if we use we can use only the variable name


class TigerSpeed{
    #speed = 100;
    constructor(name){
this.name = name;
    }
    speed(){
        console.log(`I am ${this.name}, I used to running at ${this.#speed} mph`);
    }
}
const royal = new TigerSpeed('bengal tiger')
royal.speed()
//console.log(royal.#speed);, result will show error.