//Task
//Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
//Гласными являются «a», «e», «i», «o», «u».
findVowels = (string) => {
    //g--глобальное сопоставление
    //i--игнорирование регистра при сопоставлении
    let allVowelsInString = string.match(/[aeiou]/gi);
    console.log(allVowelsInString)
    if (allVowelsInString === null) {
        return 0
    } else {
        return allVowelsInString.length
    }

}
console.log(findVowels('ffeejfejpwopvcxcvmwewoaposjkfvmsd'))//8 гласных