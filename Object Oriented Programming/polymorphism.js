class Circle {
    constructor(radius){
        this.radius = radius
    }
area(){
    return Math.PI * Math.pow(this.radius , 2)
}
}

class Rectangular {
    constructor(height, width){
        this.height = height
        this.width = width
    }
area(){
    return this.height * this.width;
}
}
class Triangle {
    constructor(base, width){
        this.base = base
        this.width = width
    }
area(){
    return this.base * this.width;
}
}

const shapes = [new Circle(5), new Rectangular(5, 15), new Triangle(12,22)]
for (let index = 0; index < shapes.length; index++) {
    const element = shapes[index];
        console.log(element.area());
}