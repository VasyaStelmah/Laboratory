let inputData = [{
	place: "Место где было совершено нарушение",
	date: "2021-05-21",
	lawArticle: "12.09.2 - Превышение скорости движения ТС от 20 до 40 км/ч",
	documentTitle:
		"Постановление по видеофиксации №11111111111111111111 от 20.05.2021",
	coordinates: {
		lat: '55.7522200',
		long: '37.6155600'
	},
	coordinate: ['55.7522200', '37.6155600'],
}];
insertElement = (key, value) => root.insertAdjacentHTML("beforeend", `<h3>${key}:</h3><div>${typeof value === 'string' ? value : Object.values(value)}</div>`);
inputDataFunc = (array) => {
	return array.map((obj) => {
		return Object.entries(obj).map((item) => {
			item[0] === 'place' ? insertElement('Место', item[1])
				: item[0] === 'date' ? insertElement('Дата', item[1])
					: item[0] === 'lawArticle' ? insertElement('Статья', item[1])
						: item[0] === 'documentTitle' ? insertElement('Постановление', item[1])
							: insertElement(item[0], item[1])
		})
	})
};
inputDataFunc(inputData);