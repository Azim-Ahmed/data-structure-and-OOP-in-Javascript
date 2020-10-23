class PenDrive{
    constructor(capacity, color, price){
        this.capacity = capacity;
       this.color = color;
this.price = price;
    }
}

const ignite = new PenDrive('16GB', 'red', 1200);
const awkward = new PenDrive('16GB', 'red');
console.log(ignite);
console.log(awkward);