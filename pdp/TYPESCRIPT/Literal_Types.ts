// Явно задавть значения переменным
let test2:"test"= "test"
type ActionType = "up" | "down"
// может использоваться ActionTypes
function Action(action:ActionType | IComplexACtion): number{
	switch(action){
		case 'up':
			return 1
		case 'down':
			return -1
		case action:
			return -1
		default:
			return 0
	}
}
interface IComplexACtion{
	s:string
}