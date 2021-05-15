// /*----------Selecting elements-------------*/
// let divById = document.getElementById("playground");
// // elements — это живая NodeList коллекция. То есть,  она автоматически обновляется, когда элементы с таким же name добавляются/удаляются из документа.
// // name — это значение поля  name элемента(элементов).
// let up = document.getElementsByName("up");
// let h1 = document.getElementsByTagName("h1");
// let pByClassName = document.getElementsByClassName("text");
// let div = document.querySelector("#playground");
// let p = document.querySelectorAll(".text");

// /*----------Traversing elements-------------*/
// // Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.
// for (var i = 0; i < document.body.childNodes.length; i++) {
//   alert(document.body.childNodes[i]);
// }

/*----------Manipulating elements-------------*/
ol.before("before"); // вставить строку "before" перед <ol>
ol.after("after"); // вставить строку "after" после <ol>

let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
ol.prepend(liFirst); // вставить liFirst в начало <ol>

let liLast = document.createElement("li");
liLast.innerHTML = "append";
ol.append(liLast); // вставить liLast в конец <ol>

// elem.insertAdjacentHTML(where, html)
// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку.
// Второй параметр – это HTML-строка, которая будет вставлена именно «как HTML».
div.insertAdjacentHTML("beforebegin", "<p>перед elem.</p>");
div.insertAdjacentHTML("afterbegin", "<p>внутрь elem, в самое начало.</p>");
div.insertAdjacentHTML("beforeend", "<pвнутрь elem, в конец.</p>");
div.insertAdjacentHTML("afterend", "<p>после elem</p>");

p_inner_HTML.innerHTML =
  "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

// Получаем ссылку на элемент, перед которым мы хотим вставить sp1
var sp1 = document.createElement("span");
var sp2 = document.getElementById("childElement");
//Получаем ссылку на родителя sp2
var parentDiv = sp2.parentNode;

// Вставляем sp1 перед sp2
parentDiv.insertBefore(sp1, sp2);

setTimeout(() => div.remove(), 1000);

/*---------Working with Attributes-------------*/

console.log('input.getAttribute("checked")', input.getAttribute("checked"));
console.log(
  'input.setAttribute("checked", "hidden")',
  input.setAttribute("hidden", true)
);
console.log('input.hasAttribute("hidden")', input.hasAttribute("hidden"));
console.log(
  'input.removeAttribute("hidden")',
  input.removeAttribute("checked")
);

/*---------Manipulating Element’s Styles-------------*/

// Если мы присваиваем что-то elem.className, то это заменяет всю строку с классами. Иногда это то, что нам нужно, но часто мы хотим добавить/удалить один класс.
ManipulatingStyles.className = "ManipulatingStyles";

// Методы classList:
// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

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

/*---------Working with Events-------------*/

// // Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.
// window.onload = function () {
//   alert("Страница загружена");
// };
// // Когда посетитель покидает страницу, на объекте window генерируется событие unload
// window.unload = function () {
//   alert("Страница покидается");
// };
// window.onbeforeunload = function () {
//   return false;
// };
// function checkPhoneKey(key) {
//   console.log(key);
//   return (
//     (key >= "0" && key <= "9") ||
//     key == "+" ||
//     key == "(" ||
//     key == ")" ||
//     key == "-"
//   );
// }
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
