class Animal{
    static category = "Dog"
    location = "dhaka"
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1, animal2) {
        if (animal1.speed > animal2.speed) {
            return `${animal1.name} is faster`
        }
        return `${animal2.name} is faster`
    }
}


//we can access any kind of value from a class if there is no static sign , besides if we use static we can get this value from class name component , if we wanna get static value from constructor , this answer will be undefined
const myRat = new Animal('Rat', 12)
const myDog = new Animal('Dog', 13)
// console.log(myRat.category);
// console.log(Animal.category);
// console.log(myRat);
// console.log(myRat.location);
// console.log(Animal.location);
console.log(Animal.compare(myRat, myDog));