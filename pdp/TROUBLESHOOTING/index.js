// объект Error, который удобен для обработки ошибок
// любого вида (исключений и ожидаемых).
{
  const errorMessage = new Error("Not valid email");

  function validEmail(email) {
    return email.match(/@/) ? email : new Error("This email not valid ");
  }
  const email = "jane@doe.com";
  const validateEmail = validEmail(email);
  if (validateEmail instanceof Error) {
    console.error(`Error: ${validateEmail.message}`);
  } else {
    console.log(`Corect email: ${validateEmail}`);
  }
}
// Когда ошибка перехватывается, стек вызовов предоставляет полезную информацию
// для диагностики проблемы

{
  function a() {
    console.log("a: call b");
    b();
    console.log("a: ready");
  }
  function b() {
    console.log("b: call c");
    c();
    console.log("b: ready");
  }
  function c() {
    console.log("c: generate error");
    throw new Error("c error");
    console.log("c: ready");
  }
  function d() {
    console.log("d: call c");
    c();
    console.log("d: ready");
  }
  try {
    a();
  } catch (err) {
    console.log(err.stack);
  }
  try {
    d();
  } catch (err) {
    console.log(err.stack);
  }
}

// Конструкция try . . . catch . . . finally
// Также небезопасно освобождать ресурс в блоке catch, поскольку
// он не выполняется, если не будет ошибки.

console.log("Выводит в консоле ");
console.warn("Выводит в консоле со значком предупреждения ");
console.info("Выводит в консоле со значком информация ");
console.error("Выводит в консоле со значком ошибка ");
