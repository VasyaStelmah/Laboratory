let inputData = [{
	place: "Место где было совершено нарушение",
	date: "2021-05-21",
	lawArticle: "12.09.2 - Превышение скорости движения ТС от 20 до 40 км/ч",
	documentTitle:
		"Постановление по видеофиксации №11111111111111111111 от 20.05.2021",
}];
const root = document.getElementById("root")
inputDataFunc = (data) => {
	data.map((item) => {
		root.insertAdjacentHTML(
			"afterbegin",
			`<div>Место</div>
			<div>${item.place}</div>
			<div>Дата</div>
			<div>${item.date}</div>
			<div>Статья</div>
			<div>${item.lawArticle}</div>
			<div>Постановление</div>
			<div>${item.documentTitle}</div>
			`
		);
	})
};
inputDataFunc(inputData)