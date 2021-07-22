// при строчных нужно явно указыват значения
enum EnumString {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right ='Right'
}
// При числовых перечислениях будут числа последовательные для enum
enum EnumNumber { 
	one=1,
	two,
	three,
	four
}
// Перечисления из разных типов
enum MixEnumNumberString {
	Yes = 1,
	// No = 'No',
	Func = calcEnum()
}
function calcEnum(){
	return 2
}
function enumNumber(objNumbers:EnumNumber) {
	switch (objNumbers) {
		case EnumNumber.one:
			return 1;
		case EnumNumber.two:
			return 2;
		case EnumNumber.three:
			return 3;
		case EnumNumber.four:
			return 4;
		default:
			// эта переменная никогда не примет значение
			const a: never = objNumbers
	}
}