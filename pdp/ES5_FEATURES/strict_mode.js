"use strict"

// Директива выглядит как строка: "use strict" или 'use strict'. Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.
function strict() {
    // Строгий режим на уровне функции
    "use strict";
    function nested() { return "И я тоже!"; }
    return "Привет! Я функция в строгом режиме! " + nested();
}
function notStrict() { return "Я не strict."; }
console.log(strict())
console.log(notStrict())
// Предполагая, что не существует глобальной переменной
// mistypedVaraible, эта строка выбросит ReferenceError
// из-за опечатки в имени переменной
mistypeVaraible = 17;