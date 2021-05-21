// ---------- Selecting elements -------------
// elements — это живая NodeList коллекция.
// То есть, она автоматически обновляется, когда элементы с таким же name добавляются/удаляются из документа.
// name — это значение поля  name элемента(элементов).

let divById = document.getElementById("playground");
let up = document.getElementsByName("up");
let h1 = document.getElementsByTagName("h1");
let pByClassName = document.getElementsByClassName("text");
let div = document.querySelector("#playground");
let p = document.querySelectorAll(".text");

// в комментариях указаны текущие результаты
const resultsTask1 = {
  divById, // null
  up, // NodeList []
  h1, // HTMLCollection []
  pByClassName, // HTMLCollection []
  div, // null
  p, // NodeList []
};

// console.log("resultsTask1 >", resultsTask1);

// =========================
// TODO / Исправить
// Привести в порядок структуру дома (добавить необходимые селекторы, id, classNames) в html документе,
// чтобы инструкции, описанные выше, были в рабочем состоянии (не возвращали null или пустые массивы/коллекции)
// =========================

// ----------- Traversing elements ------------
// Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.
for (var i = 0; i < document.body.childNodes.length; i++) {
  let resultsTask2 = document.body.childNodes[i];

  // console.log("resultsTask2 >", { resultsTask2 });
}

// =========================
// TODO / Исправить
// 1. Заменить 'var' на 'let', объяснить разницу между этими способами объявления переменных
// 2. Вывести в консоли список/коллекцию только уникальных нод для body, для текущей структуры документа (после правок по первой задаче)
// =========================

// =========================
// TODO / Исправить
// 1. Заменить 'var' на 'let', объяснить разницу между этими способами объявления переменных
// 2. Вывести в консоли список/коллекцию только уникальных нод для body, для текущей структуры документа (после правок по первой задаче)
// =========================

// ---------- Manipulating elements -------------

ol.before("before"); // вставить строку "before" перед <ol>
ol.after("after"); // вставить строку "after" после <ol>

let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
ol.prepend(liFirst); // вставить liFirst в начало <ol>

let liLast = document.createElement("li");
liLast.innerHTML = "append";
ol.append(liLast); // вставить liLast в конец <ol>

// elem.insertAdjacentHTML(where, html); // Я закомментировал эту строчку, т.к. дальнейший код не выполняется -> 'Uncaught ReferenceError: elem is not defined', нужно разобраться
// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку.
// Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».

// =========================
// TODO / Исправить
// 1. elem - не определен, исправить ошибку
// 2. в данном документе часто используется 'innerHTML', есть и другие схожие методы, такие как - 'innerText' и 'textContent'
// сделать по одной задачи для каждого из упомянутых методов, и определить в чем разница
// =========================

// div.insertAdjacentHTML("beforebegin", "<p>перед elem.</p>");
// div.insertAdjacentHTML("afterbegin", "<p>внутрь elem, в самое начало.</p>");
// div.insertAdjacentHTML("beforeend", "<pвнутрь elem, в конец.</p>");
// div.insertAdjacentHTML("afterend", "<p>после elem</p>");

// =========================
// TODO / Исправить
// Не понятно, что тут происходит, либо код не работает (нужно привести в порядок, сделать рабочим + есть ошибки, тоже поправить)
// (добавь комменты что делают эти инструкции)
// Я закомментировал эту реализацию, т.к. дальнейший код не выполняется из за ->
// 'Uncaught TypeError: Cannot read property 'insertAdjacentHTML' of null', нужно разобраться
// Ознакомиться с материалом - Troubleshooting JavaScript errors: как работать с ошибками, как их определить и какие ошибки бывают
// Немного похожая статься тут (нужно поверхностно разобраться) ->
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_went_wrong
// =========================

p_inner_HTML.innerHTML =
  "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

// Получаем ссылку на элемент, перед которым мы хотим вставить sp1
var sp1 = document.createElement("span");
var sp2 = document.getElementById("childElement");

// Получаем ссылку на родителя sp2
var parentDiv = sp2.parentNode;

// Вставляем sp1 перед sp2
parentDiv.insertBefore(sp1, sp2);

const resultsTask3 = {
  p_inner_HTML,
  sp1,
  sp2,
  parentDiv,
};

console.log("resultsTask3 >", resultsTask3);

// setTimeout(() => div.remove(), 1000);

// =========================
// TODO / Исправить
// Пример не рабочий! Нужно исправить
// Общий фидбэк по примеру - немного скучный, нужно добавить ему смысла, желательно реализовать что-то подобное на событии onClick какого-либо элемента
// + добавить комментарий
// =========================

// --------- Working with Attributes -------------

// console.log('input.getAttribute("checked")', input.getAttribute("checked"));
// console.log(
//   'input.setAttribute("checked", "hidden")',
//   input.setAttribute("hidden", true)
// );
// console.log('input.hasAttribute("hidden")', input.hasAttribute("hidden"));
// console.log(
//   'input.removeAttribute("hidden")',
//   input.removeAttribute("checked")
// );

// =========================
// TODO / Исправить
// трудно читается / я все закомментировал, чтобы не запускалось автоматически и без конца )
// Желательно присваивать к уникальным переменным функции, чтобы можно было проще вызвать и точнее проверить в консоли, что происходит
// И подобные примеры желательно тоже делать осмысленно, используя события: MouseEvents/MouseScrollEvent/FocusEvent/InputEvent или Event
// для того чтобы можно было явно вызвать метод и проверить работоспособность  изменение
// =========================

// --------- Manipulating Element’s Styles -------------

// Если мы присваиваем что-то elem.className, то это заменяет всю строку с классами.
// Иногда это то, что нам нужно, но часто мы хотим добавить/удалить один класс.
ManipulatingStyles.className = "ManipulatingStyles";

