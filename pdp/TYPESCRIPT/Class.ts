class ExampleClass {
	//private доступно только в этом классе
	//public доступно у экземпляров класса и его наследников
	//protected  экземпляры класса не могут получать это поле но зато при наследованнии передается это поле
	//readonly можно только читать но не записывать
	private	x:number;
	public y:number;
	constructor(x:number,y:number) {
		this.x=x;
		this.y=y;
	}
	private func(){
		this.x=10
	}
	a(){
		this.y=10
	}
}
const example= new ExampleClass(0,0);
class EtendExampleClass extends ExampleClass   {
	z:number
	constructor(x:number,y:number,z:number) {
		super(x, y)
		this.z=z
	}
	// можно переопределять
	a(){
		this.y=13
	}
}
class StaticTest {
	// static можно обращаться к этому полю через класс
	// не создавая инстансы от этого класса
	static c = "Static"
	static test(){
		return 4
	}
}
let c= StaticTest.c
let test1 = StaticTest.test()

// Абстрактные классы нужны лишь для того чтобы от них наследовались
// нельзя создать инстанс от Абстрактного класса
abstract class AbstractClass {
	myMethod(){

	}
}
class ExtendAbstractClass extends AbstractClass{
	// можно создавать инстансы от наследуемого класса 
}
let abstrClass = new ExtendAbstractClass

interface IIMplementsInterface{
	test:()=>number
}
class ImplementsClass implements IIMplementsInterface {
	test(){
 		return 0
	}
}