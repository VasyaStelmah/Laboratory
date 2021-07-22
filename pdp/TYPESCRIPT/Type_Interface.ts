type ObjectType = {
	x: number,
	y:number
}
type DefineKeyof ={
	x:number, 
	y:number
}
// типы можно создавать включая уже сохданные типы
type AddObjectType = ObjectType & {
	z:number
}
type stringOrNumber = string | number;
function print(object:ObjectType){

}
// Рекомендуется максимально использовать интерфейсы
interface IObjectType {
	x: number,
	y:number
}
// интерфейсы могут наследоваться от другого
interface IExtendObjectType extends IObjectType {
	z: number
}
// интерфейсы можно создавать с одинаковыми названиями
// и тем самым добалять в уже существующий типы переменных
interface IEqual{
	a:number
}
interface IEqual{
	b:number
}
//---------------EXAMPLE
interface IInfo{
	desc:string,
	isActive:boolean
}
interface ITags{
	name:string,
	value:number
}
interface IExampleObj {
	userId:number,
	id:number,
	title:string,
	info:IInfo,
	tags:ITags[]
}
let obj:IExampleObj = {
	"userId":1,
	"id":1,
	"title": "TITLE",
	"info": {
		"desc":"DESCRIPTION",
		"isActive":true
	},
	"tags":[
		{
			"name": "MY NAME",
			"value": 1000
		}
	]
}