// =========================
// TODO / Исправить
// Желательно добавить интерактивности, допустим:
// при клике на этот же элемент, добавляется этот атрибут со свойством
// при вторичном клике, атрибут со свойством удаляется
// можно текущую функцию не править, но ниже в комментариях я опишу как улучшить текущую реализацию...
// =========================

// Методы classList:
// elem.classList.add/remove("class") // – добавить/удалить класс.
// elem.classList.toggle("class") // – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") // – проверка наличия класса, возвращает true/false.

// =========================
// TODO / Исправить
// код - не рабочий / я все закомментировал
// если как конспект - то ОК!
// ниже в комментариях я опишу как исправить текущую реализацию...
// =========================

ManipulatingStyles.classList.add("addNewClass");
ManipulatingStyles.classList.remove("ManipulatingStyles");
ManipulatingStyles.classList.toggle("toggleClass");
console.log(
  'ManipulatingStyles.classList.contains("toggleClass")',
  ManipulatingStyles.classList.contains("toggleClass")
);
ManipulatingStyles.style.width = "100px";
ManipulatingStyles.style.height = "100px";
ManipulatingStyles.style.backgroundColor = "PaleTurquoise";

// =========================
// TODO / Исправить
// как конспект - ОК! , но пользы мало
//
// ниже в комментариях я опишу как исправить улучшить данную реализацию, можешь добавить туда пару методов для работы с classList и style-s ...
// =========================

// --------- Working with Events -------------

// Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.
// window.onload = function () {
//   alert("Страница загружена");
// };

// Когда посетитель покидает страницу, на объекте window генерируется событие unload
// window.unload = function () {
//   alert("Страница покидается");
// };

// window.onbeforeunload = function () {
//   return false;
// };

// =========================
// TODO / Исправить
// 1. просьба - даже в черновиках, постарайся избегать использование 'alert', сорри, но я пока закомменчу код ((
// т.к., оч трудно запускать и проверять как и что работает
// ... немного об alert - При его появлении дальнейшее выполнение кода страницы прекращается до тех пор, пока пользователь не закроет это окно
// Подробнее можно посмотреть тут (+ инфа про - alert() / prompt() / confirm()) - https://itchief.ru/lessons/javascript/javascript-methods-alert-prompt-confirm
// 2. Все выше перечисленные методы нужно будет вынести в отдельную функцию - АПИ-Документа, и в нужный момент нужно буде их запустить
// =========================

function checkPhoneKey(key) {
  console.log(key);
  return (
    (key >= "0" && key <= "9") ||
    key == "+" ||
    key == "(" ||
    key == ")" ||
    key == "-"
  );
}

// =========================
// TODO / Исправить
// Функция есть, но нигде не вызывается, очень странные условия...
// добавь комменты + пару штук вызовов, отметь в комментах что получилось
// и самое главно, какая у функции цель - если тут основная цель, написать цепочку альтернативных условий - то ок,
// так и напиши, либо тут есть подвох, тогда тоже опиши его тут?
// Посмотри и разбери "строгое" и "нестрогое" сравнение, в чем разница/особенность?
// =========================

// window.addEventListener("scroll", function () {
//   this.alert("Страница прокручивается");
// });

inputOnfocus.onfocus = function () {
  this.style.backgroundColor = "blue";
};

inputOnfocus.onblur = function () {
  this.style.backgroundColor = "white";
};

const myList = document.getElementById("myList");

myList.addEventListener("click", function (e) {
  const target = e.target;
  if (target.matches("li")) {
    target.style.backgroundColor = "red";
  }
  setTimeout(() => {
    target.style.backgroundColor = "blue";
  }, 1000);
});

// <li>new element</li>
const newLi = document.createElement("li");
newLi.textContent = "new element";
myList.appendChild(newLi);

window.onload = function () {
  setTimeout(() => {
    target.style.backgroundColor = "blue";
  }, 1000);
};

// =========================
// TODO / Исправить
// 1. Вынести функцию setTimeout за пределы лексического окружения функции - window.onload
// 2. Чтобы это были две функции / вторая принимала аргументы из первой
// 3. Довести функцию до ума, чтобы можно было бы ее воспроизвести на фронте
// =========================

// =========================
// Общий комментарий
// 1. Просьба использовать однострочные комментарии, для удобства ревью и запуска определенного части кода
// 2. Желательно не использовать "var", изучить альтернативы и уметь объяснить в чем разница и преимущества
// 3. В HTML желательно добавить разделители по фичам (можно хотябы комментариями разделить, типа -
//   <!-- Start: First part -->
//   <!-- <h2>Work with DOM</h2> -->
//   <!-- End: First part -->)
// 4. Сделать одну функцию, которая собирает все комментарии в ДОМ-е
// =========================

// =========================
// Дополнительно
// В качестве доп.инфы в реадми файле добавил список некоторых методов для работы с ДОМ,
// возможно будет интересно проанализировать како-нить индивидуально )
// =========================

// =========================
// TODO / Что нужно сделать
//
// нужно реализовать одну функцию, в которой будет весь API работой с документам (работа с селекторами, класс-неймы, стили, анимации ти т.д...)
// как минимум - со всеми перечисленными выше методами, только в связке с ивентоми на странице
// (что касается анимаций - то сделать круг, только бордер первоначальный стиль, а потом после клика по ему, он медленно закрашивается в произвольный цвет, и каждый клик, цвет другой, тоже произвольный)
//
// Для реализации данной задачи, нужно: Создать отдельный файл js - назвать его например - 'document-api.js'
// =========================

// =========================
// TODO
// Попробовать разобрать такой конструктор - TextDecoder
// сделать пример, что бы в ответе в консоле, было любое читаемое слово, например -  Привет!
// =========================
