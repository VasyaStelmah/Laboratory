// XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP - запросы к серверу без перезагрузки страницы.
const requestURL = 'https://jsonplaceholder.typicode.com/users';
sendRequest = (method, url, body = null) => {
	return new Promise((resolve, reject) => {
		// получаем instance класса
		const xhr = new XMLHttpRequest();
		// получаем данные методом GET
		xhr.open(method, url);
		// Затем нужно отправить запрос
		// Отправлять строку
		xhr.send(JSON.stringify(body));
		// Этот код сработает после того, как мы получим ответ сервера
		xhr.onload = () => {
			console.log(`Статус ответа сервера ${xhr.status}`)
			if (xhr.status >= 400) {
				reject(JSON.parse(xhr.response))
			} else {
				resolve(JSON.parse(xhr.response))
			}
		}
		xhr.onprogress = function (event) { // запускается периодически
			// event.loaded - количество загруженных байт
			// event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
			// event.total - количество байт всего (только если lengthComputable равно true)
			console.log(`Загружено ${event.loaded} из ${event.total}--${event.lengthComputable}`);
		};
		xhr.onerror = () => {
			reject(JSON.parse(xhr.response))
		}

	})
}
sendRequest('GET', requestURL)
	.then(data => console.log(data))
	.catch(err => console.log(err))
sendRequest('POST', requestURL, { name: 'Name LastName' })
	.then(data => console.log(data))
	.catch(err => console.log(err))