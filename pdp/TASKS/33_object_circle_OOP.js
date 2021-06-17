// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.The circles constructed must have two methods getArea()(PIr ^ 2) and getPerimeter()(2PI * r) which give both respective areas and perimeter(circumference).
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        //PIr^2 
        return (Math.PI * Math.pow(this.radius, 2))
    }
    getPerimeter() {
        //2PI*r
        return (2 * Math.PI * this.radius)
    }
}
// Examples
let circy = new Circle(11)
console.log(circy.getArea());// Should return 380.132711084365
let circ = new Circle(4.44)
console.log(circ.getPerimeter());// Should return 27.897342763877365