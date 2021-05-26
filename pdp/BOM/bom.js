// ---------- Window  -------------
// ----------window.innerWidth, window.innerHeight
// Для определения размера окна браузера можно использовать два свойства.
let w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
let x = document.getElementById("demo");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";

function windowOpen() {
  // Открыть новое окно в браузере
  window.open();
}
function windowClose() {
  // Закрыть текущее окно в браузере
  window.close();
}
// ----------sessionStorage
function sessionStorageSet() {
  // что все данные, сохранённые в localStorage не имеют определённого времени жизни, а данные в sessionStorage очищаются в момент окончания сессии текущий страницы.
  // Сохранение данных в sessionStorage
  sessionStorage.setItem("key", "Установлено значение в sessionStorage");
}
function sessionStorageGet() {
  // Получение данных из sessionStorage
  console.log(sessionStorage.getItem("key"));
}
function sessionStorageClear() {
  // Удаление данных в sessionStorage
  sessionStorage.clear();
}
// ----------localStorage
// Что в них важно – данные, которые в них записаны, сохраняются после обновления страницы (в случае sessionStorage) и даже после перезапуска браузера (при использовании localStorage).
function localStorageSet() {
  // что все данные, сохранённые в localStorage не имеют определённого времени жизни, а данные в sessionStorage очищаются в момент окончания сессии текущий страницы.
  // Сохранение данных в  localStorage
  localStorage.setItem("test", "Установлено значение в localStorage");
}
function localStorageGet() {
  // Получение данных в консоли из  localStorage
  console.log(localStorage.getItem("test"));
}
function localStorageClear() {
  // Удаление данных в  localStorage
  localStorage.clear();
}
// ---------Screen
function windowScreen() {
  // Возвращает высоту экрана в пикселях.
  console.log("Возвращает высоту экрана в пикселях", window.screen.height);
  // Возвращает ширину экрана в пикселях.
  console.log("Возвращает ширину экрана в пикселях", window.screen.width);
  // Возвращает глубину цвета экрана.
  console.log("Возвращает глубину цвета экрана", window.screen.colorDepth);
}
// ---------Location
function windowLocation() {
  let url = document.createElement("a");
  url.href =
    "https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container";
  //url.href-содержащий URL целиком
  console.log("url.href", url.href); // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
  //  url.protocol-содержащий протокол текущего URL, включая ':'.
  console.log("url.protocol", url.protocol); // https:
  //  url.host-содержащий хост, а именно имя хоста, ':' и порт.
  console.log("url.host", url.host); // developer.mozilla.org
  //  url.hostname-содержащий домен текущего URL.
  console.log("url.hostname", url.hostname); // developer.mozilla.org
  //  url.port-содержащий номер порта текущего URL.
  console.log("url.port", url.port); // (пустой - https подразумевает порт 443)
  //  url.pathname- содержащий первый '/' после хоста с последующим текстом URL.
  console.log("url.pathname", url.pathname); // /en-US/search
  //  url.search-содержащий '?' с последующими параметрами URL.
  console.log("url.search", url.search); // ?q=URL
  //  url.hash-содержащий '#' с последующим идентификатором
  console.log("url.hash", url.hash); // #search-results-close-container
  // url.origin-содержащий протокол, хост и порт текущего URL.
  console.log("url.origin", url.origin); // https://developer.mozilla.org
}
// ---------History
function windowHistoryBack() {
  // Чтобы переместиться назад по истории:
  window.history.back();
}
function windowHistoryForward() {
  // Переместиться вперёд (как если бы пользователь нажал на кнопку "Вперёд"):
  window.history.forward();
}
function windowHistoryLength() {
  // Узнать количество страниц, которые находятся в стеке истории, можно, получив значение свойства length:
  console.log(window.history.length);
}
// ---------Navigator
function navigatorUserAgent() {
  // Данное свойство хранит полную стоку юзер-агента,
  // Возвращает строку агента пользователя для данного браузера.
  console.log(navigator.userAgent);
}
function navigatorGeolacation() {
  // Объект navigator хранит свойство geolocation, с помощью которого можно получить географическое положение пользователя. Для получения положения используется метод getCurrentPosition()
  navigator.geolocation.getCurrentPosition(success, error);
  function success(position) {
    // latitude: географическая широта
    var latitude = position.coords.latitude;
    // longitude: географическая долгота
    var longitude = position.coords.longitude;
    // altitude: высота
    var altitude = position.coords.altitude;
    // speed: скорость, с которой перемещается пользователь (например, если он идет или перемещается на транспорте)
    var speed = position.coords.speed;

    document.write("Широта: " + latitude + "<br/>");
    document.write("Долгота: " + longitude + "<br/>");
    document.write("Высота: " + altitude + "<br/>");
    document.write("Скорость перемещения: " + speed + "<br/>");
  }
  function error(obj) {
    document.write("Ошибка при определении положения");
  }
}
// ---------alert
//Она показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».
function windowAlert() {
  alert("Hello");
}
// ---------prompt
// Функция prompt принимает два аргумента:
// title-Текст для отображения в окне.
// default-Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.
function windowPrompt() {
  prompt("Заголовок", "Начальное значение");
}
// ---------confirm
function windowConfirm() {
  // Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}
// ---------cookie
// document.cookie-это небольшие строки данных, которые хранятся непосредственно в браузере. Они являются частью HTTP-протокола
// аутентификация:
// При входе на сайт сервер отсылает в ответ HTTP-заголовок Set-Cookie для того, чтобы установить куки со специальным уникальным идентификатором сессии («session identifier»).
// Во время следующего запроса к этому же домену браузер посылает на сервер HTTP-заголовок Cookie.
// Таким образом, сервер понимает, кто сделал запрос.
// path=/mypath
// Как правило, указывают в качестве пути корень path=/, чтобы наше куки было доступно на всех страницах сайта.
// domain=site.com
// Домен, на котором доступны наши куки.
// expires, max-age
// По умолчанию, если куки не имеют ни одного из этих параметров, то они удалятся при закрытии браузера. Такие куки называются сессионными («session cookies»).
// secure
// Куки следует передавать только по HTTPS-протоколу.
// samesite
// Это ещё одна настройка безопасности, применяется для защиты от так называемой XSRF-атаки (межсайтовая подделка запроса).
// специальные символы (пробелы), требуется кодирование
