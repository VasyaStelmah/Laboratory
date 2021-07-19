// для одинаковых фугкций только с разнимы типами переменных
// используются generic

// function logTime1(num:number):number {
// 	console.log(new Date())
// 	return num
// }
// function logTime2(str:string):string {
// 	console.log(new Date())
// 	return str
// }
function logTime3<T>(num:T):T {
	console.log(new Date())
	return num
}
logTime3<string>('STRING')
logTime3<number>(1234)
// на вход может быть число
// а выводится строка
interface IMyInterface{
	transform : <T,F>(a:T)=> F
}