// ---------- Selecting elements -------------
// elements — это живая NodeList коллекция.
// То есть, она автоматически обновляется, когда элементы с таким же name добавляются/удаляются из документа.
// name — это значение поля  name элемента(элементов).
let playground = document.getElementById("playground");
let up = document.getElementsByName("up");
let h4 = document.getElementsByTagName("h4");
let textSpan = document.getElementsByClassName("textSpan");
let querySelectorById = document.querySelector("#querySelectorById");
let textQuerySelectorAll = document.querySelectorAll(".textQuerySelectorAll");
// в комментариях указаны текущие результаты
const resultsTask1 = {
  h4, // HTMLCollection [h4]
  playground, // div#playground
  querySelectorById, // div#querySelectorById
  textQuerySelectorAll, // NodeList(2) [p.textQuerySelectorAll, p.textQuerySelectorAll]
  textSpan, // HTMLCollection [span.textSpan]
  up, // NodeList [input]
};
console.log("resultsTask1 >", resultsTask1);
// ----------- Traversing elements ------------
// Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.
let array = [];
for (let i = 0; i < document.body.childNodes.length; i++) {
  array.push(document.body.childNodes[i].nodeName);
}
function unique(array) {
  let result = [];
  for (value of array) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}
console.log("resultsTask2 >", unique(array));
// Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему элементу.
document.body.childNodes[0] === document.body.firstChild;
document.body.childNodes[document.body.childNodes.length - 1] ===
  document.body.lastChild;
console.log("elem.firstChild", document.body.firstChild);
console.log("elem.lastChild", document.body.lastChild);
// let объявляет переменную с блочной областью видимости
// var объявляет переменную глобально или локально во всей функции, независимо от области блока.
// ---------- Manipulating elements -------------
let createLiElementsPrepend = document.createElement("li");
createLiElementsPrepend.innerHTML = "prepend-вставить в начало списка <ol>";
let createLiElementsAppend = document.createElement("li");
createLiElementsAppend.innerHTML = "append-вставить в конец списка <ol>";
manipulatingElements.before("before-вставить строку перед <ol>");
manipulatingElements.prepend(createLiElementsPrepend);
manipulatingElements.append(createLiElementsAppend);
manipulatingElements.after("after-вставить строку после <ol>");
// Метод insertAdjacentHTML позволяет вставлять произвольный HTML в любое место документа, в том числе и между узлами!
divInsertAdjacentHTML.insertAdjacentHTML(
  "beforebegin",
  "<p>beforebegin-перед списком</p>"
);
divInsertAdjacentHTML.insertAdjacentHTML(
  "afterbegin",
  "<p>afterbegin-внутрь списка, в самое начало.</p>"
);
divInsertAdjacentHTML.insertAdjacentHTML(
  "beforeend",
  "<p>beforeend-внутрь списка, в конец.</p>"
);
divInsertAdjacentHTML.insertAdjacentHTML(
  "afterend",
  "<p>afterend-после списка</p>"
);
// Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
// Мы также можем изменять его.
divInnerHTML.innerHTML = "<strong>innerHTML- изменяет содержимое тега</strong>";
console.log("divInnerHTML.innerHTML", divInnerHTML.innerHTML);
// innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков.
// умеет считывать стили и не возвращает содержимое скрытых элементов
divInnerText.innerText = "<strong>innerText- изменяет содержимое тега</strong>";
console.log("divInnerText.innerText", divInnerText.innerText);
// Свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>.
divTextContent.textContent =
  "textContent-Вставляет текст внутри тега не учитывая теги";
console.log("divTextContent.textContent", divTextContent.textContent);
// Свойство outerHTML содержит HTML элемента целиком
divOuterHTML.outerHTML =
  "<p>outerHTML-Замена тега div на тег p с заменой содержимого</p>";
// Получаем ссылку на элемент, перед которым мы хотим вставить sp1
let spanCreateElement = document.createElement("span");
spanCreateElement.innerHTML =
  "<strong>insertBefore-вставляет елемент перед выбраным элементом</strong>";
// Вставляем spanCreateElement перед spanChildElement
parentElement.insertBefore(spanCreateElement, spanChildElement);

// --------- Working with Attributes -------------
let divAttribute = document.getElementById("divAttribute");
function addAttributeHidden() {
  divAttribute.setAttribute("hidden", true);
}
function removeAttributeHidden() {
  divAttribute.removeAttribute("hidden", true);
}
function getAttributeNewAttribute() {
  console.log(
    'divAttribute.getAttribute("newAttribute")',
    divAttribute.getAttribute("newAttribute")
  );
}
function hasAttributeNewAttribute() {
  console.log(
    'divAttribute.hasAttribute("newAttribute")',
    divAttribute.hasAttribute("newAttribute")
  );
}
// --------- Manipulating Element’s Styles -------------
// Если мы присваиваем что-то elem.className, то это заменяет всю строку с классами.
// Иногда это то, что нам нужно, но часто мы хотим добавить/удалить один класс.
function addAndRemoveStyles() {
  let manipulatingStyles = document.getElementById("manipulatingStyles");
  manipulatingStyles.style.width = "400px";
  manipulatingStyles.style.height = "100px";
  manipulatingStyles.style.backgroundColor = "pink";
  manipulatingStyles.classList.toggle("manipulatingStyles");
}
function addStyles() {
  let addManipulatingStyles = document.getElementById("addManipulatingStyles");
  addManipulatingStyles.classList.add("manipulatingStyles");
}
function removeStyles() {
  let removeManipulatingStyles = document.getElementById(
    "removeManipulatingStyles"
  );
  removeManipulatingStyles.classList.remove("manipulatingStyles");
}
function removeStyles() {
  let removeManipulatingStyles = document.getElementById(
    "removeManipulatingStyles"
  );
  removeManipulatingStyles.classList.remove("manipulatingStyles");
}
function containsStyles() {
  let containsManipulatingStyles = document.getElementById(
    "containsManipulatingStyles"
  );
  console.log(
    'containsManipulatingStyles.classList.contains("containsClass");',
    containsManipulatingStyles.classList.contains("containsClass")
  );
  console.log(getComputedStyle(manipulatingStyles)); // Выводит все стили объекта
}

// --------- Working with Events -------------
// DOMContentLoaded-Браузер полностью загрузил HTML, было построено -дерево, но внешние ресурсы, такие как картинки и стили, могут еще не загружены
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
});
// Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.
window.onload = function (event) {
  console.log("onload");
};
// Когда посетитель покидает страницу, на объекте window генерируется событие unload
document.addEventListener("unload", (event) => {
  // При закрытии страницы выводит в консоли, также можно отправлять какие либо данные на сервер
  console.log("unload");
});
window.onbeforeunload = function () {
  // При выходе с сайта или перезагрузке спрашивает в диалоговом окне разрешение
  return false;
};
function checkPhoneKey(key) {
  // Функция выводт в input только значения которые могут использоваться при наборе телефона
  // Пример: +375294657895
  return (key >= "0" && key <= "9") || key === "+";
}
function onContextMenu() {
  // При клике правой кнопкой мыши
  console.log("клик правой кнопкой мыши");
}
function onClick() {
  // При при отправки формы вызовется функция
  console.log("отправка формы");
}
window.addEventListener("scroll", function () {
  console.log("Страница прокручивается");
});

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

// =========================
// TODO / Что нужно сделать
//
// нужно реализовать одну функцию, в которой будет весь API работой с документам (работа с селекторами, класс-неймы, стили, анимации ти т.д...)
// как минимум - со всеми перечисленными выше методами, только в связке с ивентоми на странице
// (что касается анимаций - то сделать круг, только бордер первоначальный стиль, а потом после клика по ему, он медленно закрашивается в произвольный цвет, и каждый клик, цвет другой, тоже произвольный)
//
// Для реализации данной задачи, нужно: Создать отдельный файл js - назвать его например - 'document-api.js'
// =========================
